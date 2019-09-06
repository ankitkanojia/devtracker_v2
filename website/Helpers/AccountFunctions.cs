using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using repository.Helpers;
using repository.Helpers.Functions;
using repository.Models;
using repository.Models.ViewModels;

namespace website.Helpers
{
    public static class AccountFunctions
    {
        private static ApplicationUserManager _userManager;
        private static ApplicationSignInManager _signInManager;

        private static IAuthenticationManager AuthenticationManager =>
            HttpContext.Current.GetOwinContext().Authentication;

        public static ApplicationUserManager UserManager =>
            _userManager ?? HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();

        public static ApplicationSignInManager SignInManager =>
            _signInManager ?? HttpContext.Current.GetOwinContext().Get<ApplicationSignInManager>();

        public static string CurrentUser()
        {
            return HttpContext.Current.User.Identity.GetUserId();
        }

        public static string CurrentUserRole()
        {
            var x = UserManager.GetRoles(CurrentUser());

            if (x != null)
                return x.FirstOrDefault();
            else
                return string.Empty;
        }
        public static IList<string> CurrentUserRoles()
        {
            return UserManager.GetRoles(CurrentUser());
        }

        //public static async Task<ResponseVm> UpdateUserProfile(AspNetUser data)
        //{
        //    var response = new ResponseVm();
        //    try
        //    {
        //        var currentUserProfile = await GetCurrentUserProfile();

        //        if (currentUserProfile != null)
        //        {
        //            currentUserProfile.FullName = data.FullName;
        //            currentUserProfile.ProfileImage = data.ProfileImage;
        //            currentUserProfile.DateOfBirth = data.DateOfBirth;
        //            currentUserProfile.FacebookLink = data.FacebookLink;
        //            currentUserProfile.TwitterLink = data.TwitterLink;
        //            currentUserProfile.LinkedInLink = data.LinkedInLink;
        //            currentUserProfile.PhoneNumber = data.PhoneNumber;

        //            await UserManager.UpdateAsync(currentUserProfile);

        //            response.Code = (int)EnumList.Response.Success;
        //            response.Message = SuccessMessage.Updated;
        //        }
        //        else
        //        {
        //            response.Code = (int)EnumList.Response.Error;
        //            response.Message = ErrorMessage.DataNotAvailable;
        //        }

        //    }
        //    catch (Exception e)
        //    {
        //        response.Code = (int)EnumList.Response.Exception;
        //        response.Message = e.Message;
        //    }

        //    return response;
        //}

        public static async Task<ApplicationUser> GetCurrentUserProfile()
        {
            var currentUserId = CurrentUser();
            var details = await UserManager.FindByIdAsync(currentUserId);

            return details;
        }

        public static async Task<ResponseVm> Register(string email, string fullname, string password, string roleName)
        {
            var response = new ResponseVm();

            try
            {
                using (var db = new DBEntities())
                {
                    var user = new ApplicationUser
                    { UserName = email, Email = email, FullName = fullname, IsActive = true };
                    var result = await UserManager.CreateAsync(user, password);

                    if (result.Succeeded)
                    {
                        //Add role
                        var resultRole = UserManager.AddToRole(user.Id, roleName);

                        if (resultRole.Succeeded)
                        {
                            // Send an email for verification
                            await SendVerificationEmail(user.Id, roleName);

                            response.Code = (int)EnumList.Response.Success;
                            response.Message = "We`ve sent verification email in your inbox for email verification!";
                        }
                        else
                        {
                            response.Code = (int)EnumList.Response.Error;
                            response.Message = string.Join(",", resultRole.Errors);
                        }
                    }
                    else
                    {
                        response.Code = (int)EnumList.Response.Error;
                        response.Message = string.Join(",", result.Errors);
                    }
                }
            }
            catch (Exception e)
            {
                response.Code = (int)EnumList.Response.Exception;
                response.Message = e.Message;
            }

            return response;
        }

        public static async Task<ResponseVm> ConfirmEmail(string userId, string code)
        {
            var response = new ResponseVm();

            try
            {
                var result = await UserManager.ConfirmEmailAsync(userId, code);
                if (result.Succeeded)
                {
                    response.Code = (int)EnumList.Response.Success;
                    response.Message = "Your account successfully validated.";
                }
                else
                {
                    response.Code = (int)EnumList.Response.Error;
                    response.Message = string.Join(",", result.Errors);
                }
            }
            catch (Exception e)
            {
                response.Code = (int)EnumList.Response.Exception;
                response.Message = e.Message;
            }

            return response;
        }

        public static async Task SendVerificationEmail(string userId, string roleName)
        {
            try
            {
                var controller = new UrlHelper(HttpContext.Current.Request.RequestContext);

                var code = await UserManager.GenerateEmailConfirmationTokenAsync(userId);
                var callbackUrl = controller.Action("ConfirmEmail", "Home", new { userId, code },
                    HttpContext.Current.Request.Url.Scheme);

                var replacement = new Dictionary<string, string>
                {
                    {"#name#", "User"},
                    {"#link-activate-account#", callbackUrl}
                };

                var emailTemplete =
                    await CommonFunctions.GetEmailTemplate((int)EnumList.EmailTemplate.VerificationEmail, true,
                        replacement);

                if (emailTemplete != null)
                    await UserManager.SendEmailAsync(userId, emailTemplete.Subject, emailTemplete.Body);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public static async Task<LoginVm> Login(string email, string password, bool isRememberMe)
        {
            var response = new LoginVm();

            try
            {
                var user = await UserManager.FindByEmailAsync(email);

                if (user == null)
                {
                    response.Code = (int)EnumList.Response.Error;
                    response.Message = "Invalid login attempt.";
                    return response;
                }

                //Add this to check if the email was confirmed.
                if (!await UserManager.IsEmailConfirmedAsync(user.Id))
                {
                    response.Code = (int)EnumList.Response.Error;
                    response.Message = "You need to confirm your email.";
                    response.IsShowSendVerificationEmail = true;
                    response.UserId = user.Id;
                    return response;
                }

                if (await UserManager.IsLockedOutAsync(user.Id))
                {
                    response.Code = (int)EnumList.Response.Error;
                    response.Message = "Lockout";
                    response.LockOutDateTime = user.LockoutEndDateUtc;
                    return response;
                }

                if (!user.IsActive)
                {
                    response.Code = (int)EnumList.Response.Error;
                    response.Message = "Your account is deactivated.";
                    return response;
                }

                var result = await SignInManager.PasswordSignInAsync(email, password, isRememberMe, true);

                switch (result)
                {
                    case SignInStatus.Success:
                        CookieHelper.Set(StaticValues.CookieProfileImage, user.ProfileImage);
                        CookieHelper.Set(StaticValues.CookieFullName, user.FullName);
                        var userRole = await UserManager.GetRolesAsync(user.Id);
                        if (userRole.Any()) CookieHelper.Set(StaticValues.CookieRoleName, string.Join(",", userRole));
                        response.Code = (int)EnumList.Response.Success;
                        response.Message = "Welcome " + user.FullName + "!";
                        break;
                    case SignInStatus.LockedOut:
                        response.Code = (int)EnumList.Response.Error;
                        response.Message = "Lockout";
                        response.LockOutDateTime = user.LockoutEndDateUtc;
                        break;
                    case SignInStatus.Failure:
                        response.Code = (int)EnumList.Response.Error;
                        response.Message = "Invalid login attempt.";
                        break;
                    default:
                        response.Code = (int)EnumList.Response.Error;
                        response.Message = "Invalid login attempt.";
                        break;
                }
            }
            catch (Exception e)
            {
                response.Code = (int)EnumList.Response.Exception;
                response.Message = e.Message;
            }

            return response;
        }

        public static async Task<ResponseVm> ForgotPassword(string email)
        {
            var response = new ResponseVm();

            try
            {
                var user = await UserManager.FindByNameAsync(email);
                var controller = new UrlHelper(HttpContext.Current.Request.RequestContext);
                var code = await UserManager.GeneratePasswordResetTokenAsync(user.Id);
                var callbackUrl = controller.Action("ResetPassword", "Home", new { userId = user.Id, code },
                    HttpContext.Current.Request.Url.Scheme);

                var replacement = new Dictionary<string, string>
                {
                    {"#name#", user.UserName},
                    {"#link-reset-password#", callbackUrl}
                };

                var emailTemplate =
                    await CommonFunctions.GetEmailTemplate((int)EnumList.EmailTemplate.ResetPassword, true,
                        replacement);

                var emailService = new EmailService();
                await emailService.SendAsync(new IdentityMessage
                {
                    Body = emailTemplate.Body,
                    Destination = user.Email,
                    Subject = emailTemplate.Subject
                });

                response.Code = (int)EnumList.Response.Success;
            }
            catch (Exception e)
            {
                response.Code = (int)EnumList.Response.Exception;
                response.Message = e.Message;
            }

            return response;
        }

        public static async Task<ResponseVm> ResetPassword(string code, string email, string password)
        {
            var response = new ResponseVm();

            try
            {
                var user = await UserManager.FindByNameAsync(email);

                if (user != null)
                {
                    var result = await UserManager.ResetPasswordAsync(user.Id, code, password);

                    if (result.Succeeded)
                        response.Code = (int)EnumList.Response.Success;
                    else
                        response.Message = string.Join(",", result.Errors);
                }
                else
                {
                    // Don't reveal that the user does not exist
                    response.Message = ErrorMessage.SomethingWentWrong;
                }


                response.Code = (int)EnumList.Response.Error;
            }
            catch (Exception e)
            {
                response.Code = (int)EnumList.Response.Exception;
                response.Message = e.Message;
            }

            return response;
        }

        public static void LogOff()
        {
            //Remove Form Cookie(s)
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            AuthenticationManager.SignOut();

            //Remove Session(s)

            //Remove Browser Cookie(s)
            //CookieHelper.DeleteAll(true);
        }
    }
}
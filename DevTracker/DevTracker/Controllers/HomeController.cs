using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Web.Security;
using DevTracker.WebHelpers;
using Repository.Helpers;
using Repository.Models;
using Repository.Models.ViewModels;

namespace DevTracker.Controllers
{

    public class HomeController : Controller
    {
        private readonly DBEntities _entities = new DBEntities();

        #region --> Login functionality
        public ActionResult Login(string returnUrl)
        {
            try
            {
                // We do not want to use any existing identity information
                EnsureLoggedOut();

                if (TempData["Success"] != null)
                    TempData["Success"] = TempData["Success"];

                if (TempData["Error"] != null)
                    TempData["Error"] = TempData["Error"];

                var accountVm = new AccountVm { ReturnUrl = returnUrl };

                return View(accountVm);
            }
            catch (Exception)
            {
                throw;
            }

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(AccountVm data)
        {
            try
            {
                using (_entities)
                {
                    // Ensure we have a valid viewModel to work with
                    if (!ModelState.IsValid)
                        return View(data);

                    //Initialise object of usermaster table
                    var userMaster = _entities.UserMasters.FirstOrDefault(s => s.Email == data.EmailLogin.Trim());

                    //Check that details is not null
                    if (userMaster != null)
                    {
                        var oldHashValue = userMaster.Hash;
                        var salt = userMaster.Salt;

                        var isLogin = Utilities.CompareHashValue(data.PasswordLogin.Trim(), userMaster.Email, oldHashValue, salt);

                        if (isLogin)
                        {
                            //Login Success
                            //For Set Authentication in Cookie (Remeber ME Option)
                            SignInRemember(data.Email, data.IsRemember);

                            //Set A Unique ID in session
                            CookieHelper.SetCookie(CookieName.UserMasterId, userMaster.UserMasterId.ToString(), 36);
                            CookieHelper.SetCookie(CookieName.Name, userMaster.Name, 36);
                            CookieHelper.SetCookie(CookieName.RoleMasterId, userMaster.RoleMasterId.ToString(), 36);

                            string profileImage;
                            if (!string.IsNullOrWhiteSpace(userMaster.Profile))
                                profileImage = BasicProperty.ProfilePath + userMaster.Profile;
                            else
                                profileImage = "/Content/img/userIcon.jpg";

                            CookieHelper.SetCookie(CookieName.ProfileImage, profileImage, 36);

                            //Set Menu in session
                            var menu = RoleManagement.GetMenu(userMaster.RoleMasterId);
                            Session["Menu"] = menu;

                            TempData["Success"] = "Welcome to DevTracker";

                            // If we got this far, something failed, redisplay form
                            // return RedirectToAction("Index", "Dashboard");
                            return RedirectToLocal(data.ReturnUrl);
                        }
                        else
                        {
                            TempData["Error"] = "Access Denied! You enter wrong credentials!";
                        }
                    }
                    else
                    {
                        TempData["Error"] = "Access Denied! You enter wrong credentials!";
                    }

                }

                return RedirectToAction("Login");
            }
            catch (Exception)
            {
                throw;
            }
        }

        #endregion

        #region --> Pre Required Method For Login

        //GET: EnsureLoggedOut
        protected virtual void EnsureLoggedOut()
        {
            // If the request is (still) marked as authenticated we send the user to the logout action
            if (Request.IsAuthenticated)
                Logout();
        }

        //POST: Logout
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Logout()
        {
            try
            {
                // First we clean the authentication ticket like always
                //required NameSpace: using System.Web.Security;
                FormsAuthentication.SignOut();

                // Second we clear the principal to ensure the user does not retain any authentication
                //required NameSpace: using System.Security.Principal;
                HttpContext.User = new GenericPrincipal(new GenericIdentity(string.Empty), null);

                Session.Clear();
                System.Web.HttpContext.Current.Session.RemoveAll();

                // Last we redirect to a controller/action that requires authentication to ensure a redirect takes place
                // this clears the Request.IsAuthenticated flag since this triggers a new request
                return RedirectToLocal();
            }
            catch
            {
                throw;
            }
        }

        //GET: RedirectToLocal
        private ActionResult RedirectToLocal(string returnUrl = "")
        {
            try
            {
                // If the return url starts with a slash "/" we assume it belongs to our site
                // so we will redirect to this "action"
                if (!string.IsNullOrWhiteSpace(returnUrl) && Url.IsLocalUrl(returnUrl))
                    return Redirect(returnUrl);

                // If we cannot verify if the url is local to our host we redirect to a default location
                return RedirectToAction("Index", "Dashboard");
            }
            catch
            {
                throw;
            }
        }


        protected virtual void SignInRemember(string userName, bool isPersistent = false)
        {
            // Clear any lingering authencation data
            FormsAuthentication.SignOut();

            // Write the authentication cookie
            FormsAuthentication.SetAuthCookie(userName, isPersistent);
        }

        #endregion

        #region --> Registration functionality
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Register(AccountVm data)
        {
            try
            {
                using (_entities)
                {
                    //Confirm that model is valid
                    if (!ModelState.IsValid)
                        return RedirectToAction("Login", "Home", data);

                    //Initialise object of usermaster table
                    var userMaster = _entities.UserMasters.FirstOrDefault(s => s.Email == data.Email.Trim());

                    //Check that details is not null
                    if (userMaster != null)
                    {
                        TempData["Error"] = "This email already registered with us.";
                    }
                    else
                    {
                        //Create HASH & SALT
                        var salt = Utilities.GenerateSalt(32);
                        var hash = Utilities.GenerateHash(data.Password.Trim(), data.Email.Trim(), salt);

                        //Create instance of table
                        userMaster = new UserMaster();
                        userMaster.CopyProperties(data);
                        userMaster.Hash = hash;
                        userMaster.Salt = salt;
                        userMaster.CreatedDate = DateTime.Now;
                        userMaster.IsActive = true;
                        userMaster.IsTermAccept = true;
                        userMaster.RoleMasterId = (int)EnumList.Roles.Designer;

                        //Todo: Email verification task
                        userMaster.IsEmailVerified = true;

                        _entities.UserMasters.Add(userMaster);
                        await _entities.SaveChangesAsync();

                        //Create response message
                        TempData["Success"] = "Registerd done successfully";
                    }

                    return RedirectToAction("Login");
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region --> Recover & Reset password functionality
        public ActionResult RecoverPassword()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult RecoverPassword(RecoverPasswordVm data)
        {
            try
            {
                using (_entities)
                {
                    if (!ModelState.IsValid)
                        return View(data);

                    //Check that email address is exist
                    var userInfo = _entities.UserMasters.FirstOrDefault(s => s.Email == data.Email.Trim());

                    if (userInfo != null)
                    {
                        //Generate and save token
                        var randomStringGenerator = new Utilities.RandomStringGenerator();
                        userInfo.Tokens = randomStringGenerator.GetRandomString(64, Utilities.RandomStringGenerator.AlphanumericCaps.ToCharArray());
                        userInfo.TokensGenerated = DateTime.Now;
                        _entities.Entry(userInfo);
                        _entities.SaveChanges();

                        //Send mail HERE
                        var replacement = new Dictionary<string, string>
                        {
                            {"#name#", userInfo.Name},
                            {"#link#", BasicProperty.RecoverPasswordLink + userInfo.Tokens}
                        };

                        //Sent email from HERE
                        var isEailSent = SendEmail.Templete(replacement, data.Email, (int)EnumList.EmailTemplete.ForgotPassword);

                        if (isEailSent)
                            TempData["Success"] = "Please check your mailbox.";
                        else
                            TempData["Error"] = "Unable to send mail to your mail box.";
                    }
                    else
                    {
                        TempData["Error"] = "This email is not registered with us";
                    }

                    return View(data);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        public ActionResult ResetPassword(string id)
        {
            try
            {
                using (_entities)
                {
                    var userInfo = _entities.UserMasters.FirstOrDefault(s => s.Tokens == id);

                    if (userInfo != null)
                    {
                        if (userInfo.TokensGenerated.Value.AddHours(24) < DateTime.Now)
                        {
                            TempData["Error"] = "Link expired.";
                        }
                        else
                        {
                            var resetPasswordVm = new ResetPasswordVm { UserMasterId = userInfo.UserMasterId };

                            return View(resetPasswordVm);
                        }
                    }
                    else
                    {
                        TempData["Error"] = "Invalid request found.";
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return RedirectToAction("Login");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ResetPassword(ResetPasswordVm data)
        {
            try
            {
                using (_entities)
                {
                    if (!ModelState.IsValid)
                        return View(data);

                    var userInfo = _entities.UserMasters.FirstOrDefault(s => s.UserMasterId == data.UserMasterId);

                    if (userInfo != null)
                    {
                        //Create HASH & SALT
                        var salt = Utilities.GenerateSalt(32);
                        var hash = Utilities.GenerateHash(data.Password.Trim(), userInfo.Email.Trim(), salt);

                        userInfo.Salt = salt;
                        userInfo.Hash = hash;
                        userInfo.Tokens = string.Empty;
                        _entities.Entry(userInfo).State = EntityState.Modified;
                        _entities.SaveChanges();

                        TempData["Success"] = "Your password change successfully";

                        return View("Login");

                    }
                    else
                    {
                        TempData["Error"] = "Something went wrong. Please try after some time";
                    }

                }
            }
            catch (Exception)
            {
                throw;
            }

            return View(data);
        }
        #endregion

        public ActionResult E404()
        {
            return View();
        }

        public ActionResult E500()
        {
            return View();
        }

        public ActionResult Maintenance()
        {
            return View();
        }

        public ActionResult TestPage()
        {
            return View();
        }
    }


}
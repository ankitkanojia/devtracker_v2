using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using repository.Helpers;
using repository.Models.ViewModels;
using website.Helpers;

namespace website.Controllers
{
    public class HomeController : Controller
    {
        public async Task<ActionResult> Index(string returnUrl, string userId, string code)
        {
            var model = new AuthVm { IsShowSendVerificationEmail = false, ReturnUrl = returnUrl };
            if (string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(code)) return View(model);
            await AccountFunctions.ConfirmEmail(userId, code);
            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Login(AuthVm model)
        {
            var response = await AccountFunctions.Login(model.Email, model.Password, model.IsRemember);

            if (response.Code == (int)EnumList.Response.Success)
            {
                Notification.Success = response.Message;

                if (Url.IsLocalUrl(model.ReturnUrl)) return Redirect(model.ReturnUrl);
                return RedirectToAction("Index", "Dashboard");
            }

            if (response.Message.Equals("Lockout", StringComparison.InvariantCultureIgnoreCase))
                return View("Lockout", new LockoutVm { Email = model.Email, UnlockDate = response.LockOutDateTime });

            if (response.Message.Equals("You need to confirm your email.", StringComparison.InvariantCultureIgnoreCase))
                model.IsShowSendVerificationEmail = true;

            ModelState.AddModelError("er", response.Message);

            return View("Index", model);
        }





        //public ActionResult LogOff()
        //{
        //    AccountFunctions.LogOff();
        //    return RedirectToAction("Index");
        //}

        //[HttpPost]
        //[AllowAnonymous]
        //public async Task<ActionResult> Register(AccountVm model)
        //{
        //    if (!ModelState.IsValid) return View(model);

        //    var response = await AccountFunctions.Register(model.Email, model.FullName, model.Password, model.RoleName);

        //    if (response.Code == (int)EnumList.Response.Success)
        //        return View(new AccountVm { IsShowEmailConfirm = true });

        //    // If we got this far, something failed, redisplay form
        //    ModelState.AddModelError("er", response.Message);
        //    return View(model);
        //}

        //public async Task<ActionResult> VerificationEmail(string id)
        //{
        //    try
        //    {
        //        await AccountFunctions.SendVerificationEmail(id, StaticValues.RoleUser);
        //        return View("Index",
        //            new LoginVm { IsShowSendVerificationEmail = false, RoleName = StaticValues.RoleUser });
        //    }
        //    catch (Exception e)
        //    {
        //        Console.WriteLine(e);
        //        throw;
        //    }
        //}


        //#region --> Forgot Password

        //public ActionResult ForgotPassword()
        //{
        //    return View(new ForgotPasswordVm
        //    {
        //        IsShowSuccessMessage = false
        //    });
        //}

        //[HttpPost]
        //public async Task<ActionResult> ForgotPassword(ForgotPasswordVm model)
        //{
        //    var data = await AccountFunctions.ForgotPassword(model.Email);

        //    if (data.Code == (int)EnumList.Response.Success)
        //        return View(new ForgotPasswordVm { IsShowSuccessMessage = true });

        //    Notification.Error = data.Message;
        //    return View(new ForgotPasswordVm { IsShowSuccessMessage = false });
        //}

        //#endregion

        //#region --> Reset Password

        //public ActionResult ResetPassword(string code)
        //{
        //    return code == null ? View("Error") : View();
        //}

        //[HttpPost]
        //public async Task<ActionResult> ResetPassword(ResetPasswordVm model)
        //{
        //    if (!ModelState.IsValid) return View(model);

        //    var data = await AccountFunctions.ResetPassword(model.Code, model.Email, model.Password);

        //    if (data.Code == (int)EnumList.Response.Success) return RedirectToAction("Index");

        //    Notification.Error = data.Message;
        //    return View(model);
        //}

        //public async Task<ActionResult> ConfirmEmail(string userId, string code)
        //{
        //    var data = await AccountFunctions.ConfirmEmail(userId, code);
        //    return RedirectToAction("Index");
        //}

        //#endregion
    }
}
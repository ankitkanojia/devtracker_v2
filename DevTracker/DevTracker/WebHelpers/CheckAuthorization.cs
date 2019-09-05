using System.Web;
using System.Web.Mvc;
using Repository.Helpers;

namespace DevTracker.WebHelpers
{
    public class CheckAuthorization : AuthorizeAttribute
    {
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (string.IsNullOrWhiteSpace(CookieHelper.GetCookie(CookieName.UserMasterId)) || !HttpContext.Current.Request.IsAuthenticated || HttpContext.Current.Session["Menu"] == null)
            {
                if (filterContext.HttpContext.Request.IsAjaxRequest())
                {
                    filterContext.HttpContext.Response.StatusCode = 302; //Found Redirection to another page. Here- login page. Check Layout ajaxError() script.
                    filterContext.HttpContext.Response.End();
                }
                else
                {
                    filterContext.Result = new RedirectResult(System.Web.Security.FormsAuthentication.LoginUrl + "?ReturnUrl=" +
                         filterContext.HttpContext.Server.UrlEncode(filterContext.HttpContext.Request.RawUrl));
                }
            }
            else
            {

                //Code HERE for page level authorization

            }
        }
    }
}
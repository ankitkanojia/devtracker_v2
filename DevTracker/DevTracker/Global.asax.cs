using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using DevTracker.Controllers;

namespace DevTracker
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        //protected void Application_Error(object sender, EventArgs e)
        //{
        //    var lastError = Server.GetLastError();
        //    Server.ClearError();
        //    var statusCode = lastError.GetType() == typeof(HttpException) ? ((HttpException)lastError).GetHttpCode() : 500;
        //    string action;
        //    switch (statusCode)
        //    {
        //        case 404:
        //            action = "E404";
        //            break;
        //        default:
        //            action = "E500";
        //            break;
        //    }

        //    var contextWrapper = new HttpContextWrapper(Context);
        //    var routeData = new RouteData();
        //    routeData.Values.Add("controller", "Home");
        //    routeData.Values.Add("action", action);
        //    IController controller = new HomeController();
        //    var requestContext = new RequestContext(contextWrapper, routeData);
        //    controller.Execute(requestContext);
        //    Response.End();
        //}
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevTracker.Controllers
{
    public class SingletonController : Controller
    {
        // GET: Singleton
        public ActionResult EmailTemplete()
        {
            return View();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using website.Helpers;

namespace website.Controllers
{
    public class HomeController : Controller
    {
        public async Task<ActionResult> Index()
        {
            await AccountFunctions.Login("admin@gmail.com", "sad", true);
            return View();
        }

       
    }
}
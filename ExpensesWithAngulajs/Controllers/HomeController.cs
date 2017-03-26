using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExpensesWithAngulajs.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        [OutputCache(Duration = 300, VaryByParam = "none")] //cached for 300 seconds  
        public ActionResult Index()
        {
            return View();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Web.Mvc;
using System.Configuration;

using Newtonsoft.Json;

namespace Demo.WebApp.Controllers
{
    public class DashboardAnalisisController : Controller
    {
        public ActionResult WapAnalisis()
        {
            return View();
        }

    }
}
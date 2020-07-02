using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Web.Mvc;
using System.Configuration;

using Newtonsoft.Json;

using Demo.WebApp.Utilities;

namespace Demo.WebApp.Controllers
{
    public class HomeController : Controller
    {

        #region "Action Result"
        public ActionResult Index(string openplataToken = "", string openplataJsonData = "")
        {
            ViewBag.SE_USUARIO_Usuario = "Hola";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        #endregion "Action Result"

        #region "JsonResult"
        public JsonResult WebConfig()
        {
            var Demo_WebAPIRest_URL = Funciones.AppSettings(Constantes.WebConfig.WebAPIRest_URL.Demo_WebAPIRest_URL);
            
            var WebAPIRestURL = JsonConvert.SerializeObject(new
            {
                Demo_WebAPIRest_URL = Demo_WebAPIRest_URL
            });

            return Json(WebAPIRestURL, JsonRequestBehavior.AllowGet);
        }

        #endregion "Combos"
    }
}
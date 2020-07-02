using System.Web.Mvc;

namespace Demo.WebApp.Controllers
{
    public class MaestroMaterialController : Controller
    {
        public ActionResult WapMaterial()
        {
            return View();
        }

        public ActionResult FrmMaterial(string Accion, string Id_Material)
        {
            ViewBag.Accion = Accion;
            ViewBag.Id_Material = Id_Material;
            return PartialView();
        }
    }
}
using System.Web.Mvc.Ajax;

namespace System.Web.Mvc
{
    public static class HelperMVC
    {
        /// <summary>
        /// Metodo para diferenciar acciones y tener un orden el codigo
        /// </summary>
        /// <param name="ajaxHelper"></param>
        /// <param name="linkText"></param>
        /// <param name="actionName">
        ///     Nombre de metodo que se ejecutara
        /// </param>
        /// <param name="controllerName">
        ///     Nombre de controlador
        /// </param>
        /// <param name="routeValues"></param>
        /// <param name="ajaxOptions">
        ///     Todas las acciones estan asociadas a las funciones
        ///         LoadLoading(): Muestra bloqueo de carga.
        ///         UnloadLoading(): Remueve bloqueo de carga.
        ///         
        ///     -OnBegin: Funcion jquery que se ejecutara antes de ingresar a metodo de controlador.
        ///     -OnComplete: Funcionjquery que se ejecutra al completar el metodo del controlador.
        ///     -OnError: Funcion jquery que se ejecuta si cuando ocurre un error durante la ejecucion de metodo en el controlador.
        /// </param>
        /// <param name="htmlAttributes"></param>
        /// <returns></returns>
        public static MvcHtmlString RawActionLink(this AjaxHelper ajaxHelper, string linkText, string actionName, string controllerName, object routeValues, AjaxOptions ajaxOptions, object htmlAttributes)
        {
            ajaxOptions.OnBegin = string.IsNullOrEmpty(ajaxOptions.OnBegin) ? "LoadLoading();" : string.Format("{0} {1}", "LoadLoading();", ajaxOptions.OnBegin);
            ajaxOptions.OnComplete = ajaxOptions.OnComplete == null ? "UnloadLoading();" : string.Concat(ajaxOptions.OnComplete, "UnloadLoading();");
            ajaxOptions.OnFailure = ajaxOptions.OnFailure == null ? "UnloadLoading();" : string.Concat(ajaxOptions.OnFailure, "UnloadLoading();");

            var repID = Guid.NewGuid().ToString();
            var lnk = ajaxHelper.ActionLink(repID, actionName, controllerName, routeValues, ajaxOptions, htmlAttributes);
            return MvcHtmlString.Create(lnk.ToString().Replace(repID, linkText));
        }

        public static MvcHtmlString RawActionLinkToPopUp(this AjaxHelper ajaxHelper, string linkText, string actionName, string controllerName, object routeValues, AjaxOptions ajaxOptions, object htmlAttributes)
        {
            ajaxOptions.OnBegin = string.IsNullOrEmpty(ajaxOptions.OnBegin) ? "LoadLoading();" : string.Format("{0} {1}", "LoadLoading();", ajaxOptions.OnBegin);
            ajaxOptions.OnComplete = ajaxOptions.OnComplete == null ? "UnloadLoading();" : string.Concat(ajaxOptions.OnComplete, "UnloadLoading();");
            ajaxOptions.OnFailure = ajaxOptions.OnFailure == null ? "UnloadLoading();" : string.Concat(ajaxOptions.OnFailure, "UnloadLoading();");

            var repID = Guid.NewGuid().ToString();
            var lnk = ajaxHelper.ActionLink(repID, actionName, controllerName, routeValues, ajaxOptions, htmlAttributes);
            return MvcHtmlString.Create(lnk.ToString().Replace(repID, linkText));
        }

        private static AjaxOptions Configuration(AjaxOptions ajaxOptions)
        {
            ajaxOptions.OnBegin = string.IsNullOrEmpty(ajaxOptions.OnBegin) ? "LoadLoading();" : string.Concat(ajaxOptions.OnBegin, "LoadLoading();");
            ajaxOptions.OnComplete = string.IsNullOrEmpty(ajaxOptions.OnComplete) ? "UnloadLoading();" : string.Concat(ajaxOptions.OnComplete, "UnloadLoading();");
            ajaxOptions.OnFailure = string.IsNullOrEmpty(ajaxOptions.OnFailure) ? "UnloadLoading();" : string.Concat(ajaxOptions.OnFailure, "UnloadLoading();");

            return ajaxOptions;
        }
    }
}
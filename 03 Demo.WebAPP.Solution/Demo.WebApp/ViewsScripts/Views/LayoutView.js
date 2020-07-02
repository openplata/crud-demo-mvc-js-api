/**
    * Resumen.
    * Objeto : Layout
    * Descripción : Script de Layout
    * Fecha de Creación : 2020-04-10 22:44
    * [RQ][Proyecto] de creación : OP_TE-WEBAPP00002 : Tesorería de Openplata
    * Autor : CEO Juan Casiano
    * ----------------------------------------------------------------------------------------
    * Modificaciones
    * Motivo Fecha Nombre Descripción
    * ----------------------------------------------------------------------------------------
*/

// <script src="~/ViewsScripts/Util/StringUtil.js"></script>
// <script src="~/ViewsScripts/Util/StringUtil.js"></script>


// BEGIN Openplata UI
var _Layout_UI_Datatable = "";
// END Openplata UI

// BEGIN Variables
var _Date = new Date();
var _Year = _Date.getFullYear();

var _Layout_Componente_Loader = '<div class="loader"><div class="ball-pulse"><div></div><div></div><div></div></div></div>';

var _Layout_LocationPathname = window.location.pathname;
var _Layout_LocalStorage = window.localStorage;
var _Layout_SessionStorage = window.sessionStorage;

// END Variables

// BEGIN Variables ViewBag
var _Layout_ViewBag_redirectURL = '';
var _Layout_ViewBag_SSOClientId = '';
var _Layout_ViewBag_SSOClientStatus = '';
var _Layout_ViewBag_Token = '';
var _Layout_ViewBag_UserInfo = '';
var _Layout_ViewBag_AppAccess = '';
// END Variables ViewBag

// BEGIN Información del Login
var _Layout_Location_Pathname = window.location.pathname;
var _Layout_Origin = window.location.origin;
var _Layout_Pathname = _Layout_Location_Pathname;
var _Layout_Home = "";

if (_Layout_Origin == "http://localhost")
    _Layout_Origin = "http://localhost/DemoMVC/";
else
    _Layout_Origin = _Layout_Origin + "/";

_Layout_Home = _Layout_Origin;
// END Información del Login

// BEGIN WebAPIRest
var _Demo_WebAPIRest_URL = "";

// END WebAPIRest

var _LayoutView = {
    Block: function (_Display) {
        var x = document.getElementById('divLayoutBlock');
        x.style.display = _Display;  // none : block

    },
    Config: function () {
        $.ajax({
            cache: false,
            type: "POST",
            datatype: "json",
            traditional: true,
            url: _Layout_Origin+"/Home/WebConfig",
            data: {  },
            success: function (response) {
                _Layout_LocalStorage.setItem('WebAPIRest_URL', response); 
                response = JSON.parse(response);
                _Demo_WebAPIRest_URL = response.Demo_WebAPIRest_URL;
                _LayoutView.Load();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
            }
        });

    },
    Load: function () {
        response = JSON.parse(_Layout_LocalStorage.getItem('WebAPIRest_URL'));
        _Demo_WebAPIRest_URL = response.Demo_WebAPIRest_URL;        
    },
    Ready: function () {
        
    },
    ActiveMenu: function (menu, divId) {
        /*
          Descripción : Pintar el menú activo
          Fecha de Creación : 2020-04-10 23:40
          [RQ][Proyecto] de creación : OP_TE-WEBAPP00002 : Tesorería de Openplata
          Autor : CEO Juan Casiano
        */
        var _divId = document.getElementById(divId);
        _divId.className = "mm-active";
        _divId.href = divId;
    },
    OnClickMenu: function (button) {
        /*
          Descripción : Corrección para que se visualice el menú de opciones al presionar el botón en el iPhone y en el iPad
          Fecha de Creación : 2020-04-10 23:36
          [RQ][Proyecto] de creación : OP_TE-WEBAPP00002 : Tesorería de Openplata
          Autor : CEO Juan Casiano
        */
        
        onResize();

        var className = button.className;

        var appContainer = document.getElementById("appContainer");
        var appContainerClassName = appContainer.className;

        var classIni = "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header fixed-footer";
        var classClose = "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header fixed-footer closed-sidebar-mobile closed-sidebar";
        var classCloseMobile = "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header fixed-footer closed-sidebar-mobile closed-sidebar sidebar-mobile-open";
        var classOpen = "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header fixed-footer";
        var classOpenMobile = "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header fixed-footer sidebar-mobile-open";

        if (className == "hamburger hamburger--elastic mobile-toggle-nav") {
            if (appContainerClassName == classIni)
                appContainer.className = classClose;
            else
                if (appContainerClassName == classClose)
                    appContainer.className = classOpen;
                else
                    appContainer.className = classOpenMobile;
        }
        else {
            if (appContainerClassName == classClose)
                appContainer.className = classOpen;
            else
                if (appContainerClassName == classCloseMobile)
                    appContainer.className = classOpenMobile;
                else
                    if (appContainerClassName == classOpen)
                        appContainer.className = classClose;
                    else
                        appContainer.className = classCloseMobile;
        }
    },
    Block: function (_Display) {
        /*
          Descripción : Mostrar o ocultar el div que bloquea el formulario mientras se ejecuta algún proceso
          Fecha de Creación : 2020-04-11 00:55
          [RQ][Proyecto] de creación : OP_TE-WEBAPP00002 : Tesorería de Openplata
          Autor : CEO Juan Casiano
        */

        var x = document.getElementById('divLayoutBlock');
        x.style.display = _Display;  // none : block
    },
    AccessMenu: function (access) {
        /*
          Descripción : Mostrar o ocultar los div del Header, SideBar, Main, Footer
          Fecha de Creación : 2020-04-11 00:57
          [RQ][Proyecto] de creación : OP_TE-WEBAPP00002 : Tesorería de Openplata
          Autor : CEO Juan Casiano
        */

        var _appHeader = document.getElementById('appHeader');
        var _appSideBar = document.getElementById('appSideBar');
        var _appMain = document.getElementById('appMain');
        var _appFooter = document.getElementById('appFooter');

        if (access) {
            access = 'block';
            _appMain.className = "app-main";
        }
        else {
            access = 'none';
            _appMain.className = "";
        }

        _appHeader.style.display = access;
        _appSideBar.style.display = access;
        _appFooter.style.display = access;
    },
    AccessLoad: function () {
        /* Pending */
    },
    CloseSessionConfirmation: function () {
        _Layout_Confirmacion('Cerrar Sesión', 'Estás seguro que deseas cerrar la sesión?', '', _LayoutAPIRest.CloseSession());
    }
}

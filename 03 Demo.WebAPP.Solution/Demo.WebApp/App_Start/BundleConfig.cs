using System.Web;
using System.Web.Optimization;

namespace Demo.WebApp
{
    public class BundleConfig
    {
        // Para obtener más información sobre Bundles, visite http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
            // preparado para la producción y podrá utilizar la herramienta de compilación disponible en http://modernizr.com para seleccionar solo las pruebas que necesite.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            RegisterOpenplata(bundles);
            RegisterLayout(bundles);
            RegisterValidateUnobtrusive(bundles);
            RegisterUnobtrusiveAjax(bundles);
        }

        private static void RegisterOpenplata(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Content/Openplata/Scripts").Include(
                "~/Content/Openplata/js/Script.js",
                "~/Content/Openplata/js/Validaciones.js"));

            bundles.Add(new StyleBundle("~/Content/Openplata/Style").Include(
                "~/Content/Openplata/css/Style.css",
                "~/Content/Openplata/css/Switch.css"));

        }

        private static void RegisterLayout(BundleCollection bundles)
        {
            // bootstrap
            bundles.Add(new ScriptBundle("~/AdminLTE/bootstrap/js").Include(
                "~/AdminLTE/bootstrap/js/bootstrap.min.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/bootstrap/css").Include(
                "~/AdminLTE/bootstrap/css/bootstrap.min.css"));

            // dist
            bundles.Add(new ScriptBundle("~/AdminLTE/dist/js").Include(
                "~/AdminLTE/dist/js/app.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/dist/css").Include(
                "~/AdminLTE/dist/css/admin-lte.min.css"));

            bundles.Add(new StyleBundle("~/AdminLTE/dist/css/skins").Include(
                "~/AdminLTE/dist/css/skins/_all-skins.min.css"));

            // documentation
            bundles.Add(new ScriptBundle("~/AdminLTE/documentation/js").Include(
                "~/AdminLTE/documentation/js/docs.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/documentation/css").Include(
                "~/AdminLTE/documentation/css/style.css"));

            // plugins | bootstrap-slider
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/bootstrap-slider/js").Include(
                "~/AdminLTE/plugins/bootstrap-slider/js/bootstrap-slider.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/bootstrap-slider/css").Include(
                "~/AdminLTE/plugins/bootstrap-slider/css/slider.css"));

            // plugins | bootstrap-wysihtml5
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/bootstrap-wysihtml5/js").Include(
                "~/AdminLTE/plugins/bootstrap-wysihtml5/js/bootstrap3-wysihtml5.all.min.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/bootstrap-wysihtml5/css").Include(
                "~/AdminLTE/plugins/bootstrap-wysihtml5/css/bootstrap3-wysihtml5.min.css"));

            // plugins | chartjs
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/chartjs/js").Include(
                "~/AdminLTE/plugins/chartjs/js/chart.min.js"));

            // plugins | ckeditor
            //bundles.Add(new ScriptBundle("~/AdminLTE/plugins/ckeditor/js").Include(
            //    "~/AdminLTE/plugins/ckeditor/js/ckeditor.js"));
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/ckeditor/4.8.0").Include(
                "~/AdminLTE/plugins/ckeditor/4.8.0/ckeditor.js",
                "~/AdminLTE/plugins/ckeditor/4.8.0/styles.js",
                "~/AdminLTE/plugins/ckeditor/4.8.0/build-config.js",
                "~/AdminLTE/plugins/ckeditor/4.8.0/config.js"));

            // plugins | colorpicker
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/colorpicker/js").Include(
                "~/AdminLTE/plugins/colorpicker/js/bootstrap-colorpicker.min.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/colorpicker/css").Include(
                "~/AdminLTE/plugins/colorpicker/css/bootstrap-colorpicker.css"));

            // plugins | datatables
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/datatables/js").Include(
                "~/AdminLTE/plugins/datatables/js/jquery.dataTables.min.js",
                "~/AdminLTE/plugins/datatables/js/dataTables.bootstrap.min.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/datatables/css").Include(
                "~/AdminLTE/plugins/datatables/css/dataTables.bootstrap.css"));

            // plugins | datepicker
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/datepicker/js").Include(
                "~/AdminLTE/plugins/datepicker/js/bootstrap-datepicker.js",
                "~/AdminLTE/plugins/datepicker/js/locales/bootstrap-datepicker*"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/datepicker/css").Include(
                "~/AdminLTE/plugins/datepicker/css/datepicker3.css"));

            // plugins | daterangepicker
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/daterangepicker/js").Include(
                "~/AdminLTE/plugins/daterangepicker/js/moment.min.js",
                "~/AdminLTE/plugins/daterangepicker/js/daterangepicker.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/daterangepicker/css").Include(
                "~/AdminLTE/plugins/daterangepicker/css/daterangepicker-bs3.css"));

            // plugins | fastclick
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/fastclick/js").Include(
                "~/AdminLTE/plugins/fastclick/js/fastclick.min.js"));

            // plugins | flot
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/flot/js").Include(
                "~/AdminLTE/plugins/flot/js/jquery.flot.min.js",
                "~/AdminLTE/plugins/flot/js/jquery.flot.resize.min.js",
                "~/AdminLTE/plugins/flot/js/jquery.flot.pie.min.js",
                "~/AdminLTE/plugins/flot/js/jquery.flot.categories.min.js"));

            // plugins | font-awesome
            bundles.Add(new StyleBundle("~/AdminLTE/plugins/font-awesome/css").Include(
                "~/AdminLTE/plugins/font-awesome/css/font-awesome.min.css"));

            // plugins | fullcalendar
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/fullcalendar/js").Include(
                "~/AdminLTE/plugins/fullcalendar/js/fullcalendar.min.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/fullcalendar/css").Include(
                "~/AdminLTE/plugins/fullcalendar/css/fullcalendar.min.css"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/fullcalendar/css/print").Include(
                "~/AdminLTE/plugins/fullcalendar/css/print/fullcalendar.print.css"));

            // plugins | icheck
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/icheck/js").Include(
                "~/AdminLTE/plugins/icheck/js/icheck.min.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/icheck/css").Include(
                "~/AdminLTE/plugins/icheck/css/all.css"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/icheck/css/flat").Include(
                "~/AdminLTE/plugins/icheck/css/flat/flat.css"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/icheck/css/sqare/blue").Include(
                "~/AdminLTE/plugins/icheck/css/sqare/blue.css"));

            // plugins | input-mask
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/input-mask/js").Include(
                "~/AdminLTE/plugins/input-mask/js/jquery.inputmask.js",
                "~/AdminLTE/plugins/input-mask/js/jquery.inputmask.date.extensions.js",
                "~/AdminLTE/plugins/input-mask/js/jquery.inputmask.extensions.js"));

            // plugins | ionicons
            bundles.Add(new StyleBundle("~/AdminLTE/plugins/ionicons/css").Include(
                "~/AdminLTE/plugins/ionicons/css/ionicons.min.css"));

            // plugins | ionslider
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/ionslider/js").Include(
                "~/AdminLTE/plugins/ionslider/js/ion.rangeSlider.min.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/ionslider/css").Include(
                "~/AdminLTE/plugins/ionslider/css/ion.rangeSlider.css",
                "~/AdminLTE/plugins/ionslider/css/ion.rangeSlider.skinNice.css"));

            // plugins | jquery
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/jquery/js").Include(
                "~/AdminLTE/plugins/jquery/js/jquery-3.2.1.min.js"
            ));

            // plugins | jquery-validate
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/jquery-validate/js").Include(
                "~/AdminLTE/plugins/jquery-validate/js/jquery.validate*"));

            // plugins | jquery-ui
            bundles.Add(new StyleBundle("~/AdminLTE/plugins/jquery-ui/css").Include(
                "~/AdminLTE/plugins/jquery-ui/css/jquery-ui.min.css",
                "~/AdminLTE/plugins/jquery-ui/structure/jquery-ui.structure.min.css",
                "~/AdminLTE/plugins/jquery-ui/theme/jquery-ui.theme.min.css"));

            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/jquery-ui/js").Include(
                "~/AdminLTE/plugins/jquery-ui/js/jquery-ui.min.js"));

            // plugins | jvectormap
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/jvectormap/js").Include(
                "~/AdminLTE/plugins/jvectormap/js/jquery-jvectormap-1.2.2.min.js",
                "~/AdminLTE/plugins/jvectormap/js/jquery-jvectormap-world-mill-en.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/jvectormap/css").Include(
                "~/AdminLTE/plugins/jvectormap/css/jquery-jvectormap-1.2.2.css"));

            // plugins | knob
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/knob/js").Include(
                "~/AdminLTE/plugins/knob/js/jquery.knob.js"));

            // plugins | morris
            bundles.Add(new StyleBundle("~/AdminLTE/plugins/morris/css").Include(
                "~/AdminLTE/plugins/morris/css/morris.css"));

            // plugins | momentjs
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/momentjs/js").Include(
                "~/AdminLTE/plugins/momentjs/js/moment.min.js"));

            // plugins | pace
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/pace/js").Include(
                "~/AdminLTE/plugins/pace/js/pace.min.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/pace/css").Include(
                "~/AdminLTE/plugins/pace/css/pace.min.css"));

            // plugins | slimscroll
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/slimscroll/js").Include(
                "~/AdminLTE/plugins/slimscroll/js/jquery.slimscroll.min.js"));

            // plugins | sparkline
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/sparkline/js").Include(
                "~/AdminLTE/plugins/sparkline/js/jquery.sparkline.min.js"));

            // plugins | timepicker
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/timepicker/js").Include(
                "~/AdminLTE/plugins/timepicker/js/bootstrap-timepicker.min.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/timepicker/css").Include(
                "~/AdminLTE/plugins/timepicker/css/bootstrap-timepicker.min.css"));

            // plugins | raphael
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/raphael/js").Include(
                "~/AdminLTE/plugins/raphael/js/raphael-min.js"));

            // plugins | select2 3.5
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/select2/3.5/js").Include(
                "~/AdminLTE/plugins/select2/3.5/js/select2.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/select2/3.5/css").Include(
                "~/AdminLTE/plugins/select2/3.5/css/select2.css",
                "~/AdminLTE/plugins/select2/3.5/css/select2-bootstrap.css"));
            // plugins | select2 4.0
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/select2/4.0/js").Include(
                "~/AdminLTE/plugins/select2/4.0/js/select2.full.min.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/plugins/select2/4.0/css").Include(
                "~/AdminLTE/plugins/select2/4.0/css/select2.min.css"));

            // plugins | morris
            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/morris/js").Include(
                "~/AdminLTE/plugins/morris/js/morris.min.js"));

            // plugins | TreeView
            bundles.Add(new StyleBundle("~/AdminLTE/plugins/tree/css").Include(
                "~/AdminLTE/plugins/tree/js/themes/default/style.css",
                "~/AdminLTE/plugins/tree/css/tree.css"));

            bundles.Add(new ScriptBundle("~/AdminLTE/plugins/tree/js").Include(
                "~/AdminLTE/plugins/tree/js/jquery.jstree.js"));

            // plugins | Notifi
            bundles.Add(new ScriptBundle("~/Notificaciones/Scripts").Include(
                "~/AdminLTE/plugins/notifi/bootstrap-notify.min.js"));

            // plugins | bootstrap-dialog
            bundles.Add(new ScriptBundle("~/AdminLTE/bootstrap-dialog/Scripts").Include(
                //"~/AdminLTE/plugins/bootstrap-dialog/js/_bootstrap-dialog.js"
                "~/AdminLTE/plugins/bootstrap-dialog/js/bootstrap-dialog.js"
            ));

            bundles.Add(new StyleBundle("~/AdminLTE/bootstrap-dialog/Style").Include(
                "~/AdminLTE/plugins/bootstrap-dialog/css/bootstrap-dialog.min.css"));
            
            //bootstrap-toggle
            bundles.Add(new ScriptBundle("~/AdminLTE/bootstrap-toggle/js").Include(
             "~/AdminLTE/plugins/bootstrap-toggle/js/bootstrap-toggle.min.js"));

            bundles.Add(new StyleBundle("~/AdminLTE/bootstrap-toggle/css").Include(
                "~/AdminLTE/plugins/bootstrap-toggle/css/bootstrap-toggle.min.css"));
        }

        private static void RegisterValidateUnobtrusive(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/ValidateUnobtrusive").Include(
                "~/Scripts/ValidateUnobtrusive/jquery.validate.unobtrusive.min.js"));
        }

        private static void RegisterUnobtrusiveAjax(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/UnobtrusiveAjax").Include(
                "~/Scripts/UnobtrusiveAjax/jquery.unobtrusive-ajax.min.js",
                "~/Scripts/Validate/jquery.validate.min.js",
                "~/Scripts/jquery.validate.bootstrap.js"
            ));
        }
    }
}

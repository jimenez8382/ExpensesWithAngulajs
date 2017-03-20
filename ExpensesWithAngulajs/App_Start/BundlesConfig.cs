using System.Web.Optimization;
namespace ExpensesWithAngulajs.App_Start
{
   public class BundlesConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //Scripts
            RegisterScripts(bundles);
            //Styles
            RegisterStyles(bundles);

            //Angular scripts
            RegisterAngularJs(bundles);
        }

        private static void RegisterStyles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Styles").Include("~/Content/bootstrap.min.css")
                    .Include("~/Content/materialize/css/materialize.min.css")
                    .Include("~/Content/angular-block-ui.min.css")
                    .Include("~/Content/Site.css")
                );
        }

        private static void RegisterScripts(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include("~/Scripts/jquery-{version}.js"));
            bundles.Add(new ScriptBundle("~/bundles/js").Include("~/Content/js/bootstrap.min.js")
                .Include("~/Scripts/materializematerialize.min.js"));
        }
        private static void RegisterAngularJs(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angularJs")
           .Include("~/Scripts/angular.min.js")
           .Include("~/Scripts/angular-route.min.js")
           .Include("~/Scripts/angular-block-ui.min.js")
           .Include("~/Scripts/angular-animate.min.js"));
        }
    }
}
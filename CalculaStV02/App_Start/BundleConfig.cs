using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.UI;

namespace CalculaStV02
{
    public class BundleConfig
    {
        // Para obter mais informações sobre o Agrupamento, visite https://go.microsoft.com/fwlink/?LinkID=303951
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/DFmasterpageJS").Include(
                //"~/Scripts/MasterPage/jquery-3.3.1.min.js",
                //"~/Scripts/MasterPage/jquery-confirm.js",
                
                "~/Scripts/Public/vanilla-masker.min.js",
               
                //"~/Scripts/MasterPage/jquery-ui-1-12-1.js",
                //"~/Scripts/MasterPage/popper.min.js",
                //"~/Scripts/MasterPage/bootstrap.min.js",
                //"~/Scripts/MasterPage/themeSelector.js",
                //"~/Scripts/MasterPage/js.cookie.js",
                //"~/Scripts/MasterPage/header.js",
                //"~/Scripts/MasterPage/aside.js",
                //"~/Scripts/MasterPage/processing.js",
                "~/Scripts/MasterPage/fadeInFadeOutVanilla.js",
                //"~/Scripts/MasterPage/DFmasterPage.js",
                //"~/Scripts/MasterPage/footer.js",
                "~/Scripts/MasterPage/tools.js"));

            bundles.Add(new StyleBundle("~/bundles/DFmasterpageCSS").Include(
            //"~/Content/MasterPage/bootstrap.min.css",
            "~/Css/MasterPage/jquery-confirm.css",
            "~/Css/MasterPage/DFmasterPage.css",
            //"~/Content/MasterPage/header.css",
            //"~/Content/MasterPage/aside.css",
            //"~/Content/MasterPage/footer.css",
            "~/Css/MasterPage/tools.css"));

            bundles.Add(new ScriptBundle("~/bundles/calculaSt2JS").Include(
                //"~/Scripts/Public/jquery-3.3.1.min.js",
                "~/Scripts/Public/jquery.dataTables.min.js",
                "~/Scripts/Public/modelConfirm.js",
                "~/Scripts/CalculaSt/2constructorParams.js",
                "~/Scripts/CalculaSt/2constructorHeader.js",
                "~/Scripts/CalculaSt/2constructorProdutos.js",
                "~/Scripts/CalculaSt/2paramsButtons.js",
                "~/Scripts/Public/chosen.jquery.min.js.js",
                "~/Scripts/CalculaSt/2newLine.js",
                "~/Scripts/CalculaSt/2navigateCells.js",
                "~/Scripts/CalculaSt/2searchProd.js",
                "~/Scripts/CalculaSt/2createInput.js",
                "~/Scripts/CalculaSt/2telaProdutos.js",
                "~/Scripts/CalculaSt/2visualFormat.js",
                "~/Scripts/CalculaSt/2params.js",
                "~/Scripts/BancoDados/2bancoDadosCalculaSt.js",
                "~/Scripts/CalculaSt/2permissions.js",
                "~/Scripts/CalculaSt/2saveInDb.js",
                "~/Scripts/CalculaSt/2loadInDb.js",
                "~/Scripts/CalculaSt/2viewAndEditPed.js",
                "~/Scripts/CalculaSt/2deletePed.js",
                //"~/Scripts/CalculaSt2/visualizarPedido.js",
                //"~/Scripts/CalculaSt2/editorPedido.js",
                "~/Scripts/CalculaSt/2inicializadorMaterializecss.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/calculaSt2CSS").Include(
                "~/Css/Public/jquery.dataTables.min.css",
                "~/Css/CalculaSt/2.css"
            ));



            BundleTable.EnableOptimizations = true;
            // Use a versão de Desenvolvimento do Modernizr para se desenvolver e aprender com ele. Em seguida, quando estiver
            // pronto para a produção, utilize a ferramenta de build em https://modernizr.com para escolher somente os testes que precisa
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //                "~/Scripts/modernizr-*"));
        }
    }
}
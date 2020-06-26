//######################################################################################################
//########################################## | ASIDE - MENU | ##########################################
//######################################################################################################
var larguraDocumento = $(document).width()
var alturaDocumento = $(document).height()
var larguraJanela = $(window).width()
var alturaJanela = $(window).height()
$('body').on('click dblclick keydown keypress keyup mousedown mousemove mouseout mouseover mouseup', function () {
    // larguraDocumento = $(document).width()
    // alturaDocumento = $(document).height()
    // larguraJanela = $(window).width()
    // alturaJanela = $(window).height()
    // console.log(`###########################################`)
    // console.log(`Largura do Documento: ${larguraDocumento}`)
    // console.log(`Altura do Documento: ${alturaDocumento}`)
    // console.log(`Largura da Janela: ${larguraJanela}`)
    // console.log(`Altura da Janela: ${alturaJanela}`)
    // console.log(`###########################################`)
    $('.aside').css('height', $(document).height());
    //var alturaAjustada = $('#mainPrincipal').height() + $('.header').height() + 10 + $('.footer').height();
    //if (alturaAjustada > alturaJanela) {
    //    $('.aside').css('height', alturaAjustada);
    //} else { $('.aside').css('height', alturaJanela); }

})
$(".aside").append('<div class="ui inverted vertical pointing menu">' +
    '<div class="divMenuInteiro"><div class="cardDashBoard" data-toggle="tooltip" data-placement="right" title="" data-original-title="Dashboard Faturamento">' +
    '<div class="letraD">D</div><div class="letraF">F</div></dashBoardEscrito></div>' +
    '<hr class="divisor"/>' +
    '<div class="Home" data-toggle="tooltip" data-placement="right" title="" data-original-title="Home"><i class="fas fa-home iconeHome"></i></div>' +
    '<hr class="divisor"/>' +

    '<div class="CalculaST" data-toggle="tooltip" data-placement="right" title="" data-original-title="CalculaST"><i class="fas fa-dollar-sign iconeCalculaSt"></i></div><hr class="divisor"/>' +
    '<div class="CalculaData" data-toggle="tooltip" data-placement="right" title="" data-original-title="CalculaData"><i class="far fa-calendar-alt iconeCalculaData"></i></div><hr class="divisor"/>' +
    '<div class="GGA" data-toggle="tooltip" data-placement="right" title="" data-original-title="GGA"><i class="fas fa-calculator iconeGGA"></i></div><hr class="divisor"/>' +
    '<div class="Ramais" data-toggle="tooltip" data-placement="right" title="" data-original-title="Ramais"><i class="fas fa-phone-alt iconeRamais"></i></div><hr class="divisor"/>' +
    '<div class="ASN" data-toggle="tooltip" data-placement="right" title="" data-original-title="Asn"><i class="fas fa-truck iconeAsn"></i></div><hr class="divisor"/>' +
    '<div class="Placa" data-toggle="tooltip" data-placement="right" title="" data-original-title="Placa"><i class="fas fa-truck-loading iconePlaca"></i></div><hr class="divisor"/>' +


    '<div class="linhaMenuHorizontal" id="menuLateralTabelas" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tabelas"><i class="fas fa-list iconeTabelas"></i></div>' +
    '<div class="Transportadoras menuLateralTabelas" style="display:none;" data-toggle="tooltip" data-placement="right" title="" data-original-title="Transportadoras"><i class="fas fa-level-up-alt fa-rotate-90" style="padding: 0px 5px;"></i><i class="fas fa-list-alt iconeTransportadoras"></i></div>' +
    '<div class="TES menuLateralTabelas" style="display:none;" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tipos de Entrada/Saída"><i class="fas fa-level-up-alt fa-rotate-90" style="padding: 0px 5px;"></i><i class="far fa-list-alt iconeTes"></i></div>' +
    '<div class="Formulas menuLateralTabelas" style="display:none;" data-toggle="tooltip" data-placement="right" title="" data-original-title="Fórmulas"><i class="fas fa-level-up-alt fa-rotate-90" style="padding: 0px 5px;"></i><i class="fas fa-th-list iconeFormulas"></i></div><hr class="divisor"/>' +
    '<div class="Sobre" data-toggle="tooltip" data-placement="right" title="" data-original-title="Sobre"><i class="fas fa-question-circle iconeSobre"></i></div><hr class="divisor"/>' +
    '<div class="Logout" data-toggle="tooltip" data-placement="right" title="" data-original-title="Logout"><i class="fas fa-sign-out-alt iconeLogout"></i></div><hr class="divisor"/></div>')
//######################################################################################################
//#################################### | CLICKS E REDIRECIONAMENTO | ###################################
//######################################################################################################
$('.Home').click(function () { processingOpen(); window.location = "/CalculaSt" });
$('.CalculaST').click(function () { processingOpen(); window.location = "/CalculaSt" });
$('.CalculaData').click(function () { processingOpen(); window.location = "/CalculaSt" });
$('.GGA').click(function () { processingOpen(); window.location = "/CalculaSt" });
$('.Ramais').click(function () { processingOpen(); window.location = "/CalculaSt" });
$('.ASN').click(function () { processingOpen(); window.location = "/CalculaSt" });
$('.Placa').click(function () { processingOpen(); window.location = "/CalculaSt" });
$('.Transportadoras').click(function () { processingOpen(); window.location = "/CalculaSt" });
$('.TES').click(function () { processingOpen(); window.location = "/CalculaSt1" });
$('.Formulas').click(function () { processingOpen(); window.location = "/CalculaSt" });
$('.Sobre').click(function () { processingOpen(); window.location = "/CalculaSt" });
/*$('.Logout').click(function () {
    $.ajax({
        type: "GET",
        url: "DashboardFaturamento.Master/MetodoASerChamado",
        success: function (msg) {
            // Do something interesting here.
        }
    });
 });
 */




function clickInMenu() {
    $('body').css('opacity', '0.10')
    $('.processing').fadeIn(500);
}










$('#menuLateralTabelas').click(function () { $('.menuLateralTabelas').toggle(500) })
$('.cardDashBoard').click(function () { $('descricaoMenu').fadeToggle("slow") })

var url = window.location.href;
var posicaoUrl = url.split("/")[url.split("/").length - 2]
// alert(posicaoUrl)
eval(`$('.${posicaoUrl}').addClass('paginaAtual')`)


$('.Logout').click(function () {

    $.confirm({
        theme: 'supervan',
        title: 'Logout?',
        content: 'Ao final do tempo, você será deslogado automaticamente!',
        autoClose: 'logoutUser|5000',
        buttons: {
            logoutUser: {
                text: 'Auto Sair',
                action: function () {
                    $.alert('O usuário foi deslogado!');
                    sessionStorage.setItem('chave', ''); sessionStorage.setItem('usuario', ''); abrirWindow = location.href = "login.aspx";
                }
            },
            cancelar: function () {
                $.alert('Cancelado! Você continuará logado!');
            }
        }
    });
   
    
   

});




//#########################################################################################################
//#										Inicialização dos Tooltips/Popover                                #
//#########################################################################################################	
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
});
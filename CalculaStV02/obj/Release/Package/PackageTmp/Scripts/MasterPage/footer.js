//#########################################################################################################
//#										Footer                                                            #
//#########################################################################################################	
var larguraDocumento = $(document).width()
var alturaDocumento = $(document).height()
var larguraJanela = $(window).width()
var alturaJanela = $(window).height()

$('body').on('click dblclick keydown keypress keyup mousedown mousemove mouseout mouseover mouseup', function () {
    larguraDocumento = $(document).width()
    alturaDocumento = $(document).height()
    larguraJanela = $(window).width()
    alturaJanela = $(window).height()
    // console.log(`###########################################`)
    // console.log(`Largura do Documento: ${larguraDocumento}`)
    // console.log(`Altura do Documento: ${alturaDocumento}`)
    // console.log(`Largura da Janela: ${larguraJanela}`)
    // console.log(`Altura da Janela: ${alturaJanela}`)
    // console.log(`###########################################`)
    // if($('footer').offset().top < alturaDocumento){
    // $('.footer').css('position', 'fixed')   
    // }

    if (alturaDocumento > alturaJanela) {
        console.log('PassouBruno')
        // $('.footer').css('display', 'none');
        $('.footer').css('position', 'static');
        //    bottom: 0;
        //$('footer').offset().top
    } else { $('.footer').css('position', 'fixed'); }



})

//$('.footer').append(`<div class="FooterInterno">Desenvolvido por Bruno Sajermann Copyright © 2019.</div>`)


$(document).on('resize', function () {


    //alert($(document).height())
})

//#########################################################################################################
//#										Header                                                            #
//#########################################################################################################
$(document).ready(function () {
    $('#cartaoUsuario').click(function () { window.location = "/CalculaSt" });

    $('#LabelTituloHeader').text(`${document.title}`);

});

//if(sessionStorage.getItem('chave')!='chaveDeAcessoLiberado'){abrirWindow=location.href="../login.html";}
//$('.header').append(`<div class="cartaoUsuario"><escritaCabecalho>${document.title}</escritaCabecalho><img class="imagemCartaoUsuario" src="../Login/img/${sessionStorage.getItem('usuario')}.png" height="40px" width="40"/><nomeUsuario>${sessionStorage.getItem('usuario')}</nomeUsuario></div>`)
//$('.header').append('<div>' +
//    '<select id="selectCor">' +
//    '<option value="">Padrão...</option>' +
//    '<option value="darkcyan">darkcyan</option>' +
//    '<option value="darkgoldenrod">darkgoldenrod</option>' +
//    '<option value="darkturquoise">darkturquoise</option>' +
//    '<option value="deepskyblue">deepskyblue</option>' +
//    '<option value="dodgerblue">dodgerblue</option>' +
//    '<option value="forestgreen">forestgreen</option>' +
//    '<option value="hotpink">hotpink</option>' +
//    '<option value="lightcoral">lightcoral</option>' +
//    '<option value="lightgreen">lightgreen</option>' +
//    '<option value="steelblue">steelblue</option>' +
//    '</select></div>') 
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    $('.divTableLancamentos').fadeIn(500);
    openParams();
});






//Clique na Célula
var currRow = '';
var idPedido, estadoOrigem, estadoDestino, destinoMaterial, tipoCalculo, clienteContribuinte, simplesNacional = '';


$('body').on('click', '#tablePedidos tr', function () {

    currRow = $(this).attr('linha');
    idPedido = $(`[id='${currRow}']`).text();
    estadoOrigem = $(`[estadoOrigem="${currRow}"]`).text();
    estadoDestino = $(`[estadoDestino="${currRow}"]`).text();
    destinoMaterial = $(`[destinoMaterial="${currRow}"]`).text();
    tipoCalculo = $(`[tipoCalculo="${currRow}"]`).text();
    clienteContribuinte = $(`[clienteContribuinte="${currRow}"]`).text();
    simplesNacional = $(`[simplesNacional="${currRow}"]`).text();

    for (i = 0; i < $('table tbody tr').length; i++) {
        $(`table tbody tr:eq(${i})`).removeClass('selected');
    }
    $(this).addClass('selected');

});

//clique botão Adicionar
$('body').on('click', '#buttonAdd', function () {
    $('.divBotoes').fadeOut(500);
    $('.divTableRelacaoPedidos').fadeOut(500);
    $('.divTableLancamentos').fadeIn(500);
    openParams();
});

$('body').on('click', '#buttonCancel', function () {

    window.location.reload();

});
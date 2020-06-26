var itensPreCarregados = "";
var _visualizando = false;
var _editando = false;

$('body').on('click', '#buttonVisualizar', function () {
    if (currRow == "") { M.toast({ html: 'Selecione algum pedido!' }); }
    else {
        viewEdit();
        _visualizando = true;
        $('#buttonSave').attr('disabled', true);
    }
});

$('body').on('click', '#buttonEdit', function () {
    _editando = true;
    permissionEdit("Edição");
 });

function viewEdit() {

    //if (currRow == "") { M.toast({ html: 'Selecione algum pedido!' }); }
    //else {
    loadItensDb(idPedido);
    parametros.estadoOrigem = estadoOrigem;
    parametros.estadoDestino = estadoDestino;
    parametros.destinoMaterial = destinoMaterial;
    parametros.tipoCalculo = tipoCalculo;
    parametros.clienteContribuinte = clienteContribuinte;
    parametros.simplesNacional = simplesNacional;
    $('.divBotoes').fadeOut(500);
    $('.divTableRelacaoPedidos').fadeOut(500);
    $('.divTableLancamentos').fadeIn(500);
    preencherCabecalhoParametros();
   
}

function loadItensDb(IdPedido) {
    //var teste = JSON.stringify(itensAdicionados);
    $.ajax({
        type: "POST",
        url: "2.aspx/loadItensDb",
        data: "{IdPedido: '" + IdPedido + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg.d == "Erro na função loadItensDb - Code Behind") {
                //registerInHtml($('.inputAsn').val(), $('.inputDanfe').val(), $('.inputDate').val())
                console.log(msg.d)
            } else {
                itensPreCarregados = JSON.parse(msg.d);
                M.toast({ html: 'Pedido Carregado Sucesso' });
                montar();
                //console.log(msg.d)
                //$('.numeroPedidoSalvo').text(msg.d);
            }
        }
    });
}
function montar() {

    for (var i = 0; i < itensPreCarregados.length; i++) {
        $(`.cellCodigo:eq(${i})`).text(itensPreCarregados[i].codigo);
        $(`.cellQuantidade:eq(${i})`).text(itensPreCarregados[i].quantidade);
        $(`.cellPreco:eq(${i})`).text(itensPreCarregados[i].preco);
        
        if (_visualizando) {
            $(`.cellCodigo:eq(${i})`).attr('locked', true);
            $(`.cellDescricao:eq(${i})`).attr('locked', true);
            $(`.cellQuantidade:eq(${i})`).attr('locked', true);
            $(`.cellPreco:eq(${i})`).attr('locked', true)
        }
        atualizadorLinha(i, itensPreCarregados[i].codigo, itensPreCarregados[i].quantidade, itensPreCarregados[i].preco);
        atualizadorLinhaVisivel(i);
        if (itensPreCarregados[i].active == 'False') {
            $(`.cellPreco:eq(${i})`).closest('tr').addClass('selected');
            try { itensAdicionados[i].ativo = false; } catch{ }
        }
        valoresHeader[0] = new contructorHeader(itensAdicionados);
        verificarSePodeIncluirLinha();
    }

    //Pros itens deletados:
    //currCell.closest('tr').addClass('selected');
    //try { itensAdicionados[currCell.attr('linha')].ativo = false; } catch{ }
    //$(`[linha=${currCell.attr('linha')}] [locked="false"]`).attr('locked', true);
    //valoresHeader[0] = new contructorHeader(itensAdicionados);



    verificarSePodeIncluirLinha();
    $('[cellcodigo="0"]').focus();
    currCell = $('[cellcodigo="0"]');
   
}

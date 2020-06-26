var oQueFazer = ""

$('#buttonSave').on('click', function () {
    if (_visualizando) {
    } else if (_editando) {
        deleteItensInDb(idPedido, itensAdicionados)
    } else { confirmSave(); }
});

function confirmSave() {
    $('main').append(`
        <div id="modal1" class="modal">
            <div class="modal-content" style="display: flex;align-items: center;justify-content: center;flex-direction: column;">
                <h4>Atenção</h4><p>Deseja realmente salvar essa simulação de substituição tributária?</p>
                <div class="row">
                    <div class="input-field col s6 divCampoObservacoes">
                        <textarea id="obsPedido" class="materialize-textarea" data-length="50"></textarea>
                        <label for="obsPedido">Observação</label>
                    </div>
                </div>
                <div class="divCodigoPedido" style="display:none">
                <h5>Código do seu pedido é: <span id="numeroPedidoSalvo"></span></h5>
                </div>
            </div>
            <div class="modal-footer">
                <a class="waves-effect waves-light btn tooltipped" data-position="bottom" data-tooltip="Confirmar" onclick="saveInDb()" id="buttonConfirmSave"><i class="fas fa-check-square"></i></a>
                <a class="waves-effect waves-light btn modal-close #d50000 red accent-4 tooltipped" data-position="bottom" onclick="close(); setTimeout(function(){$('#modal1').remove();},500);" data-tooltip="Cancelar"><i class="fas fa-window-close"></i></a>
            </div>
        </div>`
    );
   // $('.tooltipped').tooltip();
    var elem = document.getElementById('modal1');
    var instance = M.Modal.init(elem, {
        dismissible: false,
        onOpenEnd: function () {
            //alert('abertto')
        }
    });
    instance.open();
    $('textarea#obsPedido').characterCounter();
    
}

function saveInDb() {
    if ($('#obsPedido').val().length > 50) {
        M.toast({ html: 'Campo Obs acima</ br> do limite!' })
    } else { 

    $('.processing').fadeIn(500);
    var a = parametros.estadoOrigem;
    var b = parametros.estadoDestino;
    var c = parametros.destinoMaterial;
    var d = parametros.tipoCalculo;
    var e = parametros.clienteContribuinte;
    var f = parametros.simplesNacional;


    $.ajax({
        type: "POST",
        url: "2.aspx/saveInDb",
        data: "{estadoOrigem: '" + a + "', estadoDestino: '" + b + "', destinoMaterial: '" + c + "', tipoCalculo: '" + d + "', clienteContribuinte: '" + e + "', simplesNacional: '" + f + "', obs: '" + $('#obsPedido').val() + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg.d == "Deu erro função saveInDb - Code Behind") {
                //registerInHtml($('.inputAsn').val(), $('.inputDanfe').val(), $('.inputDate').val())
                console.log(msg.d)
            } else {
                M.toast({ html: 'Salvo Com Sucesso!' })
                $('.divCodigoPedido').fadeIn(500);
                $('#numeroPedidoSalvo').text(msg.d);
                saveItensInDb($('#numeroPedidoSalvo').text(), itensAdicionados);
            }
        }
    });
}
}

function saveItensInDb(IdPedido, itensAdicionados) {
    //var teste = JSON.stringify(itensAdicionados);
    for (i = 0; i < itensAdicionados.length; i++) {
        $.ajax({
            type: "POST",
            url: "2.aspx/saveItensInDb",
            data: "{IdPedido: '" + IdPedido + "', id: '" + itensAdicionados[i].id + "', codigo: '" + itensAdicionados[i].codigo + "', quantidade: '" + itensAdicionados[i].quantidade + "', preco: '" + itensAdicionados[i].preco + "', active: '" + itensAdicionados[i].ativo + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                if (msg.d == "Deu erro função saveItensInDb - Code Behind") {
                    //registerInHtml($('.inputAsn').val(), $('.inputDanfe').val(), $('.inputDate').val())
                    console.log(msg.d)
                } else {
                    M.toast({ html: 'Itens Salvo Com Sucesso!' })
                    //$('.numeroPedidoSalvo').text(msg.d);
                }
            }
        });
    }
    setTimeout(function () { M.toast({ html: '5 Segundos depois do ultimo save!' })}, 5000)
}

function deleteItensInDb(IdPedido, itensAdicionados) {
    //var teste = JSON.stringify(itensAdicionados);
    console.log(IdPedido)
    console.log(itensAdicionados)
        $.ajax({
            type: "POST",
            url: "2.aspx/deleteItensInDb",
            data: "{IdPedido: '" + IdPedido + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                if (msg.d == "Deu erro função deleteItensInDb - Code Behind") {
                    //registerInHtml($('.inputAsn').val(), $('.inputDanfe').val(), $('.inputDate').val())
                    console.log(msg.d)
                } else {
                    saveItensInDb(IdPedido, itensAdicionados);
                    //$('.numeroPedidoSalvo').text(msg.d);
                }
            }
        });
}

function close() {

    window.location.reload();

}


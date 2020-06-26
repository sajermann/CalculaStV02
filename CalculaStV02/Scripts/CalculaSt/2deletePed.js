$('body').on('click', '#buttonDelete', function () {
    permissionEdit("Exclusão");
});

//function deletePedConfirmation() {
//    deletePed()
//}


function deletePed() {
    $.ajax({
        type: "POST",
        url: "2.aspx/DeletePed",
        data: "{id: '" + idPedido + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg.d == "Erro na função deletePed - Code Behind") {
                return console.log(msg.d);
            } else {
                function temp() {
                    M.toast({ html: 'Pedido Excluído' });
                    setInterval(function () { window.location.reload(); }, 1000);
                }
                return temp();
            }
        }
    });
}

function deletePedConfirmation() {
    $('body').append(`
<div id="modalDeletePed" class="modal modalDeletePed">
    <div class="modal-content" style="display: flex;align-items: center;justify-content: center;flex-direction: column;">
        <h3>Atenção</h3>
        <h5>Deseja realmente excluir essa simulação de substituição tributária? Essa ação não pode ser desfeita.</h5>
    </div>
    <div class="modal-footer">
        <a class="waves-effect waves-light btn modal-close" onclick="deletePed()" id="buttonConfirmSave"><i class="material-icons left">check_box</i>confirmar</a>
        <a class="waves-effect waves-light btn modal-close #d50000 red accent-4" onclick="setTimeout($('#modalDeletePed').remove(), 500);"><i class="material-icons left">cancel</i>cancelar</a>
        
        
    </div>
</div>`
    );
    var elem = document.getElementById('modalDeletePed');
    var instance = M.Modal.init(elem, {
        dismissible: false,
        onOpenEnd: function () {
            //alert('abertto')
        }
    });
    instance.open();
    //alert('Confirma Cancelamento?')
}
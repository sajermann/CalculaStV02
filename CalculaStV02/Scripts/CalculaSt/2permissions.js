
async function permissionEdit(permissaoSolicitada) {
   
    if (currRow == "") { M.toast({ html: 'Selecione algum pedido!' }); }
    else {
        $.ajax({
            type: "POST",
            url: "2.aspx/permissionEditPed",
            data: "{id: '" + idPedido + "', permissaoSolicitada: '" + permissaoSolicitada + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                if (msg.d == "Erro na função permissionEditPed - Code Behind") {
                    //registerInHtml($('.inputAsn').val(), $('.inputDanfe').val(), $('.inputDate').val())
                   // console.log(msg.d)
                    function temp() {
                        _editando = false;
                        M.toast({ html: 'Você não tem Permissão!' });
                    }
                    return temp();
                } else {
                    //return viewEdit();
                    console.log(msg.d);
                    if (msg.d == "Edição Permitida") {
                        return viewEdit();
                    } else if (msg.d == "Exclusão Permitida") {
                        return deletePedConfirmation();
                    }
                }
            }
        });
    }
}
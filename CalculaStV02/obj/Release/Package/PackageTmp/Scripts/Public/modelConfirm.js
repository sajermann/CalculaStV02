//######################################################################################################
//########################################## | MODEL CONFIRM | #########################################
//######################################################################################################
//<summary>
//Função com dois parâmetros
//1º Params: Titulo
//2º Params: Content
//3º Params: Action
//</summary>
function modelConfirm(msg, action) {
    $.confirm({
        title: 'Atenção',
        icon: 'fas fa-exclamation-triangle',
        theme: 'dark',
        content: msg,
        buttons: {
            formSubmit: {
                text: 'Ok',
                btnClass: 'btn-green',
                keys: ['enter', 'esc'],
                action: function () { action },
            }
        }
    });
}

function modelConfirmOptions(msg, actionFunction) {
    $.confirm({
        title: 'Atenção',
        icon: 'fas fa-exclamation-triangle',
        theme: 'dark',
        content: msg,
        buttons: {
            //formSubmit: {
            //    text: 'Ok',
            //    btnClass: 'btn-green',
            //    keys: ['enter', 'esc'],
            //    action: function () { action },
            //}
             Continuar: {
                btnClass: 'btn-green',
                keys: ['enter'],
                action: function () { actionFunction.call(); },
             },
            Cancelar: {
                btnClass: 'btn-danger',
                keys: ['esc'],
                action: function () { },
            },
        }
    });
}
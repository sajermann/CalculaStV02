var pedidosCarregados = "";

$(document).ready(function () {
   // $('body').fadeIn(1000);
   // gerarTabela()
});

function gerarTabela() {
    for (var i = 0; i < relacaoPedidos.length; i++) {

        if (relacaoPedidos[i].ativo == "True") {
            $('.tableRelacaoPedidos tbody').append(`<tr linha="${i}"><td id="${i}">${relacaoPedidos[i].id}</td>
<td usuario="${i}">${relacaoPedidos[i].usuario}</td><td estadoOrigem="${i}">${relacaoPedidos[i].estadoOrigem}</td>
<td estadoDestino="${i}">${relacaoPedidos[i].estadoDestino}</td><td destinoMaterial="${i}">${relacaoPedidos[i].destinoMaterial}</td>
<td tipoCalculo="${i}">${relacaoPedidos[i].tipoCalculo}</td><td clienteContribuinte="${i}">${relacaoPedidos[i].clienteContribuinte}</td>
<td simplesNacional="${i}">${relacaoPedidos[i].simplesNacional}</td><td obs="${i}">${relacaoPedidos[i].obs}</td></tr>`);
        } else { }

    }

    $(".tableRelacaoPedidos").DataTable({
        //data: relacaoPedidos,
        //"columns": [
        //    { "data": "id", "class": "" },
        //    { "data": "usuario", "class": "" },
        //    { "data": "estadoOrigem", "class": "" },
        //    { "data": "estadoDestino", "class": "" },
        //    { "data": "destinoMaterial", "class": "" },
        //    { "data": "tipoCalculo", "class": "" },
        //    { "data": "clienteContribuinte", "class": "" },
        //    { "data": "simplesNacional", "class": "" },
        //    { "data": "obs", "class": "" }
        //],
        "order": [[0, "asc"]],
        "iDisplayLength": 5,
        "aLengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "Todos"]]
    });

}
var id = 1;
var linha = 0;
var index = 14;

function verificarSePodeIncluirLinha(){
    if($(`[cellDescricao="${linha}"]`).html() == '' && linha == 0){
        alert('Preencha pelo menos o código e a descrição dessa linha')
    }
    else if($(`[cellDescricao="${linha}"]`).html() == '' && linha > 0){
        c = currCell.closest('tr').prev().find('td:eq(' + 
          currCell.index() + ')');
          if (c.length > 0) {
        currCell = c;
        currCell.focus();
    }
        
        removeLine();
        
    }
    else{
        addLine();
    }
}
function addLine(){
    linha += 1;
$('.lancamentosItens').append(`<tr linha="${linha}">
    <td tabindex="${index + 1}" class=" cellId" linha="${linha}" cellId="${linha}" locked="true" typeCell="id" >${id}</td>
    <td tabindex="${index + 2}" class=" cellCodigo" linha="${linha}" cellCodigo="${linha}" locked="false" typeCell="codigo" ></td>
    <td tabindex="${index + 3}" class=" cellDescricao" linha="${linha}" cellDescricao="${linha}" locked="false" typeCell="descricao" ></td>
    <td tabindex="${index + 4}" class=" cellNcm" linha="${linha}" cellNcm="${linha}" locked="true" typeCell="ncm" ></td>
    <td tabindex="${index + 5}" class=" cellQuantidade" linha="${linha}" cellQuantidade="${linha}" locked="false" typeCell="quantidade" ></td>
    <td tabindex="${index + 6}" class=" cellPreco" linha="${linha}" cellPreco="${linha}" locked="false" typeCell="preco" ></td>
    <td tabindex="${index + 7}" class=" cellTotal" linha="${linha}" cellTotal="${linha}" locked="true" typeCell="total" ></td>
    <td tabindex="${index + 8}" class=" cellIpi" linha="${linha}" cellIpi="${linha}" locked="true" typeCell="ipi" ></td>
    <td tabindex="${index + 9}" class=" cellSt" linha="${linha}" cellSt="${linha}" locked="true" typeCell="st" ></td>
    <td tabindex="${index + 10}" class=" cellValorTotal" linha="${linha}" cellValorTotal="${linha}" locked="true" typeCell="valorTotal" ></td>
    <td tabindex="${index + 11}" class=" cellAcrescimo" linha="${linha}" cellAcrescimo="${linha}" locked="true" typeCell="acrescimo" ></td>
    <td tabindex="${index + 13}" class=" cellMva" linha="${linha}" cellMva="${linha}" locked="true" typeCell="mva" ></td>
    <td tabindex="${index + 14}" class=" cellIcms" linha="${linha}" cellIcms="${linha}" locked="true" typeCell="icms" ></td>
    <td tabindex="${index + 15}" class=" cellIntra" linha="${linha}" cellIntra="${linha}" locked="true" typeCell="intra" ></td>
  </tr>`);
  id += 1;
  
  index += 16;
}

function removeLine(){
    itensAdicionados.splice(linha, 1);
    $(`[linha = "${linha}"]`).remove();
    linha -= 1;
    id -= 1;
}
//Deu Certo
// $('table').on('click', 'td', function(){
// var el = this;
   // $(this).append('<input type="number" value="5" />');

// });


//Pegado posição elemento
// $('table').on('click', 'td', function(){
// var el = this;
    // var coordenadas = el.getBoundingClientRect();
    // console.log('posição x', coordenadas.left, 'posição y', coordenadas.top)

// });

// var myTop = 361;
// var myRight= 235.5;
// $('table').on('click', 'td', function(e) {
// $("<div class='pin' style='position:absolute; top: ' + myTop +'px; right: ' + myRight + 'px;/>").insertAfter(this); 
 // });
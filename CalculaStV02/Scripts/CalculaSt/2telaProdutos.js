$('body').on('click', '.pesquisarProd', function(){produtos()});
//$('body').on('click', '#inputEntradaDados', function(){ produtos()});
// $('.pesquisarAlteracao').on('click', function(){quemMeAbriu = 'pesquisarAlteracao';console.log(quemMeAbriu); produtos()});
function produtos(){
$.alert({
	// columnClass: 'col-md-4 col-md-offs	et-8 col-xs-4 col-xs-offset-8',
	columnClass: 'col-md-6 col-md-offset-3',
		containerFluid: true,
	//theme: 'dark',
	title: '<strong>Produtos Cadastrados</strong>',
	icon: 'fas fa-exclamation-triangle',
	onOpenBefore: function () {},
	onClose: function () {quemMeAbriu = ''},
	onAction: function () {},
	content: 
'<div class="telaGeral">'+
'<table id="example" class="display compact tableProdutos" style="width:100%">'+
       ' <thead>'+
      '      <tr>'+
     '           <th></th>'+
     '           <th>Código</th>'+
    '            <th>Descrição</th>'+
   '             <th>N.C.M</th>'+
  '          </tr>'+
 '       </thead>'+
'		<tbody>'+
'		</tbody>'+
/*'		<tfoot>'+
'            <tr>'+
'               	<th>codigo</th>'+
'                <th>descricao</th>'+
'                <th>ncm</th>'+
'            </tr>'+
'        </tfoot>'+*/
'    </table>'+
'</div>'+
'</div>'+
'<script>'+
'$(document).ready(function() {'+
// $.getScript("js/createInput.js", function() {
  // bruno();
// });
'preencherProdutos();'+
'});'+


'</script>'+
'<style>'+
'.telaGeral{display:flex;flex-direction:column;justify-content:center;align-items:center;}'+
'.linha{display:flex;flex-direction:row;justify-content:center;align-items:center}'+
'.descSelecionado{display:flex;flex-direction: row;justify-content: center;align-items: center;width: 390px;}'+
'.coluna{width: 195px;}'+
'.cabecalho{background:gray;}'+
'.todosIncomum{border: 1px solid white; text-align:center}'+
'tr:hover{cursor: pointer;}'+
'</style>',

buttons: {
    Cancelar: {
	btnClass: 'btn-red',
	keys: ['esc'],
	action: function () {},
	},
	Confirmar: {
	btnClass: 'btn-success',
	keys: ['enter'],
	action: function () {
		$('#inputEntradaDados').val(codigoSelecionado);$('#inputEntradaDados').focus();
		// if(quemMeAbriu == 'pesquisarProd'){$('#codigo').val(codigoSelecionado);calc();$('#quantidade').focus();}
		// else if(quemMeAbriu == 'pesquisarAlteracao'){$('.codigoAlteracao').val(codigoSelecionado);calc();try{alteracao();$('.quantidadeAlteracao').select();}catch{}}
		// else{}
		
},

},
	//Teste: {btnClass: 'btn-red', action: function(Ok){console.log('bruno')},}


}
});

}


function preencherProdutos(){

for(i = 1; i < bancoDadosProdutos.length; i++){
	$(".tableProdutos tbody").append("<tr><td><input type='checkbox' class='browser-default'  style='position: inherit; opacity: 1'></td><td>" + bancoDadosProdutos[i].codigo + "</td>"+"<td>" + bancoDadosProdutos[i].descricao + "</td>"+
"<td>" + bancoDadosProdutos[i].ncm + "</td></tr>")}
// 'var table = $("#example").DataTable();
var table = $("#example").DataTable({
	"ordering": false,
	"iDisplayLength": 5,
	"aLengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "Todos"]]
});



$("#example tbody").on( "click", "tr", function () {
       if ( $(this).hasClass("selected") ) {
            $(this).removeClass("selected");
            $(this).find("input").attr("checked", false);
        }
        else {
			table.$("tr.selected").find("input").attr("checked", false);
            table.$("tr.selected").removeClass("selected");
            $(this).addClass("selected");
			$(this).find("input").attr("checked", true);
        }
});

$("#example tbody").on( "click", "tr", function () {
console.log($(this).find("td:eq(1)").text());
codigoSelecionado = $(this).find("td:eq(1)").text()
});




$('[type="search"]').focus();
}
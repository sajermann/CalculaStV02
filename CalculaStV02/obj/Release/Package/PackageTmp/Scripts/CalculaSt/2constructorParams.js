function contructorParams(estadoOrigem, estadoDestino, destinoMaterial, tipoCalculo, clienteContribuinte, simplesNacional) {
  var obj = {};
  obj.estadoOrigem = estadoOrigem;
  obj.estadoDestino = estadoDestino;
  obj.destinoMaterial = destinoMaterial;
  obj.tipoCalculo = tipoCalculo;
  obj.clienteContribuinte = clienteContribuinte;
  obj.simplesNacional = simplesNacional;
    obj.greeting = function() {
    alert('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}

//var parametros = new contructorParams('SP', 'RS', 'Consumo', 'Fora', 'Sim', 'Nao')
var parametros = new contructorParams('', '', '', '', '', '')


function recalcAllItens(){
  for(var i = 0; i < itensAdicionados.length; i++){
    itensAdicionados[i] = new constructorProdutos(i, $(`[cellCodigo="${i}"]`).text(), $(`[cellQuantidade="${i}"]`).text(), $(`[cellPreco="${i}"]`).text())
    atualizadorLinhaVisivel(i);
  }
  valoresHeader[0] = new contructorHeader(itensAdicionados);
}
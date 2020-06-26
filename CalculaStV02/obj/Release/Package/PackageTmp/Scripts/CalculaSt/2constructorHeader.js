var valoresHeader = [];
$(document).ready(function(){
    valoresHeader.push(new contructorHeader(itensAdicionados))
});
function contructorHeader(itensAdicionados) {
  this.baseCalculo = calcularBaseCalculo(itensAdicionados);
  this.icms = calcularIcms(itensAdicionados);
  this.baseIcmsSt = calcularBaseIcmsSt(itensAdicionados);
  this.st = calcularSt(itensAdicionados);
  this.total = calcularTotal(itensAdicionados);
  this.fecp = calcularFecp(itensAdicionados);
  this.pis = calcularPis(itensAdicionados);
  this.cofins = calcularCofins(itensAdicionados);
  this.ipi = calcularIpi(itensAdicionados);
  this.valorTotal = calcularValorTotal(itensAdicionados);
  this.observacao = calcularObservacao(this.fecp);
  atualizadorLinhaVisivelHeader(this.baseCalculo, this.icms, this.baseIcmsSt, this.st, this.total, this.fecp, this.pis, this.cofins, this.ipi, this.valorTotal, this.observacao)
  return this;
}

function calcularBaseCalculo(itensAdicionados){
  var temp = 0;
  for(i = 0; i < itensAdicionados.length; i++){
    if(itensAdicionados[i].ativo){
      temp += itensAdicionados[i].baseCalculo;
    }
  }
  return temp;
}

function calcularIcms(itensAdicionados){
  var temp = 0;
  for(i = 0; i < itensAdicionados.length; i++){
    if(itensAdicionados[i].ativo){
      temp += itensAdicionados[i].icms;
    }
  }
  return temp;
}

function calcularBaseIcmsSt(itensAdicionados){
  var temp = 0;
  for(i = 0; i < itensAdicionados.length; i++){
    if(itensAdicionados[i].ativo){  
      temp += itensAdicionados[i].baseIcmsSt;
    }
  }
  return temp;
}

function calcularSt(itensAdicionados){
  var temp = 0;
  for(i = 0; i < itensAdicionados.length; i++){
    if(itensAdicionados[i].ativo){
      temp += itensAdicionados[i].st;
    }
  }
  return temp;
}

function calcularTotal(itensAdicionados){
  var temp = 0;
  for(i = 0; i < itensAdicionados.length; i++){
    if(itensAdicionados[i].ativo){
      temp += itensAdicionados[i].total;
    }
  }
  return temp;
}

function calcularFecp(itensAdicionados){
  var temp = 0;
  for(i = 0; i < itensAdicionados.length; i++){
    if(itensAdicionados[i].ativo){
      temp += itensAdicionados[i].fecp;
    }
  }
  return temp;
}

function calcularPis(itensAdicionados){
  var temp = 0;
  for(i = 0; i < itensAdicionados.length; i++){
    if(itensAdicionados[i].ativo){
      temp += itensAdicionados[i].pis;
    }
  }
  return temp;
}

function calcularCofins(itensAdicionados){
  var temp = 0;
  for(i = 0; i < itensAdicionados.length; i++){
    if(itensAdicionados[i].ativo){
      temp += itensAdicionados[i].cofins;
    }
  }
  return temp;
}

function calcularIpi(itensAdicionados){
  var temp = 0;
  for(i = 0; i < itensAdicionados.length; i++){
    if(itensAdicionados[i].ativo){
      temp += itensAdicionados[i].ipi;
    }
  }
  return temp;
}

function calcularValorTotal(itensAdicionados){
  var temp = 0;
  for(i = 0; i < itensAdicionados.length; i++){
    if(itensAdicionados[i].ativo){
      temp += itensAdicionados[i].valorTotal;
    }
  }
  return temp;
}

function calcularObservacao(fecp){
  var difalTemp = 0;
	for(i = 0; i<itensAdicionados.length; i++){
      if(itensAdicionados[i].ativo){
        difalTemp = parseFloat(itensAdicionados[i].difal) + parseFloat(difalTemp)
      }
	}
	difalTemp = visualFormat(difalTemp);
    var obsLocalizada = bancoDadosObservacoes.filter(function(obs){return obs.estado == parametros.estadoDestino && obs.destino == parametros.destinoMaterial && obs.tipo == parametros.tipoCalculo && obs.simplesNacional == parametros.simplesNacional && obs.contribuinte == parametros.clienteContribuinte;})
	var obsMontada = ""
	try{
		if (obsLocalizada[0].protocolo != ""){obsMontada = `Protocolo do estado: ${obsLocalizada[0].protocolo}`}
		if (obsLocalizada[0].obs != ""){obsMontada = `${obsMontada} Observação: ${obsLocalizada[0].obs}`}
		if (parametros.estadoDestino == 'RJ' && (!isNaN(fecp) || fecp!= 0.00)){obsMontada = `${obsMontada} R$${visualFormat(null, fecp)}`}
		if (parametros.clienteContribuinte == 'Nao'){obsMontada = `${obsMontada}. Difal: R$ ${difalTemp}`}
		if (obsLocalizada[0].tipoClienteSiga != ""){obsMontada = `${obsMontada}. Tipo Cliente: ${obsLocalizada[0].tipoClienteSiga}`}
		if (obsLocalizada[0].grupoClienteSiga != ""){obsMontada = `${obsMontada}. Grupo Tributário: ${obsLocalizada[0].grupoClienteSiga}`}
		if (obsLocalizada[0].formula != ""){obsMontada = `${obsMontada}. Fórmula: ${obsLocalizada[0].formula}`}
		if (obsLocalizada[0].tesSIpi != ""){obsMontada = `${obsMontada},. Tes Sem Ipi: ${obsLocalizada[0].tesSIpi}`}
		if (obsLocalizada[0].tesCIpi != ""){obsMontada = `${obsMontada}. Tes Com Ipi: ${obsLocalizada[0].tesCIpi}`}
		if (obsLocalizada[0].cfop != ""){obsMontada = `${obsMontada}. CFOP: ${obsLocalizada[0].cfop}`}
	}catch{};
	return obsMontada
}

function atualizadorLinhaVisivelHeader(baseCalculo, icms, baseIcmsSt, st, total, fecp, pis, cofins, ipi, valorTotal, observacao){
  $('.cellBaseCalculoHeader').text(visualFormat(null, baseCalculo));
  $('.cellIcmsHeader').text(visualFormat(null, icms));
  $('.cellBaseIcmsStHeader').text(visualFormat(null, baseIcmsSt));
  $('.cellStHeader').text(visualFormat(null, st));
  $('.cellTotalHeader').text(visualFormat(null, total));
  $('.cellFecpHeader').text(visualFormat(null, fecp));
  $('.cellPisHeader').text(visualFormat(null, pis));
  $('.cellCofinsHeader').text(visualFormat(null, cofins));
  $('.cellIpiHeader').text(visualFormat(null, ipi));
  $('.cellValorTotalHeader').text(visualFormat(null, valorTotal));
  $('.cellObservacaoHeader').text(observacao);

}
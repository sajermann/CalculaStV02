var itensAdicionados = []
$(document).ready(function(){
    itensAdicionados.push(new constructorProdutos("0", ""))
});

function constructorProdutos(id, codigo, quantidade, preco) {
	
	this.id = id;
	this.codigo = codigo;
	this.descricao = descricaoProduto(codigo);
	this.descricaoFantasia = descricaoProduto(codigo);
	this.ncm = ncmProduto(codigo);
	this.quantidade = parseFloat(quantidade);
	this.preco = parseFloat(preco);
	this.total = totalProduto(this.ncm, this.quantidade, this.preco);
	this.ipi = ipiProduto(this.ncm, this.total);
	this.baseCalculo = baseIcmsProduto(this.total, this.ipi);
	this.icms = icmsProduto(this.baseCalculo);
	this.baseIcmsSt = baseIcmsStProduto(this.total, this.ipi, this.ncm, this.icms);
	this.st = stProduto(this.icms, this.baseIcmsSt, this.baseCalculo, this.ipi, this.total);
	this.difal = difalProduto(this.total, this.ipi);
	this.fecp = fecpProduto(this.total, this.ipi, this.baseIcmsSt);
	this.valorTotal = valorTotalProduto(this.total, this.ipi, this.st, this.fecp);
	this.acrescimo = this.st / this.total * 100;
	this.mva = mvaProduto(this.ncm);
	this.icmsPorcentagem = icmsPorcentagemProduto();
	this.intraPorcentagem = intraPorcentagemProduto();
	this.pis = this.total * 0.0165;
	this.cofins = this.total  * 0.0760;
	this.ativo = true;

	valoresHeader[0] = new contructorHeader(itensAdicionados);
	return this;
}

function descricaoProduto(codigo){
var produtoLocalizado = bancoDadosProdutos.filter(function(produto){return produto.codigo == codigo;})
if(produtoLocalizado.length == 0){return ''}else{return produtoLocalizado[0].descricao}
}

function descricaoFantasia(linha, descricaoFantasia){
    try{
		itensAdicionados[linha].descricaoFantasia = descricaoFantasia;
	}catch{};
}

function ncmProduto(codigo){
	var ncmLocalizado = bancoDadosProdutos.filter(function(produto){return produto.codigo == codigo;})
	if(ncmLocalizado.length == 0){return ''}else{return ncmLocalizado[0].ncm}
}

function totalProduto(ncm, quantidade, preco){
	return ncm == ""  ? 0 : quantidade * preco;
}

function ipiProduto(ncm, total){
	if(ncm == undefined || total == undefined){
		return 0;
	}else{
		if (parametros.estadoDestino == 'AM'){return 0;}else{
		  try{var ipiLocalizado = bancoDadosIpi.filter(function(ipi){return ipi.ncm == ncm;})
			  if(ipiLocalizado[0].porcentagemIpi < 10){
				ipiLocalizado = "0.0" + ipiLocalizado[0].porcentagemIpi
			  }else{ipiLocalizado = "0." + ipiLocalizado[0].porcentagemIpi}
		  return total * ipiLocalizado}catch{/*console.log('Erro na Formula ipiProduto')*/};
		}
	}
}

function baseIcmsProduto(total, ipi){
    if(parametros.destinoMaterial == 'Revenda' || parametros.estadoDestino == 'AM'){return total;}
	else if(parametros.destinoMaterial == 'Consumo'){
		if(total == undefined || ipi == undefined){
			return 0;
		}else{return total + ipi;}
	}
}

function icmsProduto(baseCalculo){
  var icmsLocalizado = bancoDadosIcms.filter(function(icms){return icms.estado == parametros.estadoDestino;})
  try{
    if(icmsLocalizado.length == 0){return 0}else{
      if(icmsLocalizado[0].porcentagemIcms < 10){
          icmsLocalizado = "0.0" + icmsLocalizado[0].porcentagemIcms
      }else{icmsLocalizado = "0." + icmsLocalizado[0].porcentagemIcms}
    return baseCalculo * icmsLocalizado}
  }catch{};
}

function baseIcmsStProduto(total, ipi, ncm, icms){
	try{
		if(total == undefined || ipi == undefined || ncm == undefined || icms == undefined){
			return 0;
		}else{
			if(parametros.destinoMaterial == 'Revenda'){
				var mvaLocalizado = bancoDadosMva.filter(function(mva){return mva.ncm == ncm;})
				mvaLocalizado = 100 * eval(`mvaLocalizado[0].${parametros.estadoDestino}IvaSimplesNacional${parametros.simplesNacional}`)
				mvaLocalizado = "1." + mvaLocalizado
				// return (total + ipi) * eval(`mvaLocalizado[0].${estadoSelecionado}IvaSimplesNacional${simplesNacional}`)
				return (total + ipi) * mvaLocalizado
			}
			else if(parametros.destinoMaterial == 'Consumo' && parametros.tipoCalculo == 'Fora' && parametros.clienteContribuinte == 'Sim'){
				return total + ipi
			}
			else if(parametros.destinoMaterial == 'Consumo' && (parametros.tipoCalculo == 'Dentro' || parametros.tipoCalculo == 'BS Dupla') && parametros.clienteContribuinte == 'Sim'){
				var icmsIntraLocalizado = bancoDadosIcms.filter(function(el){return el.estado == parametros.estadoDestino;})
				if(icmsIntraLocalizado[0].porcentagemIntra < 10){
					icmsIntraLocalizado = "0.0" + icmsIntraLocalizado[0].porcentagemIntra
				}else{icmsIntraLocalizado = "0." + icmsIntraLocalizado[0].porcentagemIntra}
				icmsIntraLocalizado = (100 - (parseFloat(icmsIntraLocalizado) * 100)) / 100
				//console.log(icmsIntraLocalizado)
				return (total + ipi - icms) / icmsIntraLocalizado
			}
		}
	}catch{};
}

function stProduto(icms, baseIcmsSt, baseCalculo, ipi, total){
 	try{
		if(icms == undefined || baseIcmsSt == undefined || baseCalculo == undefined || ipi == undefined || total == undefined){
			return 0;
		}else{
			var aliquotasLocalizado = bancoDadosIcms.filter(function(el){return el.estado == parametros.estadoDestino;})
			var porcentagemIntraLocalizado = aliquotasLocalizado[0].porcentagemIntra
			var porcentagemIcmsLocalizado = aliquotasLocalizado[0].porcentagemIcms
				
			if(porcentagemIntraLocalizado < 10){
				porcentagemIntraLocalizado = "0.0" + porcentagemIntraLocalizado
			}else{porcentagemIntraLocalizado = "0." + porcentagemIntraLocalizado}
			
			if(porcentagemIcmsLocalizado < 10){
				porcentagemIcmsLocalizado = "0.0" + porcentagemIcmsLocalizado
			}else{porcentagemIcmsLocalizado = "0." + porcentagemIcmsLocalizado}
			
			if(parametros.destinoMaterial == 'Revenda' && parametros.simplesNacional == 'Nao'){
				return parseFloat(baseIcmsSt) * parseFloat(porcentagemIntraLocalizado) - parseFloat(icms);
			}
			
			if(parametros.destinoMaterial == 'Revenda' && parametros.simplesNacional == 'Sim' && parametros.estadoDestino == 'PR'){
				return parseFloat(baseIcmsSt) * parseFloat(porcentagemIntraLocalizado) - parseFloat(icms);
			}
			
			else if(parametros.destinoMaterial == 'Consumo' && parametros.tipoCalculo == 'Fora' && parametros.clienteContribuinte == 'Sim'){
				return difalProduto(total, ipi);
			}
			else if(parametros.destinoMaterial == 'Consumo' && parametros.tipoCalculo == 'Dentro' && parametros.clienteContribuinte == 'Sim'){
				return baseIcmsSt * parseFloat(porcentagemIntraLocalizado) - icms;
			}
			else if(parametros.destinoMaterial == 'Consumo' && parametros.tipoCalculo == 'BS Dupla' && parametros.clienteContribuinte == 'Sim'){
				return baseIcmsSt * (parseFloat(porcentagemIntraLocalizado) - parseFloat(porcentagemIcmsLocalizado))
			}
			else{return 0;}
		}			
	}catch{};		
}

function difalProduto(total, ipi){
	try{
		var aliquotasLocalizado = bancoDadosIcms.filter(function(el){return el.estado == parametros.estadoDestino;})
		var porcentagemIntraLocalizado = aliquotasLocalizado[0].porcentagemIntra
		var porcentagemIcmsLocalizado = aliquotasLocalizado[0].porcentagemIcms
			
		if(porcentagemIntraLocalizado < 10){
			porcentagemIntraLocalizado = "0.0" + porcentagemIntraLocalizado
		}else{porcentagemIntraLocalizado = "0." + porcentagemIntraLocalizado}
		
		if(porcentagemIcmsLocalizado < 10){
			porcentagemIcmsLocalizado = "0.0" + porcentagemIcmsLocalizado
		}else{porcentagemIcmsLocalizado = "0." + porcentagemIcmsLocalizado}
			
		var difal = (total + ipi) * (parseFloat(porcentagemIntraLocalizado) - parseFloat(porcentagemIcmsLocalizado))
		return difal;
	}catch{};
}

function fecpProduto(total, ipi, baseIcmsSt){
	if(total == undefined || ipi == undefined || baseIcmsSt == undefined){
		return 0;
	}else{
		var fecpLocalizado = bancoDadosIcms.filter(function(fecp){return fecp.estado == parametros.estadoDestino;})
		if(fecpLocalizado[0].fecp < 10){
			fecpLocalizado = "0.0" + fecpLocalizado[0].fecp;
		}else{fecpLocalizado = "0." + fecpLocalizado[0].fecp;}	
			
		if(parametros.destinoMaterial == 'Revenda'){
			return baseIcmsSt * fecpLocalizado;
		}
		
		else if(parametros.destinoMaterial == 'Consumo'){
			return (total + ipi) * fecpLocalizado;
		}
	}
}

function valorTotalProduto(total, ipi, st, fecp){
	if(total == undefined || ipi == undefined || st == undefined || fecp == undefined){
		return 0;
	}else{
		if(parametros.estadoDestino == 'RJ' && parametros.clienteContribuinte == 'Sim'){
			return total + ipi + st + fecp;
		}else{return total + ipi + st;}
	}		
}

function mvaProduto(ncm){
	try{	
		if (parametros.destinoMaterial == 'Revenda'){
		var mvaLocalizado = bancoDadosMva.filter(function(mva){return mva.ncm == ncm;})
		var temp = eval(`mvaLocalizado[0].${parametros.estadoDestino}IvaSimplesNacional${parametros.simplesNacional}`);
		return parseFloat(temp);
		}else {return 0}
	}catch{};
}

function icmsPorcentagemProduto(){
	try{
		var icmsLocalizado = bancoDadosIcms.filter(function(icms){return icms.estado == parametros.estadoDestino;})
		return parseFloat(icmsLocalizado[0].porcentagemIcms);
	}catch{};
}	

function intraPorcentagemProduto(){
	try{
		var icmsLocalizado = bancoDadosIcms.filter(function(icms){return icms.estado == parametros.estadoDestino;})
		return parseFloat(icmsLocalizado[0].porcentagemIntra);
	}catch{};
}


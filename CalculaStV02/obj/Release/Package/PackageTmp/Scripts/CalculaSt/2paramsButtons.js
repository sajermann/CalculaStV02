//######################################################################################################
//######################################### | PARAMS BUTTONS | #########################################
//######################################################################################################

function padronizacaoDosParametros(){
	$(".parametros:eq(0)").text(parametros.estadoDestino + 
	parametros.destinoMaterial + parametros.tipoCalculo + 
	parametros.clienteContribuinte + parametros.simplesNacional);
}

function verificaPadrao(){
var padrao = [
"ACConsumoNaoNao", "ALConsumoNaoNao", "APConsumoNaoNao", 
"APConsumoForaSimNao", "APRevendaSimNao", "AMConsumoNaoNao", 
"BAConsumoNaoNao", "CEConsumoNaoNao", "DFConsumoNaoNao", 
"DFConsumoForaSimNao", "DFRevendaSimNao", "ESConsumoNaoNao", 
"GOConsumoNaoNao", "MAConsumoNaoNao", "MTConsumoNaoNao", 
"MTConsumoForaSimNao", "MTRevendaSimNao", "MSConsumoNaoNao", 
"MGConsumoNaoNao", "MGConsumoDentroSimNao", "MGRevendaSimNao", 
"PAConsumoNaoNao", "PBConsumoNaoNao", "PRConsumoNaoNao", 
"PRConsumoDentroSimNao", "PRRevendaSimNao", "PRRevendaSimSim", 
"PEConsumoNaoNao", "PEConsumoBS DuplaSimNao", "PERevendaSimNao", 
"PIConsumoNaoNao", "RJConsumoNaoNao", "RJConsumoForaSimNao", 
"RJRevendaSimNao", "RNConsumoNaoNao", "RSConsumoNaoNao", 
"RSConsumoDentroSimNao", "RSRevendaSimNao", "ROConsumoNaoNao", 
"RRConsumoNaoNao", "SCConsumoNaoNao", "SPRevendaSimNao", 
"SEConsumoNaoNao", "TOConsumoNaoNao"];
if(padrao.indexOf($('.parametros:eq(0)').text()) == -1){
$('.status').text('Não Padrão');
}else{$('.status').text('Padrão');}
}

function ajeitaBotoesParametros(){
	if(parametros.destinoMaterial == "Consumo"){
//Se é consumo, precisa ter o tipo de cálculo ativo
$(".radioTipoCalculoFora").removeAttr('disabled');
$(".radioTipoCalculoDentro").removeAttr('disabled');
$(".radioTipoCalculoBsDupla").removeAttr('disabled');

//Se é consumo, então contribuinte fica ativo
$(".radioContribuinteSim").removeAttr('disabled');
$(".radioContribuinteNao").removeAttr('disabled');

//Se é consumo, Não precisa ter Simples Nacional Ativo
$(".radioSimplesNacionalSim").attr('disabled','true');
$(".radioSimplesNacionalSim").prop('checked',false);
$(".radioSimplesNacionalNao").prop('checked','true');
$(".radioSimplesNacionalNao").attr('disabled','true');
parametros.simplesNacional = 'Nao';
}
else if(parametros.destinoMaterial == "Revenda" && parametros.simplesNacional =='Nao'){
//Se é revenda, não precisa do tipo de cálculo
$(".radioTipoCalculoFora").attr('disabled', 'true');
$(".radioTipoCalculoDentro").attr('disabled', 'true');
$(".radioTipoCalculoBsDupla").attr('disabled', 'true');
$(".radioTipoCalculoFora").prop('checked',false);
$(".radioTipoCalculoDentro").prop('checked',false);
$(".radioTipoCalculoBsDupla").prop('checked',false);
parametros.tipoCalculo = '';
//Se é revenda, então é contribuinte
$(".radioContribuinteSim").attr('disabled', 'true');
$(".radioContribuinteSim").prop('checked', 'true');
$(".radioContribuinteNao").attr('disabled', 'true');
$(".radioContribuinteNao").prop('checked',false);
parametros.clienteContribuinte = 'Sim';
//Se é revenda, precisa ter Simples Nacional Ativo
$(".radioSimplesNacionalSim").removeAttr('disabled');
$(".radioSimplesNacionalNao").removeAttr('disabled');
$(".radioSimplesNacionalSim").prop('checked',false);
$(".radioSimplesNacionalNao").prop('checked',true);
parametros.simplesNacional = 'Nao'
}

else if(parametros.destinoMaterial == "Revenda" && parametros.simplesNacional =='Sim'){
//Se é revenda, não precisa do tipo de cálculo
$(".radioTipoCalculoFora").attr('disabled', 'true');
$(".radioTipoCalculoDentro").attr('disabled', 'true');
$(".radioTipoCalculoBsDupla").attr('disabled', 'true');
parametros.tipoCalculo = '';
//Se é revenda, então é contribuinte
$(".radioContribuinteSim").attr('disabled', 'true');
$(".radioContribuinteNao").attr('disabled', 'true');
parametros.clienteContribuinte = 'Sim';
//Se é revenda, precisa ter Simples Nacional Ativo
$(".radioSimplesNacionalSim").removeAttr('disabled');
$(".radioSimplesNacionalNao").removeAttr('disabled');
parametros.simplesNacional = 'Sim'
}

else if(parametros.destinoMaterial == "Revenda"){
//Se é revenda, não precisa do tipo de cálculo
$(".radioTipoCalculoFora").attr('disabled', 'true');
$(".radioTipoCalculoDentro").attr('disabled', 'true');
$(".radioTipoCalculoBsDupla").attr('disabled', 'true');
parametros.tipoCalculo = '';
//Se é revenda, então é contribuinte
$(".radioContribuinteSim").attr('disabled', 'true');
$(".radioContribuinteSim").prop('checked', 'true');
$(".radioContribuinteNao").attr('disabled', 'true');
parametros.clienteContribuinte = 'Sim';
//Se é revenda, precisa ter Simples Nacional Ativo
$(".radioSimplesNacionalSim").removeAttr('disabled');
$(".radioSimplesNacionalNao").removeAttr('disabled');
$(".radioSimplesNacionalSim").prop('checked',false);
$(".radioSimplesNacionalNao").prop('checked',false);
parametros.simplesNacional=''
}

if(parametros.clienteContribuinte == "Sim" && parametros.destinoMaterial == "Consumo"){
$(".radioTipoCalculoFora").removeAttr('disabled');
$(".radioTipoCalculoDentro").removeAttr('disabled');
$(".radioTipoCalculoBsDupla").removeAttr('disabled');

}
else if(parametros.clienteContribuinte == "Nao"){
//Se é não contribuinte, não precisa do tipo de cálculo
$(".radioTipoCalculoFora").attr('disabled', 'true');
$(".radioTipoCalculoDentro").attr('disabled', 'true');
$(".radioTipoCalculoBsDupla").attr('disabled', 'true');
$(".radioTipoCalculoFora").prop('checked',false);
$(".radioTipoCalculoDentro").prop('checked',false);
$(".radioTipoCalculoBsDupla").prop('checked',false);
parametros.tipoCalculo = '';
}

padronizacaoDosParametros()
verificaPadrao();
}
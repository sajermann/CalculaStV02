//######################################################################################################
//################################### | FORMATAÇÃO MONETÁRIA VISUAL | ##################################
//######################################################################################################
function visualFormat(a, b){
// 2 Parâmetros conforme descrito abaixo, para chamar essa função anule o outro parâmetro não usado
//(Real com Cifrão (2 Casas) / Real sem Cifrão (2 Casas)
//debugger
if(a != null){if(isNaN(a) ||a == '' || a == undefined){return 'R$0,00'}else{return 'R$' + a.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}	}
else if(b != null){if(isNaN(b) || b =='' || b == undefined){return '0,00'}else{return b.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}}	
else if(a == undefined || b == undefined){return '0,00'}
else{return console.error('Erro na fórmula FORMATAÇÃO MONETÁRIA VISUAL (Entrada a: '+a+' Entrada b: '+b);}	
}
//######################################################################################################
//################################## | FORMATAÇÃO PECENTUÁRIA VISUAL | #################################
//######################################################################################################
function visualPercentFormat(a, b){
// 2 Parâmetros conforme descrito abaixo, para chamar essa função anule o outro parâmetro não usado
//(Porcentagem com (2 Casas) / Porcentagem com (4 Casas)
// if(a != null){if(isNaN(a) || a == ''){return '0,00%'}else{return a.charAt(2) + a.charAt(3) + '.' + a.charAt(4) + a.charAt(5) + '%'}	}
//debugger;
// console.log("a é um numero: " + isNaN(a))
// console.log("conteúdo de a: " + a)
// console.log("b é um numero: " + isNaN(b))
// console.log("conteúdo de bz: " + b)
// try{
// if(a != null){if(isNaN(a) || a == '' || a == undefined){return '0,00%'}else{return a.toFixed(2).toString().replace('.', ',') + "%"}}
// else if(b != null){if(isNaN(b) || b == '' || b == undefined){return '0,0000%'}else{return b.toFixed(4).toString().replace('.', ',') + '%'}}
// else{return console.error('Erro na fórmula FORMATAÇÃO PECENTUÁRIA VISUAL (Entrada a: '+a+' Entrada b: '+b)}
	// }catch{};
	if(b == null){b = 2};
	//debugger
	if(a == null || isNaN(a) || a == ''){return '0,00%'}else{return a.toFixed(b).toString().replace('.', ',') + "%"}
	//else{return console.error('Erro na fórmula FORMATAÇÃO PECENTUÁRIA VISUAL (Entrada a: '+a+' Entrada b: '+b)}
	
}
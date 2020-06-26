var valorTempCell = ""

function createInput(tecla){
	editing = true;
	var valorCelula = currCell.html();
	var tipoCelula = currCell.attr('typeCell');
	var linha = currCell.attr('linha');
	valorTempCell = currCell.html();
	currCell.html('')
	
	if (tipoCelula == 'codigo'){ 
	tipoCelula = 'number';
	hiddenOrNoHidden = 'noHidden';
	classe = 'inputCodigo';
	}
	else if (tipoCelula == 'descricao'){ 
	tipoCelula = 'text';
	hiddenOrNoHidden = 'hidden';
	classe = 'inputDescricao';
	}
	else{ 
	tipoCelula = 'number';
	hiddenOrNoHidden = 'hidden';
	classe = 'inputQuantidadePreco';
	}
	//currCell.append(`
	//<div class="input-group mb-3">
	//	<input type="${tipoCelula}" id="inputEntradaDados" style="width:57px" linha="${linha}" value="${valorCelula}" class="form-control ${classe}" placeholder="Placeholder" aria-label="Recipient's username" aria-describedby="basic-addon2" autofocus>
	//	<div class="input-group-append ${hiddenOrNoHidden}">
	//	<a class="waves-effect waves-light btn pesquisarProd"><i class="material-icons">search</i></a>
	//	</div>
	//</div>
	//`);

    currCell.append(`
                  <div class="input-group mb-3">
                    <input type="${tipoCelula}" id="inputEntradaDados" style="width:57px" linha="${linha}" value="${valorCelula}" class="form-control ${classe}"  aria-label="Recipient's username" aria-describedby="basic-addon2" autofocus>
	                    
<a class="waves-effect waves-light btn pesquisarProd ${hiddenOrNoHidden}"><i class="material-icons">search</i></a>
    
                  </div>
	`); 
	if(tecla==null){$('#inputEntradaDados').select();}else{$('#inputEntradaDados').focus().val('');}
}

$('body').on('keypress keyup keydown change', '.inputDescricao', function(){
	descricaoFantasia($(this).attr('linha'), $(this).val())
	currCell.addClass('descricaoFantasiaAlterado');
	//atualizadorLinha($(this).attr('linha'), $(this).val(), $(`.cellQuantidade:eq(${linha})`).text(), $(`.cellPreco:eq(${linha})`).text());
	//atualizadorLinhaVisivel(linha);
	
});


$('body').on('keypress keyup keydown change', '.inputCodigo', function(){
	var linha = $(this).attr('linha');
	atualizadorLinha($(this).attr('linha'), $(this).val(), $(`.cellQuantidade:eq(${linha})`).text(), $(`.cellPreco:eq(${linha})`).text());
	atualizadorLinhaVisivel(linha);
	$(`[celldescricao="${linha}"]`).removeClass('descricaoFantasiaAlterado');
		
});

$('body').on('keypress keydown change keyup', '.inputQuantidadePreco', function(){

	var linha = $(this).attr('linha');
	var queTipoCelulaEssa = currCell.attr('typeCell')
	queTipoCelulaEssa == 'quantidade' ? atualizadorLinha(linha, $(`.cellCodigo:eq(${linha})`).text(),$(this).val(), $(`.cellPreco:eq(${linha})`).text()) : atualizadorLinha(linha, $(`.cellCodigo:eq(${linha})`).text(), $(`.cellQuantidade:eq(${linha})`).text(), $(this).val())
	atualizadorLinhaVisivel(linha);
	
});

$('body').on('keydown', '.input-group', function(e){
        
        switch(e.which){
            case 9: //Tecla Tab
            case 13: //Tecla Enter
                e.preventDefault();
                currCell.html($('#inputEntradaDados').val())
                $('#inputEntradaDados').remove();
                editing = false;
                currCell.focus();
                break;
            case 27: //Tecla Escape
                e.preventDefault();
                $('.input-group').remove();
                currCell.html(valorTempCell);
                editing = false;
                currCell.focus();
				if(currCell.attr('typecell') == 'codigo'){
                	atualizadorLinha(currCell.attr('linha'), valorTempCell, $(`.cellQuantidade:eq(${linha})`).text(), $(`.cellPreco:eq(${linha})`).text());
				//console.log(currCell.attr('typecell'));
				}else if(currCell.attr('typecell') == 'quantidade'){
					// atualizadorLinha(currCell.attr('linha'));
					atualizadorLinha(linha, $(`.cellCodigo:eq(${linha})`).text(),valorTempCell, $(`.cellPreco:eq(${linha})`).text())
				}else{
					atualizadorLinha(linha, $(`.cellCodigo:eq(${linha})`).text(), $(`.cellQuantidade:eq(${linha})`).text(), valorTempCell)
				}
				valoresHeader[0] = new contructorHeader(itensAdicionados);
                atualizadorLinhaVisivel(currCell.attr('linha'));
                valorTempCell = "";
                break;
            case 114: //Tecla F3
            e.preventDefault();
            produtos();
            break;
        }
});

function atualizadorLinha(linha, codigo, quantidade, preco){
	isNaN(parseFloat(quantidade)) ? quantidade = 0: quantidade = quantidade
	isNaN(parseFloat(preco)) ? preco = 0: preco = preco
	itensAdicionados[linha] = new constructorProdutos(linha, codigo, quantidade, preco)
}

function atualizadorLinhaVisivel(linha){
	$(`.cellDescricao:eq(${linha})`).text(itensAdicionados[linha].descricao)
	$(`.cellNcm:eq(${linha})`).text(itensAdicionados[linha].ncm)
	$(`.cellTotal:eq(${linha})`).text(visualFormat(null, itensAdicionados[linha].total));
	$(`.cellIpi:eq(${linha})`).text(visualFormat(null, itensAdicionados[linha].ipi));
	$(`.cellSt:eq(${linha})`).text(visualFormat(null, itensAdicionados[linha].st));
	$(`.cellValorTotal:eq(${linha})`).text(visualFormat(null, itensAdicionados[linha].valorTotal));
	$(`.cellAcrescimo:eq(${linha})`).text(visualPercentFormat(itensAdicionados[linha].acrescimo, 4));
	$(`.cellMva:eq(${linha})`).text(visualPercentFormat(itensAdicionados[linha].mva));
	$(`.cellIcms:eq(${linha})`).text(visualPercentFormat(itensAdicionados[linha].icmsPorcentagem));
	$(`.cellIntra:eq(${linha})`).text(visualPercentFormat(itensAdicionados[linha].intraPorcentagem));
		
}

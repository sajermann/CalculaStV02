// var currCell = $('td').first();
var currCell = $('.cellCodigo').first();
var editing = false;

// User clicks on a cell
$('table').on('click', 'td', function() {
    currCell = $(this);
});

//######################################################################################################
//###################################### | NAVEGAR PELO TECLADO | ######################################
//######################################################################################################
$('table').keydown(function (e) {
    var c = "";
    if(!editing){
        switch (e.which ) {
            case 97: //Tecla Num1
                if(currCell.attr('locked') == 'false'){
                //e.preventDefault();
                //console.log(currCell.html());
                    //createInput(1);
                    createInput(1);
                }
            break;
            case 98: //Tecla Num2
                if(currCell.attr('locked') == 'false'){
                   createInput(2);
                }
            break;
            case 99: //Tecla Num3
                if(currCell.attr('locked') == 'false'){
                   createInput(3);
                }
            break;   
            case 100: //Tecla Num4
                if(currCell.attr('locked') == 'false'){
                   createInput(4);
                }
            break; 
            case 101: //Tecla Num5
                if(currCell.attr('locked') == 'false'){
                   createInput(5);
                }
            break; 
            case 102: //Tecla Num6
                if(currCell.attr('locked') == 'false'){
                   createInput(6);
                }
            break; 
            case 103: //Tecla Num7
                if(currCell.attr('locked') == 'false'){
                   createInput(7);
                }
            break; 
            case 104: //Tecla Num8
                if(currCell.attr('locked') == 'false'){
                   createInput(8);
                }
            break; 
            case 105: //Tecla Num9
                if(currCell.attr('locked') == 'false'){
                   createInput(9);
                }
            break; 
            case 96: //Tecla Num0
                if(currCell.attr('locked') == 'false'){
                   createInput(0);
                }
            break;             
            case 37: //Tecla Esquerda
                c = currCell.prev();
            break; 
            case 38: //Tecla Cima
                if ($(`[cellncm=${currCell.attr('linha')}]`).text() == "" && currCell.attr('linha') != 0){
                    c = currCell.closest('tr').prev().find('td:eq(' + currCell.index() + ')');
                    removeLine();
                }else{
                c = currCell.closest('tr').prev().find('td:eq(' + currCell.index() + ')');
                }
            break; 
            case 39: //Tecla Direita
                c = currCell.next()
            break;
            case 40: //Tecla Baixo
                c = currCell.closest('tr').next().find('td:eq(' + currCell.index() + ')');
                if (c.length <= 0) {
                    if (_visualizando) { } else {
                        verificarSePodeIncluirLinha();
                        c = currCell.closest('tr').next().find('td:eq(' + currCell.index() + ')');
                    }
                }
            break;
            case 46: //Tecla Delete
                if (_visualizando) {

                } else {
                    if (currCell.closest('tr').hasClass('selected')) {
                        currCell.closest('tr').removeClass('selected');
                        try { itensAdicionados[currCell.attr('linha')].ativo = true; } catch{ }
                        //$(`[linha=${currCell.attr('linha')}] [locked="false"]`).attr('locked', true);
                        $(`[linha=${currCell.attr('linha')}] [typecell="codigo"]`).attr('locked', false);
                        $(`[linha=${currCell.attr('linha')}] [typecell="descricao"]`).attr('locked', false);
                        $(`[linha=${currCell.attr('linha')}] [typecell="quantidade"]`).attr('locked', false);
                        $(`[linha=${currCell.attr('linha')}] [typecell="preco"]`).attr('locked', false);
                    } else {
                        currCell.closest('tr').addClass('selected');
                        try { itensAdicionados[currCell.attr('linha')].ativo = false; } catch{ }
                        $(`[linha=${currCell.attr('linha')}] [locked="false"]`).attr('locked', true);
                    }
                }
               valoresHeader[0] = new contructorHeader(itensAdicionados);
            break; 
            case 13: //Tecla Enter
            case 32: //Tecla Espaço
                if(currCell.attr('locked') == 'false'){
                    e.preventDefault();
                //console.log(currCell.html());
                   createInput();
                }
            break;
        }
        if(e.which == 9 && !e.shiftKey){ //Tecla Tab e Shift
             e.preventDefault();
             c = currCell.next();
        }
        else if(e.which == 9 && e.shiftKey){ //Tecla Tab e Shift
             e.preventDefault();
             c = currCell.prev();
        }
    }
    
    // If we didn't hit a boundary, update the current cell
    if (c.length > 0) {
        currCell = c;
        currCell.focus();
    }
});
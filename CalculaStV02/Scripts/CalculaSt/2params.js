//######################################################################################################
//########################################### | OPEN PARAMS | ##########################################
//######################################################################################################
document.addEventListener('DOMContentLoaded', function () {
    //openParams();
});

function openParams(configButton) {
	$('main').append(`
		<!-- Modal Structure -->
		<div id="modalOpenParams" class="modal modal-fixed-footer">
			<div class="modal-content">
				<strong>Defina os Parâmetros!</strong>
				<div class="divEstados col">
                    <fieldset class="fieldSeparador">
		                <legend class="fieldSeparador">Estados</legend>
                        <div class="row" style="display:flex;align-items:center;justify-content:center;">
                            <div class="col">
                                <div class="col s12 m6 l6 xl6">
                                    <div class="input-field col s12" style="margin-bottom:0px;">
                                        <i class="material-icons prefix" style="color:red">keyboard_arrow_up</i>
                                        <input type="text" id="autocomplete-input1" class="selectEstadoOrigem autocompleteOrigem">
                                        <label for="autocomplete-input1">Origem</label>
                                    </div>
                                </div>
                                <div class="col s12 m6 l6 xl6">
                                    <div class="input-field col s12" style="margin-bottom:0px;">
                                        <i class="material-icons prefix" style="color:green">keyboard_arrow_down</i>
                                        <input type="text" id="autocomplete-input2" class="selectEstadoDestino autocompleteDestino">
                                        <label for="autocomplete-input2">Destino</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div class="col">
                    <div class="row">
				        <div class="divDestino col s12 m12 l6 xl6">
                            <fieldset class="fieldSeparador">
		                        <legend class="fieldSeparador">Destino</legend>
                                <div class="row">
                                    <div class="col s12 m12 l12 xl12" style="display: flex;align-items: center;justify-content: center;">
                                        <div class="row">
                                            <div class="col s6 m6 l6 xl6"> 
                                                <div class="form-check form-check-inline">
                                                    <label>
                                                        <input class="with-gap radioDestinoMaterialConsumo" name="group2" type="radio" id="radioDestinoMaterialConsumo" disabled="">
                                                        <span>Consumo</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col s6 m6 l6 xl6">        
                                                <div class="form-check form-check-inline">
                                                    <label>
                                                        <input class="with-gap radioDestinoMaterialRevenda" name="group2" type="radio" id="radioDestinoMaterialRevenda" disabled="">
                                                        <span>Revenda</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
    	                <div class="divTipoCalculo col s12 m12 l6 xl6">
                            <fieldset class="fieldSeparador">
		                    <legend class="fieldSeparador">Tipo de Cálculo</legend>
                            <div class="row">
                                <div class="col s12 m12 l12 xl12">
                                    <div class="row">
                                        <div class="col s4 m3 l3 xl3" style="display: flex;align-items: center;justify-content: center;">    
                                            <div class="form-check form-check-inline">
                                                <label>
                                                    <input class="with-gap radioTipoCalculoFora" name="group3" type="radio" id="radioTipoCalculoFora" disabled="">
                                                    <span>Fora</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col s4 m3 l3 xl3" style="display: flex;align-items: center;justify-content: center;">    
                                            <div class="form-check form-check-inline">
                                                <label>
                                                    <input class="with-gap radioTipoCalculoDentro" name="group3" type="radio" id="radioTipoCalculoDentro" disabled="">
                                                    <span>Dentro</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col s4 m6 l6 xl6" style="display: flex;align-items: center;justify-content: center;">    
                                            <div class="form-check form-check-inline">
                                                <label>
                                                    <input class="with-gap radioTipoCalculoBsDupla" name="group3" type="radio" id="radioTipoCalculoBsDupla" disabled="">
                                                    <span>BS Dupla</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </fieldset>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="row">
				        <div class="divContribuinte col s12 m12 l6 xl6">
                            <fieldset class="fieldSeparador">
		                        <legend class="fieldSeparador">Contribuinte</legend>
                                <div class="row">
                                    <div class="col s12 m12 l12 xl12" style="display: flex;align-items: center;justify-content: center;">
                                        <div class="row">
                                            <div class="col s6 m6 l6 xl6"> 
                                                <div class="form-check form-check-inline">
                                                    <label>
                                                        <input class="with-gap radioContribuinteSim" name="group4" type="radio" id="radioContribuinteSim" disabled/>
                                                        <span>Sim</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col s6 m6 l6 xl6">        
                                                <div class="form-check form-check-inline">
                                                    <label>
                                                        <input class="with-gap radioContribuinteNao" name="group4" type="radio" id="radioContribuinteNao" disabled/>
                                                        <span>Não</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
    	                <div class="divSimplesNacional col s12 m12 l6 xl6">
                            <fieldset class="fieldSeparador">
		                    <legend class="fieldSeparador">Simples Nacional</legend>
                            <div class="row">
                                <div class="col s12 m12 l12 xl12" style="display: flex;align-items: center;justify-content: center;">
                                    <div class="row">
                                        <div class="col s6 m6 l6 xl6">    
                                            <div class="form-check form-check-inline">
                                                <label>
                                                    <input class="with-gap radioSimplesNacionalSim" name="group5" type="radio" id="radioSimplesNacionalSim" disabled/>
                                                    <span>Sim</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col s6 m6 l6 xl6">    
                                            <div class="form-check form-check-inline">
                                                <label>
                                                    <input class="with-gap radioSimplesNacionalNao" name="group5" type="radio" id="radioSimplesNacionalNao" disabled/>
                                                    <span>Não</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                
                <div class="boxP1arametros col">
                    <fieldset class="fieldSeparador">
		                <legend class="fieldSeparador">Status</legend>
                        <div class="row" style="display:flex; align-items:center; justify-content:center;">
                            <div class="status" style="display: flex;justify-content: center;align-items: center;margin: 0px 10px;padding: 7px;background: blue;color: white;border-radius: .25rem;width: 180px;">
                            </div>
                            <div class="parametros" style="display:none";></div>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" id="checkBoxRecalc" disabled>
                                    <span class="lever"></span>
                                    Recalcular
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>                




            </div>
            <div class="modal-footer">
                <a href="#!" class="waves-effect waves-green btn-flat botaoOkEnviarParametros" onclick="enviarParametros()">Ok</a>
            </div>
        </div>
	
        <script>
            $(".selectEstadoOrigem").on('change click',function(){ atualizacoes(); });
            $(".selectEstadoDestino").on('change click',function(){ atualizacoes();console.log($(this).val()); });
            function atualizacoes(){
                if($('.selectEstadoDestino').val() == ""){
                    $(".radioDestinoMaterialConsumo").prop("checked", false);
                    $(".radioDestinoMaterialConsumo").attr("disabled", "true");
                    $(".radioDestinoMaterialRevenda").prop("checked", false);
                    $(".radioDestinoMaterialRevenda").attr("disabled", "true");
                    $(".radioTipoCalculoFora").prop("checked", false);
                    $(".radioTipoCalculoFora").attr("disabled", "true");
                    $(".radioTipoCalculoDentro").prop("checked", false);
                    $(".radioTipoCalculoDentro").attr("disabled", "true");
                    $(".radioTipoCalculoBsDupla").prop("checked", false);
                    $(".radioTipoCalculoBsDupla").attr("disabled", "true");
                    $(".radioContribuinteSim").prop("checked", false);;
                    $(".radioContribuinteSim").attr("disabled", "true");
                    $(".radioContribuinteNao").prop("checked", false);;
                    $(".radioContribuinteNao").attr("disabled", "true");
                    $(".radioSimplesNacionalNao").prop("checked", false);;
                    $(".radioSimplesNacionalNao").attr("disabled", "true");
                    $(".radioSimplesNacionalSim").prop("checked", false);;
                    $(".radioSimplesNacionalSim").attr("disabled", "true");
                    parametros = new contructorParams('', '', '', '', '', '');
                    paramsUpdate();
                }else{
                    parametros = new contructorParams($('.selectEstadoOrigem').val().toUpperCase(), $('.selectEstadoDestino').val().toUpperCase(), '', '', '', '');
                    $(".radioDestinoMaterialConsumo").removeAttr("disabled");
                    $(".radioDestinoMaterialRevenda").removeAttr("disabled");
                }
                paramsUpdate();
            }
            
            $(".selectEstadoDestino").on("change", function(){
                ajeitaBotoesParametros();
            });

            $(".radioDestinoMaterialConsumo").click(function(){
                parametros.destinoMaterial = 'Consumo';
                ajeitaBotoesParametros();
            });
    
            $(".radioDestinoMaterialRevenda").click(function(){
                parametros.destinoMaterial = 'Revenda';
                ajeitaBotoesParametros();
            });	

            $(".radioTipoCalculoFora").click(function(){
                parametros.tipoCalculo = 'Fora';
                ajeitaBotoesParametros();
            });

            $(".radioTipoCalculoDentro").click(function(){
                parametros.tipoCalculo = "Dentro";
                ajeitaBotoesParametros();
            });

            $(".radioTipoCalculoBsDupla").click(function(){
                parametros.tipoCalculo = "BS Dupla";
                ajeitaBotoesParametros();
            });

            $(".radioContribuinteSim").click(function(){
                parametros.clienteContribuinte = "Sim";
                ajeitaBotoesParametros();
            });

            $(".radioContribuinteNao").click(function(){
                parametros.clienteContribuinte = "Nao";
                ajeitaBotoesParametros();
            });

            $(".radioSimplesNacionalSim").click(function(){
                parametros.simplesNacional= "Sim";
                ajeitaBotoesParametros();
            });

            $(".radioSimplesNacionalNao").click(function(){
                parametros.simplesNacional = "Nao";
                ajeitaBotoesParametros();
            });

            function paramsUpdate(){
                $(".parametros:eq(0)").text(parametros.estadoDestino + parametros.destinoMaterial + parametros.tipoCalculo + parametros.clienteContribuinte + parametros.simplesNacional);
            }

            $('.selectEstadoOrigem').val("SP");
            $('.chosen-single:eq(0)').text("São Paulo");

            
  
           $('.autocompleteOrigem').focus();
           $('.autocompleteOrigem').val('SP');
           $('.autocompleteOrigem').attr('disabled', 'disabled');

           $('#radioTipoCalculoDentro').on('click', function(){$(this).attr('checked') == 'checked' ? $(this).removeAttr('checked') : $(this).attr('checked', true)});
    
           var elems = document.querySelectorAll('.autocompleteDestino');
           var instances = M.Autocomplete.init(elems,{
                data: {
                    "AC": "https://imagensemoldes.com.br/wp-content/uploads/2017/11/BANDEIRA-DO-BRASIL-DO-ESTADO-DE-SERGIPE-EM-VETOR-JPG-PNG-EDIT%C3%81VEL-20.png",
                    "AL": "https://www.guiadoturista.net/imgs/2018/07/bandeira-alagoas.png",
                    "AM": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bandeira_de_Sergipe.svg/1280px-Bandeira_de_Sergipe.svg.png",
                    "AP": "https://imagensemoldes.com.br/wp-content/uploads/2017/11/BANDEIRA-DO-BRASIL-DO-ESTADO-DE-SERGIPE-EM-VETOR-JPG-PNG-EDIT%C3%81VEL-20.png",
                    "BA": "https://imagensemoldes.com.br/wp-content/uploads/2017/11/BANDEIRA-DO-BRASIL-DO-ESTADO-DA-BAHIA-EM-VETOR-JPG-PNG-EDITAVEL-06.png",
                    "CE": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bandeira_de_Granja_-_CE.svg/2000px-Bandeira_de_Granja_-_CE.svg.png",
                    "DF": "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/bandeira-brasil-300x210.png?x64851",
                    "ES": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg/1200px-Bandeira_do_Esp%C3%ADrito_Santo.svg.png",
                    "GO": "https://imagepng.org/wp-content/uploads/2017/06/bandeira-de-goias.png",
                    "MA": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranh%C3%A3o.svg/2000px-Bandeira_do_Maranh%C3%A3o.svg.png",
                    "MG": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandeira_de_Minas_Gerais.svg/1280px-Bandeira_de_Minas_Gerais.svg.png",
                    "MS": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg/2000px-Bandeira_de_Mato_Grosso_do_Sul.svg.png",
                    "MT": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg",
                    "PA": "https://imagepng.org/wp-content/uploads/2017/07/bandeira-do-estado-do-para.png",
                    "PB": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bandeira_da_Para%C3%ADba.svg/800px-Bandeira_da_Para%C3%ADba.svg.png",
                    "PE": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_de_Pernambuco.svg/2000px-Bandeira_de_Pernambuco.svg.png",
                    "PI": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandeira_do_Piau%C3%AD.svg/2000px-Bandeira_do_Piau%C3%AD.svg.png",
                    "PR": "https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paran%C3%A1.svg",
                    "RJ": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg/275px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png",
                    "RN": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_do_Rio_Grande_do_Norte.svg/2000px-Bandeira_do_Rio_Grande_do_Norte.svg.png",
                    "RO": "https://imagepng.org/wp-content/uploads/2017/08/bandeira-de-rondonia-estado.png",
                    "RR": "https://imagepng.org/wp-content/uploads/2017/08/bandeira-de-roraima-estado.png",
                    "RS": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bandeira_do_Rio_Grande_do_Sul.svg/1280px-Bandeira_do_Rio_Grande_do_Sul.svg.png",
                    "SC": "https://upload.wikimedia.org/wikipedia/commons/1/10/Bandeira_de_Santa_Catarina.png",
                    "SE": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bandeira_de_Sergipe.svg/1200px-Bandeira_de_Sergipe.svg.png",
                    "SP": "https://domingosmantelli.com.br/2/wp-content/uploads/2013/03/domingos-mantelli-ginecologia-obstetricia-bandeira-sao-paulo.png",
                    "TO": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bandeira_do_Tocantins.svg"
                    },
                limit:3,
            });
        </script>
    </div>
	`);

    var self = this;
    if (configButton == 'configButton') {
        $('.selectEstadoDestino option:selected').val(parametros.estadoDestino);
        $('.chosen-single:eq(1)').text(parametros.estadoDestino);
        $(".radioDestinoMaterialConsumo").removeAttr("disabled");
        $(".radioDestinoMaterialRevenda").removeAttr("disabled");
        $(".boxStatus").show();
        paramsUpdate();
        if (parametros.destinoMaterial == 'Consumo') { $(".radioDestinoMaterialConsumo").attr('checked', true); }
        else if (parametros.destinoMaterial == 'Revenda') { $(".radioDestinoMaterialRevenda").attr('checked', true); }
        else { };
        ajeitaBotoesParametros();
        if (parametros.tipoCalculo == 'Fora') { $(".radioTipoCalculoFora").attr('checked', true) }
        else if (parametros.tipoCalculo == 'Dentro') { $(".radioTipoCalculoDentro").attr('checked', true) }
        else if (parametros.tipoCalculo == 'BS Dupla') { $(".radioTipoCalculoBsDupla").attr('checked', true) }
        else { };
        ajeitaBotoesParametros();
        if (parametros.clienteContribuinte == 'Sim') { $(".radioContribuinteSim").attr('checked', true) }
        else if (parametros.clienteContribuinte == 'Nao') { $(".radioContribuinteNao").attr('checked', true) }
        else { };
        ajeitaBotoesParametros();
        if (parametros.simplesNacional == 'Sim') { $(".radioSimplesNacionalSim").attr('checked', true) }
        else if (parametros.simplesNacional == 'Nao') { $(".radioSimplesNacionalNao").attr('checked', true) }
        ajeitaBotoesParametros();
        $('#checkBoxRecalc').attr('disabled', false);
        $('#checkBoxRecalc').attr('checked', true);
    }

	var elem = document.getElementById('modalOpenParams');
	var instance = M.Modal.init(elem, {
		dismissible: false,
		onOpenEnd: function () {
			//alert('abertto')
		}
	});
    instance.open();

    M.updateTextFields();
}

//$('#config').on('click',function(){ openParams('configButton'); });


function preencherCabecalhoParametros() {
    $('.cellEstadoOrigem').text(parametros.estadoOrigem);
    $('.cellEstadoDestino').text(parametros.estadoDestino);
    $('.cellDestinoMaterial').text(parametros.destinoMaterial);
    $('.cellTipoCalculo').text(function () { if (parametros.tipoCalculo == '') { return 'Não Aplicado' } else { return parametros.tipoCalculo } });
    $('.cellClienteContribuinte').text(function () { if (parametros.clienteContribuinte == '') { return 'Não Aplicado' } else { return parametros.clienteContribuinte } });
    $('.cellSimplesNacional').text(function () { if (parametros.simplesNacional == '') { return 'Não Aplicado' } else { return parametros.simplesNacional } });
    valoresHeader[0] = new contructorHeader(itensAdicionados);
    $('.centralizar').fadeIn(500);
    currCell.focus();
    if ($('#checkBoxRecalc').attr('checked') == 'checked') { recalcAllItens(); }
}

function enviarParametros() {

    if (parametros.estadoDestino == '') {
        M.toast({ html: 'Estado de destino não selecionado!' })
    }
    else if (parametros.destinoMaterial == '') {
        M.toast({ html: 'Defina o destino do material!' })
    }
    else if (parametros.clienteContribuinte == '') {
        M.toast({ html: 'O cliente é contribuinte?' })
    }
    else if ($('.status:eq(0)').text() == 'Padrão') {

        preencherCabecalhoParametros();
        var elem = document.getElementById('modalOpenParams');
        var instance = M.Modal.getInstance(elem);
        instance.close()
        setTimeout(function () { elem.remove(); }, 1000);

    } else if ($('.status:eq(0)').text() == 'Não Padrão') {
        var oquefazer = msgNaoPadrao();
        //msgNaoPadrao();
    } else if ($('.status:eq(0)').text() == 'Não Padrão (Aceito)') {

        var elem = document.getElementById('modalOpenParams');
        var instance = M.Modal.getInstance(elem);
        instance.close()
        setTimeout(function () { elem.remove(); }, 1000);

    }

}

function msgNaoPadrao() {
    console.log('caiu aqui msgNaoPadrao')
    $('main').append(`
		<!-- Modal Structure -->
		<div id="modalMsgNaoPadrao" class="modal modal-fixed-footer">
			<div class="modal-content">
            <span>Os parâmetros não estão no padrão desse estado, deseja continuar mesmo assim?<br /></span>
            <span>Note que, caso opte por continuar, os valores não serão calculados corretamente, a opção de continuar mesmo fora do padrão serve apenas para estudos e desenvolvimento!</span>

            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat" onclick="$('.status:eq(0)').text('Não Padrão (Aceito)'); setTimeout(function(){document.querySelector('#modalMsgNaoPadrao').remove();}, 500)">Continuar</a>
                <a href="#!" class="modal-close waves-effect waves-green btn-flat" onclick="setTimeout(function(){document.querySelector('#modalMsgNaoPadrao').remove();}, 500)">Ajustar</a>
            </div>
        </div>

    </div>
	`);
    var elem = document.getElementById('modalMsgNaoPadrao');
    var instance = M.Modal.init(elem, {
        dismissible: false,
        onOpenEnd: function () {
            //alert('abertto')
        }
    });
    instance.open();
}
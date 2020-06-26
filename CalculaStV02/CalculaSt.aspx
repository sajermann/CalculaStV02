<%@ Page Title="" Language="C#" MasterPageFile="~/DF.Master" AutoEventWireup="true" CodeBehind="CalculaSt.aspx.cs" Inherits="CalculaStV2.CalculaSt2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TituloPagina" runat="server">
    CalculaSt2
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="CssExclusivos" runat="server">
    <asp:PlaceHolder runat="server">
        <%: Styles.Render("~/bundles/calculaSt2CSS") %>
    </asp:PlaceHolder>
    <link href="/Content/MasterPage/jquery-confirm.css" rel="stylesheet">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <main>
        <div id="mainPrincipal">
            <div class="centralizar" style="display: no/ne;">
                <div class="row divBotoes">
                    <form class="col s12">
                        <div class="divPesquisaBotoes">
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">search</i>
                                    <input id="buscaTable" type="search" class="validate">
                                    <label for="buscaTable">Pesquisar</label>
                                </div>
                                <i class="material-icons dropdown-trigger" data-target='dropdown1'>filter_list</i>
                                <ul id='dropdown1' class='dropdown-content'>
                                    <li>
                                        <label style="color: black">
                                            <input id="filtroId" type="checkbox" checked="checked" />
                                            <span style="color: black; font-size: 10px">ID</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label style="color: black">
                                            <input id="filtroUsuario" type="checkbox" checked="checked" />
                                            <span style="color: black; font-size: 10px">Usuário</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label style="color: black">
                                            <input id="filtroEstOri" type="checkbox" checked="checked" />
                                            <span style="color: black; font-size: 10px">Est. Ori</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label style="color: black">
                                            <input id="filtroEstDes" type="checkbox" checked="checked" />
                                            <span style="color: black; font-size: 10px">Est. Des</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label style="color: black">
                                            <input id="filtroDestino" type="checkbox" checked="checked" />
                                            <span style="color: black; font-size: 10px">Destino</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label style="color: black">
                                            <input id="filtroTipoCalc" type="checkbox" checked="checked" />
                                            <span style="color: black; font-size: 10px">Tipo Calc</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label style="color: black">
                                            <input id="filtroContribuinte" type="checkbox" checked="checked" />
                                            <span style="color: black; font-size: 10px">Contribuinte</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input id="filtroSimpNac" type="checkbox" checked="checked" />
                                            <span style="color: black; font-size: 10px">Simp Nac</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label style="color: black">
                                            <input id="filtroObs" type="checkbox" checked="checked" />
                                            <span style="color: black; font-size: 10px">Obs</span>
                                        </label>
                                    </li>
                                </ul>
                                <a class="waves-effect waves-light btn tooltipped" data-position="bottom" data-tooltip="Incluir Novo" id="buttonAdd"><i class="material-icons">add_box</i></a>
                                <a class="waves-effect waves-light btn #1e88e5 blue darken-1 tooltipped" data-position="bottom" data-tooltip="Visualizar" id="buttonVisualizar"><i class="material-icons">remove_red_eye</i></a>
                                <a class="waves-effect waves-light btn #d50000 red accent-4 tooltipped modal-trigger" data-target="modalDeletePed" href="#modalDeletePed" data-position="bottom" data-tooltip="Deletar" id="buttonDelete"><i class="material-icons">delete</i></a>
                                <a class="waves-effect waves-light btn #fb8c00 orange darken-1 tooltipped" data-position="bottom" data-tooltip="Editar" id="buttonEdit"><i class="material-icons">edit</i></a>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="divTableRelacaoPedidos" style="margin: 10px">
                <table class="table hover display compact stripe tableRelacaoPedidos">
                    <thead>
                        <tr>
                            <th class="labelHeader">ID</th>
                            <th class="labelHeader">Usuário</th>
                            <th class="labelHeader">Est Ori</th>
                            <th class="labelHeader">Est Des</th>
                            <th class="labelHeader">Destino</th>
                            <th class="labelHeader">Tipo Calc</th>
                            <th class="labelHeader">Contribuinte</th>
                            <th class="labelHeader">Simples Nac</th>
                            <th class="labelHeader">Obs</th>
                        </tr>
                    </thead>
                    <tbody id="tablePedidos">
                    </tbody>
                </table>
                    </div>
                <div class="divTableLancamentos" style="display: none;">
                    <div class="fixed-action-btn">
                        <a class="btn-floating btn-large red">
                            <i class="large material-icons">mode_edit</i>
                        </a>
                        <ul>
                            <li><a class="btn-floating green tooltipped modal-trigger" href="#modal1" data-position="left" data-tooltip="Salvar" id="buttonSave"><i class="material-icons">save</i></a></li>
                            <li><a class="btn-floating yellow darken-1  tooltipped" data-position="left" data-tooltip="Exportar" id="buttonExport"><i class="material-icons">publish</i></a></li>
                            <li><a class="btn-floating #d50000 red accent-4   tooltipped" data-position="left" data-tooltip="Fechar" id="buttonCancel"><i class="material-icons">cancel</i></a></li>
                        </ul>
                    </div>
                    <table class="headerTable centered responsive-table">
                        <colgroup>
                            <col style="width: 58px">
                            <col style="width: 118px">
                            <col style="width: 85px">
                            <col style="width: 107px">
                            <col style="width: 70px">
                            <col style="width: 104px">
                        </colgroup>
                        <tr>
                            <th class="labelHeader">Estado Origem</th>
                            <th class="labelHeader">Estado Destino</th>
                            <th class="labelHeader">Destino Material</th>
                            <th class="labelHeader">Tipo Cálculo</th>
                            <th class="labelHeader">Contribuinte</th>
                            <th class="labelHeader">Simples Nacional</th>
                        </tr>
                        <tr>
                            <td class=" cellEstadoOrigem"></td>
                            <td class=" cellEstadoDestino"></td>
                            <td class=" cellDestinoMaterial"></td>
                            <td class=" cellTipoCalculo"></td>
                            <td class=" cellClienteContribuinte"></td>
                            <td class=" cellSimplesNacional"></td>
                        </tr>
                        <tr>
                            <th class="labelHeader" colspan="2">Base de Cálculo</th>
                            <th class="labelHeader">ICMS</th>
                            <th class="labelHeader">Base ICMS ST</th>
                            <th class="labelHeader">ICMS ST</th>
                            <th class="labelHeader">Total Produtos</th>
                        </tr>
                        <tr>
                            <td class=" cellBaseCalculoHeader" colspan="2"></td>
                            <td class=" cellIcmsHeader"></td>
                            <td class=" cellBaseIcmsStHeader"></td>
                            <td class=" cellStHeader"></td>
                            <td class=" cellTotalHeader"></td>
                        </tr>
                        <tr>
                            <th class="labelHeader" colspan="2">Fecp</th>
                            <th class="labelHeader">Pis</th>
                            <th class="labelHeader">Cofins</th>
                            <th class="labelHeader">IPI</th>
                            <th class="labelHeader">Total da Nota</th>
                        </tr>
                        <tr>
                            <td class=" cellFecpHeader" colspan="2"></td>
                            <td class=" cellPisHeader"></td>
                            <td class=" cellCofinsHeader"></td>
                            <td class=" cellIpiHeader"></td>
                            <td class=" cellValorTotalHeader"></td>
                        </tr>
                        <tr>
                            <th class=" cellObservacaoHeader" colspan="6">Observação</th>
                        </tr>
                    </table>
                    <table class="tableLancamentosItens lancamentosItens">
                        <tr>
                            <th class="labelHeader">ID</th>
                            <th class="labelHeader">Código</th>
                            <th class="labelHeader">Descrição</th>
                            <th class="labelHeader">N.C.M.</th>
                            <th class="labelHeader">Quant.</th>
                            <th class="labelHeader">Preço</th>
                            <th class="labelHeader">Total</th>
                            <th class="labelHeader">IPI</th>
                            <th class="labelHeader">ST</th>
                            <th class="labelHeader">Valor Total</th>
                            <th class="labelHeader">Acresc.</th>
                            <th class="labelHeader">M.V.A</th>
                            <th class="labelHeader">ICMS</th>
                            <th class="labelHeader">Intra</th>
                        </tr>
                        <tr linha="0">
                            <td tabindex="1" class=" cellId" linha="0" cellid="0" locked="true" typecell="id">0</td>
                            <td tabindex="2" class=" cellCodigo" linha="0" cellcodigo="0" locked="false" typecell="codigo"></td>
                            <td tabindex="3" class=" cellDescricao" linha="0" celldescricao="0" locked="false" typecell="descricao"></td>
                            <td tabindex="4" class=" cellNcm" linha="0" cellncm="0" locked="true" typecell="ncm"></td>
                            <td tabindex="5" class=" cellQuantidade" linha="0" cellquantidade="0" locked="false" typecell="quantidade"></td>
                            <td tabindex="6" class=" cellPreco" linha="0" cellpreco="0" locked="false" typecell="preco"></td>
                            <td tabindex="7" class=" cellTotal" linha="0" celltotal="0" locked="true" typecell="total"></td>
                            <td tabindex="8" class=" cellIpi" linha="0" cellipi="0" locked="true" typecell="ipi"></td>
                            <td tabindex="9" class=" cellSt" linha="0" cellst="0" locked="true" typecell="st"></td>
                            <td tabindex="10" class=" cellValorTotal" linha="0" cellvalortotal="0" locked="true" typecell="valorTotal"></td>
                            <td tabindex="11" class=" cellAcrescimo" linha="0" cellacrescimo="0" locked="true" typecell="acrescimo"></td>
                            <td tabindex="12" class=" cellMva" linha="0" cellmva="0" locked="true" typecell="mva"></td>
                            <td tabindex="13" class=" cellIcms" linha="0" cellicms="0" locked="true" typecell="icms"></td>
                            <td tabindex="14" class=" cellIntra" linha="0" cellintra="0" locked="true" typecell="intra"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </main>
</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="ScriptExclusivo" runat="server">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
    <script src="/Scripts/MasterPage/jquery-confirm.js"></script>
    <asp:PlaceHolder runat="server">
        <%: Scripts.Render("~/bundles/calculaSt2JS") %>
    </asp:PlaceHolder>
</asp:Content>



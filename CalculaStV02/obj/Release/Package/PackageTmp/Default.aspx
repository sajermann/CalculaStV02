<%--<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CalculaStV02._Default" %>--%>
<%@ Page Title="Calcula ST" Language="C#" MasterPageFile="~/DF.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CalculaStV02._Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TituloPagina" runat="server">
    CalculaSt2
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="CssExclusivos" runat="server">
    <asp:PlaceHolder runat="server">
        <%: Styles.Render("~/bundles/calculaSt2CSS") %>
    </asp:PlaceHolder>
    <link href="/Css/MasterPage/jquery-confirm.css" rel="stylesheet">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <main>
        <div id="mainPrincipal">
            <div class="centralizar" style="display: no/ne;">
                <div class="divTableLancamentos" style="display: none;">
                   
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
        <div style="color: aquamarine;background: chocolate;max-width: 1200px;margin: auto;margin-top: 67px;">
            Essa página destina-se exclusivamente para <strong>demonstração</strong> do produto desenvolvido, não tendo nenhuma ligação com banco de dados, sendo assim a mesma não atualiza qualquer número automaticamente, o que pode ocasionar em informações desatualizadas e erros de cálculos tributários.
        </div>
    </main>
</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="ScriptExclusivo" runat="server">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"></script>
    <%--<script src="/Scripts/MasterPage/jquery-confirm.js"></script>--%>
    <asp:PlaceHolder runat="server">
        <%: Scripts.Render("~/bundles/calculaSt2JS") %>
    </asp:PlaceHolder>
</asp:Content>



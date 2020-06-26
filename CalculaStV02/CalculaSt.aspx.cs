using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;


namespace CalculaStV2
{
    public partial class CalculaSt2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            RecuperarDoBD();
        }

        [WebMethod]
        public static string saveInDb(string estadoOrigem, string estadoDestino, string destinoMaterial, string tipoCalculo, string clienteContribuinte, string simplesNacional, string obs)
        {
            string IdUsuario;
            IdUsuario = HttpContext.Current.Session["IdUsuario"].ToString();
            int IdPedido;
            //usuario = recuperarUsuario();
            try
            {
                SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sajerman_dashboard_faturamentoConnectionString"].ToString());
                string comandoSqlInsert = "insert into Table_CalculaStPedidos values ('" + IdUsuario + "', '" + estadoOrigem + "', '" + estadoDestino + "', '" + destinoMaterial + "', '" + tipoCalculo + "', '" + clienteContribuinte + "', '" + simplesNacional + "', '" + obs + "', '1')";
                SqlCommand sqlCmdInsert = new SqlCommand(comandoSqlInsert, con);
                con.Open();
                sqlCmdInsert.ExecuteNonQuery();
                //string comandoSqlLastId = "SELECT MAX(id) FROM table_calculastpedidos";
                string comandoSqlLastId = "SELECT SCOPE_IDENTITY()";
                SqlCommand sqlCmdLastId = new SqlCommand(comandoSqlLastId, con);
                IdPedido = Convert.ToInt32(sqlCmdLastId.ExecuteScalar());
                con.Close();
                return Convert.ToString(IdPedido);
            }
            catch { return "Deu erro função saveInDb - Code Behind"; }
        }
        
        [WebMethod]
        public static string saveItensInDb(int IdPedido, int id, string codigo, float quantidade, float preco, Boolean active)
        {
            string quantidadeConvertido = quantidade.ToString("#.####", CultureInfo.InvariantCulture);
            string precoConvertido = preco.ToString("#.####", CultureInfo.InvariantCulture);
            string activeConvertido = active == true ? "1" : "0";
            //try            {
            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sajerman_dashboard_faturamentoConnectionString"].ToString());

                dynamic comandoSqlInsert = "insert into Table_CalculaStItens values  ('" + IdPedido + "', '" + id + "', '" + codigo + "', '" + quantidadeConvertido + "', '" + precoConvertido + "', '" + activeConvertido + "')"; ;
                SqlCommand sqlCmdInsert = new SqlCommand(comandoSqlInsert, con);
                con.Open();
                sqlCmdInsert.ExecuteNonQuery();
                con.Close();
                return "Deu Certo função saveItensInDb - Code Behind";
            //}catch { return "Deu erro função saveItensInDb - Code Behind"; }
        }

        [WebMethod]
        public static string deleteItensInDb(int IdPedido)
        {
            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sajerman_dashboard_faturamentoConnectionString"].ToString());

            dynamic comandoSqlInsert = "delete from Table_CalculaStItens where pedido = " + IdPedido ;
            SqlCommand sqlCmdInsert = new SqlCommand(comandoSqlInsert, con);
            con.Open();
            sqlCmdInsert.ExecuteNonQuery();
            con.Close();
            return "Deu Certo função deleteItensInDb - Code Behind";
            //}catch { return "Deu erro função saveItensInDb - Code Behind"; }
        }

        /*  [WebMethod]
          public static string GerarBD(string bruno)
          {
              try
              {
                  RecuperarDoBD();
                  //ScriptManager.RegisterStartupScript(this.Page, Page.GetType(), "aparece", "loadRegisters()", true);
                  return "Deu Certo função GerarBD - Code Behind";
              }
              catch { return "Deu erro função GerarBD - Code Behind"; }
          }*/

        public void RecuperarDoBD()
          {

              SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sajerman_dashboard_faturamentoConnectionString"].ToString());
            //string comandoSqlSelect = "select * from Table_CalculaStPedidos";
            string comandoSqlSelect = "SELECT table_CalculaStPedidos.id, table_CalculaStPedidos.usuario," +
                                      "table_CalculaStPedidos.estadoOrigem," +
                                      "table_CalculaStPedidos.estadoDestino," +
                                      "table_CalculaStPedidos.destinoMaterial," +
                                      "table_CalculaStPedidos.tipoCalculo," +
                                      "table_CalculaStPedidos.clienteContribuinte," +
                                      "table_CalculaStPedidos.simplesNacional, " +
                                      "table_CalculaStPedidos.obs, " +
                                      "table_CalculaStPedidos.ativo, " +
                                      "table_usuarios.usuario as 'usuario_1' from table_CalculaStPedidos inner JOIN table_usuarios ON table_usuarios.id = table_CalculaStPedidos.usuario";
                       
              SqlCommand sqlCmd = new SqlCommand(comandoSqlSelect, con);
              con.Open();
              SqlDataReader resultadoPedidos = sqlCmd.ExecuteReader();
              string resultPedidos = "";
              if (resultadoPedidos.HasRows)
              {
                  while (resultadoPedidos.Read())
                  {
                      string id = resultadoPedidos["id"].ToString();
                      string usuario = resultadoPedidos["usuario_1"].ToString().TrimEnd();
                      string estadoOrigem = resultadoPedidos["estadoOrigem"].ToString();
                      string estadoDestino = resultadoPedidos["estadoDestino"].ToString();
                      string destinoMaterial = resultadoPedidos["destinoMaterial"].ToString().TrimEnd();
                      string tipoCalculo = resultadoPedidos["tipoCalculo"].ToString().TrimEnd();
                      string clienteContribuinte = resultadoPedidos["clienteContribuinte"].ToString().TrimEnd();
                      string simplesNacional = resultadoPedidos["simplesNacional"].ToString().TrimEnd();
                      string obs = resultadoPedidos["obs"].ToString().TrimEnd();
                      string ativo = resultadoPedidos["ativo"].ToString();
                    resultPedidos = resultPedidos + "{" + $"\"id\": \"{id}\", \"usuario\": \"{usuario}\", \"estadoOrigem\": \"{estadoOrigem}\", \"estadoDestino\": \"{estadoDestino}\", \"destinoMaterial\": \"{destinoMaterial}\", \"tipoCalculo\": \"{tipoCalculo}\", \"clienteContribuinte\": \"{clienteContribuinte}\", \"simplesNacional\": \"{simplesNacional}\", \"obs\": \"{obs}\", \"ativo\": \"{ativo}\"" + "},\n";
                  }
                resultPedidos = "[" + resultPedidos + "]";
            }
            
              else { }
              con.Close();
            ScriptManager.RegisterStartupScript(this.Page, Page.GetType(), "Teste", $"const relacaoPedidos = {resultPedidos};", true);
            
          }


        [WebMethod]
        public static object loadItensDb(int IdPedido)
        {

            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sajerman_dashboard_faturamentoConnectionString"].ToString());
            string comandoSqlSelect = "select * from Table_CalculaStItens WHERE pedido =" + IdPedido + "ORDER BY id";
            SqlCommand sqlCmd = new SqlCommand(comandoSqlSelect, con);
            con.Open();
            SqlDataReader resultadoItens = sqlCmd.ExecuteReader();
            string resultItens = "";
            if (resultadoItens.HasRows)
            {
                while (resultadoItens.Read())
                {
                    string id = resultadoItens["id"].ToString();
                    string codigo = resultadoItens["codigo"].ToString();
                    string quantidade = resultadoItens["quantidade"].ToString().Replace(',','.');
                    string preco = resultadoItens["preco"].ToString().Replace(',', '.');
                    string active = resultadoItens["active"].ToString().TrimEnd();
                    resultItens = resultItens + "{" + $"\"id\": \"{id}\", \"codigo\": \"{codigo}\", \"quantidade\": \"{quantidade}\", \"preco\": \"{preco}\", \"active\": \"{active}\"" + "},\n";
                }
                resultItens = "[" + resultItens + "]";//converter em json
                var result = JsonConvert.DeserializeObject(resultItens);
                //resultItens = resultItens;
                con.Close();
                    //object json = "[{ID: 1, Name: Abdullah},{ID: 2, Name: Baba}]";
                //object teste = JsonConvert.DeserializeObject(json);
                resultItens = JsonConvert.DeserializeObject(resultItens).ToString();
                //teste(resultItens);
                return resultItens;
            }
            else { return "Erro na função loadItensDb - Code Behind"; };
            
            //ScriptManager.RegisterStartupScript(this.Page, Page.GetType(), "Teste", $"const relacaoPedidos = {resultPedidos};", true);

        }
        protected void teste(string resultItens) {
            ScriptManager.RegisterStartupScript(this.Page, Page.GetType(), "Teste", $"var relacaoItens = {resultItens};", true);
        }
        [WebMethod]
        public static string permissionEditPed(string id, string permissaoSolicitada)
        {
            if (HttpContext.Current.Session["Tipo"].ToString() == "Administrador")
            {
                permissaoSolicitada = permissaoSolicitada + " Permitida";
                return permissaoSolicitada;
            }
            else
            {
                SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sajerman_dashboard_faturamentoConnectionString"].ToString());
                string comandoSqlSelect = "SELECT table_CalculaStPedidos.id, table_usuarios.usuario as 'NomeUsuario' from table_CalculaStPedidos inner JOIN table_usuarios ON table_usuarios.id = table_CalculaStPedidos.usuario where table_CalculaStPedidos.id = '" + id + "'";
                SqlCommand sqlCmd = new SqlCommand(comandoSqlSelect, con);
                con.Open();
                SqlDataReader resultadoPedidos = sqlCmd.ExecuteReader();
                //string resultadPedidos = "";
                string nomeUsuarioDessePedido = "";
                if (resultadoPedidos.HasRows)
                {
                    while (resultadoPedidos.Read())
                    {
                        nomeUsuarioDessePedido = resultadoPedidos["NomeUsuario"].ToString().TrimEnd();
                    }
                    con.Close();
                }
                if (nomeUsuarioDessePedido == HttpContext.Current.Session["Usuario"].ToString())
                {
                    permissaoSolicitada = permissaoSolicitada + " Permitida";
                    return permissaoSolicitada;
                }
                else { return "Erro na função permissionEditPed - Code Behind"; };
            }
        }
        [WebMethod]
        public static string DeletePed(int id)
        {
            try
            {
                SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sajerman_dashboard_faturamentoConnectionString"].ToString());
                string comandoSqlInsert = "update table_calculastpedidos set ativo = 0 where id = " + id;
                SqlCommand sqlCmdInsert = new SqlCommand(comandoSqlInsert, con);
                con.Open();
                sqlCmdInsert.ExecuteNonQuery();
                con.Close();
                return "Deu Certo função deletePed - Code Behind";
            }
            catch { return "Erro na função deletePed - Code Behind"; }
        }
        [WebMethod]
        public static object infosUser(string Referencia)
        {
            try
            {
                string infosUser = "{" + $"\"IdUsuario\": \"{HttpContext.Current.Session["IdUsuario"].ToString()}\"," +
                    $" \"Usuario\": \"{HttpContext.Current.Session["Usuario"].ToString()}\"," +
                    $" \"Nome\": \"{HttpContext.Current.Session["Nome"].ToString()}\"," +
                    $" \"Sobrenome\": \"{HttpContext.Current.Session["Sobrenome"].ToString()}\"," +
                    $" \"Celular\": \"{HttpContext.Current.Session["Celular"].ToString()}\"," +
                    $" \"Email\": \"{HttpContext.Current.Session["Email"].ToString()}\"," +
                    $" \"Imagem\": \"{HttpContext.Current.Session["Imagem"].ToString()}\"," +
                    $" \"ImagemBackground\": \"{HttpContext.Current.Session["ImagemBackground"].ToString()}\"," +
                    $" \"Tipo\": \"{HttpContext.Current.Session["Tipo"].ToString()}\"," +
                    $" \"Bio\": \"{HttpContext.Current.Session["Bio"].ToString()}\"," +
                    $" \"Theme\": \"{HttpContext.Current.Session["Theme"].ToString()}\"," +
                    $" \"ValidadeLicenca\": \"{HttpContext.Current.Session["ValidadeLicenca"].ToString()}\"" + "}";
                var infosUserJson = JsonConvert.DeserializeObject(infosUser).ToString();
                return infosUserJson;
            }catch { return "Erro na função infosUser - Code Behind"; }
        }
    }

}
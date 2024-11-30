let url = "https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/";
let urlFinal = "/municipios";
//limpando as variáveis antes de dar sequência na lógica
let nome = "";
let id;
let resultado = "";

function reiniciar() {
  console.log("Função reiniciar iniciada");
  url = "https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/";
  id = 0;
  console.log(url);
  resultado = "";
}

function pesquisar() {
  console.log("função pesquisar iniciada");
  let selecao = document.getElementById("mesoregiao").value;
  let section = document.getElementById("campoResultado");
  let listagemCidades = document.getElementById("lista_respostas");
  console.log(selecao);
  console.log(section);
  listagemCidades.innerHTML = "";

  if (selecao == "") {
    section.innerHTML = "<p>Favor selecionar uma mesoregião.</p>";
  } else {
    //corre o array procurando o ID da mesoregião
    for (let item of dados) {
      nome = item.nome.toUpperCase();
      id = item.id;

      if (item.id == selecao) {
        //demonstra o nome da região e o ID   --- Manter o trecho do ID enquanto não apresentamos os resultados do outro objeto.
        section.innerHTML = `<h2>Mesoregião de ${nome} e com o ID de ${id}.</h2>`;
        //altera a URL do objeto para a mesoregiao correta
        url += item.id + urlFinal;
        listagemCidades.innerHTML = "";
        //"visita" a url
        async function fetchData() {
          try {
            const response = await fetch(url);
            const data = await response.json();

            // Acessa os dados da variavel url
            if (Array.isArray(data)) {
              // Se os dados são um array de objetos
              data.forEach((vetor) => {
                resultado += `
                <li> ${vetor.nome} </li>                
                `;
                console.log(vetor.nome); // lista os nomes
              });
              listagemCidades.innerHTML += resultado;
              reiniciar();
            } else {
              // Se os dados são um único objeto
            }
          } catch (error) {
            console.error("Erro ao buscar os dados:", error);
            resultado += `
            <div class="item-resultado"><h2> Ocorreu um erro, desculpe. Sem cidades para demonstrar.</h2>
            </div >
            `;
            listagemCidades.innerHTML += resultado;
          }
        }

        fetchData();
      }
    }
  }
}

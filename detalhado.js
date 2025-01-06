const botaoPesquisar = document.getElementById("botaoPesquisar");
const campoPesquisa = document.getElementById("nomeCidade");

botaoPesquisar.addEventListener("click", pesquisarCidade);

//Manipulação do DOM para mostrar o resultado
const resultado = document.getElementById("resultado");

const url =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/31/municipios";

function pesquisarCidade(evento) {
  evento.preventDefault();
  let nomeCidade = campoPesquisa.value;

  if (nomeCidade === "") {
    alert("Favor digitar o nome de uma cidade.");
    return;
  }

  //Pegar o objeto de MG e varrer ele inteiro procurando a cidade
  async function fetchData() {
    try {
      const response = await fetch(url);
      const dados = await response.json();

      if (Array.isArray(dados)) {
        // Iterando o array de objetos
        for (let item of dados) {
          if (item.nome.includes(nomeCidade)) {
            //Se achar, mostrar o nome da cidade, mesorregião e micorregião dele.
            console.log(item);
            // console.log(item.microrregiao);
            console.log(item.microrregiao.mesorregiao.nome);
            return;
          }
        }
      }
    } catch (error) {
      //Se não achar, mostrar uma mensagem de erro.
      alert("Erro ao buscar os dados:", error);
    }
  }
  fetchData();
}

// TO DO LIST - 1.0
// 1. Refinar o campo de pesquisa para contemplar acentos e maiúsculas e minúsculas.
// 2. Mostrar o resultado na tela de forma organizada.
// 3. Mostrar o resultado manipulando o DOM e criando elementos HTML.

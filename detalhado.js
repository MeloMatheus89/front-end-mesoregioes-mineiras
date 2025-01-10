const botaoPesquisar = document.getElementById("botaoPesquisar");
const campoPesquisa = document.getElementById("nomeCidade");
const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/31/municipios";

botaoPesquisar.addEventListener("click", pesquisarCidade);

//Manipulação do DOM para mostrar o resultado
const resultado = document.getElementById("campoResultado");
function escreveNaTela(texto) {
  resultado.innerHTML = `<h3 class="principal__campo__resultado__subtitulo">Você procurou pela cidade de: ${texto.nome}</h3>
  <p class="principal__campo__resultado__texto"> Cidade de ${texto.nome} pertence a <strong>Mesorregião</strong> de ${texto.microrregiao.mesorregiao.nome} e a <strong>Microrregião</strong> de ${texto.microrregiao.nome}</p>
  <p class="principal__campo__resultado__texto"> <strong>Região Intermediária:</strong> ${texto["regiao-imediata"]["regiao-intermediaria"]["nome"]}</p>`;
}

//Implementar depois e melhorar como vai ser a saída do texto
function corrigeDigitacao(texto) {
  texto.value = texto.value.replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
}

function pesquisarCidade(evento) {
  evento.preventDefault();
  let nomeCidade = campoPesquisa.value;
  //nomeCidadeCorrigido era para ser o nome da cidade com a penas a primeira letra maiuscula
  //nomeCidadeCorrigido = corrigeDigitacao(nomeCidade.toLowerCase());

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
          if (item.nome === nomeCidade) {
            //Se achar, mostrar o nome da cidade, mesorregião e micorregião dele.
            escreveNaTela(item);
            console.log(item);

            // console.log(item.microrregiao);
            // console.log(item.regiao - imediata.regiao - intermediaria.nome);
            return;
          } else {
            resultado.innerHTML = `<h3> Cidade não encontrada</h3>
            <p> Favor validar o texto digitado e conferir acentuação, maiúsculas e minúsculas. </p>`;
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

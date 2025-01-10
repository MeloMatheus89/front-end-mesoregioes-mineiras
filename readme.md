![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

# Projeto pensado em ajudar a localizar as cidades de atendimento de acordo com a filial e mesoregião

Próximos passos:

1. Implementar a busca por microrregião baseado na cidade digitada no campo de busca;
2. Implementar tela de seleção de forma de procura;

## Buscador de Municípios por Mesorregião (IBGE)

**Descrição:**

Este projeto baseado em JavaScript, HTML5 e CSS3 interage com a API do IBGE para permitir a busca de acordo com a opção selecionada no banco de dados do IBGE. Possui duas funcionalidades:

1. O usuário seleciona uma mesorregião em um dropdown e o script exibe a lista de municípios correspondentes.
2. O usuário pode procurar pela cidade específica e receber ali na resposta a Mesorregião, Microrregião e região Imediata da cidade procurada.

**Funcionalidades:**

- **Consulta à API do IBGE:** Realiza requisições à API para obter dados geográficos.
- **Interface do Usuário:** Permite ao usuário selecionar a mesorregião desejada.
- **Exibição de Resultados:** Apresenta os municípios em uma lista formatada.
- **Procura por Cidades:** Apresenta os resultados de Mesorregião, microrregião e região imediata e entrega em um texto padronizado.

**Como Funciona: Seleção da Mesorregião**

1. **Seleção da Mesorregião:** O usuário escolhe uma mesoregião em uma lista suspensa.
2. **Consulta à API:** O script envia uma requisição à API do IBGE com o ID da mesoregião selecionada.
3. **Processamento dos Dados:** Os dados retornados pela API são processados para extrair os nomes dos municípios.
4. **Exibição dos Resultados:** Os nomes dos municípios são exibidos em uma lista na página.

**Como Funciona: Detalhado: Cidades**

1. **Procura pela cidade:** O usuário procura pela cidade no campo de pesquisa no menu superior.
2. **Consulta à API:** O script envia uma requisição à API do IBGE procurando na lista de cidades mineiras.
3. **Processamento dos dados:** Os dados são processados e organizados de forma a levantar resultados congruentes com a pesquisa feita.
4. **Exibição dos Resultados:** Os dados são apresentados na tela mediante uma formatação para garantir maior legibilidade da mesma.

   **Tecnologias Utilizadas:**

- **JavaScript:** Linguagem de programação para a lógica do script.
- **API do IBGE:** Fonte de dados para obter informações geográficas.
- **HTML:** Estrutura da página web.

**Observações:**

- **Dados:** O script depende de um array de dados (variável `dados`) que contém informações sobre as mesorregiões.
- **Async/Await:** Utiliza async/await para realizar requisições assíncronas à API.
- **Manipulação do DOM:** Interage com o DOM HTML para atualizar a página com os resultados.

**Possíveis Melhorias:**

- **Tratamento de Erros:** Implementar um tratamento de erros mais robusto para lidar com casos como falhas na conexão com a API.
- **Interface do Usuário:** Melhorar a interface do usuário com estilos CSS e elementos mais interativos.
- **Cache:** Implementar um mecanismo de cache para armazenar os resultados das consultas e evitar requisições desnecessárias.
- **Busca Completa:** Implementar uma busca completa que permita ao usuário digitar o nome da mesoregião ou município.

**Novas versões em breve.**
Aguardem melhorias na usabilidade das ferramentas.

# Desafio para a vaga de Desenvolvimento Fullstack

## Desafio 1 - API Graphql
A API funciona como um adaptador entre os clientes e a [API do StackOverflow](https://api.stackexchange.com/docs/questions). Ela recebe queries como requisições e responde com os campos desejados dentre os disponíveis. As bibliotecas utilizadas foram para alcançar este funcionamento foram:
* __axios__ - utilizada para fazer requisições à API do StackOverflow;
* __cors__ - utilizada para habilitar CROSS ORIGIN RESOURCE SHARING;
* __express__ - utilizada para roteamento;
* __express-graphql__ - utilizada para compatibilidade de requisições GraphQL num servidor HTTP;
* __graphql__ - utilizada para habilitar a criação de schemas, resolvers e interpretar as queries GraphQL.

A API retorna um erro caso não receba nenhuma tag na requisição `questions(tag: String!, limit: Int, score: Int, sort: String)`. Os valores padrão para os demais parâmetros são:
* limit: 10, trazendo no máximo 10 resultados por padrão;
* score: -1, trazendo perguntas com nota 0 ou mais;
* sort: activity, trazendo as perguntas com atividade mais recente primeiro.

## Desafio 2 - Front-end
O front-end envia requisições à API implementada no back-end conforme os campos preenchidos pelo usuário. As implementações foram baseadas [nesta interface](https://drive.google.com/file/d/1TeyJx9meFHKFH33VeqzfNeXcA0V_gsIu/view). Mais de uma tag pode ser enviada, desde que separadas por ',' ou ";". A tag "javascript" sempre é enviada. As bibliotecas utilizadas neste escopo do projeto foram:
* __react__ e dependências - utilizadas para criar interfaces de usuário dinâmicas;
* __axios__ - utilizada para fazer requisições à API implementada no Desafio 1;
* __enzyme__ e dependências - utilizadas para criar arquivos de testes;
* __node-sass__ - utilizada para compilar arquivos scss;
* __redux__ e dependências - utilizadas para gerenciar um estado global da aplicação.

### Execução
As seguintes instruções são para execução do projeto na máquina local. Além delas, o projeto pode ser acessado através [deste link](https://graphql-stack-frontend.herokuapp.com).
Após o download do projeto, na pasta `desafiofullstack`, execute o seguinte comando:

### `npm run install_all`

Este comando instalará todas as dependências necessárias, tanto para o back-end quanto para o front-end.

Para inicializar a aplicação, execute:

### `npm start`

Se o navegador não for iniciado automaticamente, a aplicação pode ser encontrada no endereço [http://localhost:3000](http://localhost:3000).

O Desafio 2 possui testes implementados. Para executá-los, navegue até a pasta `frontend` e rode-os, digitando:

### `cd frontend && npm test`

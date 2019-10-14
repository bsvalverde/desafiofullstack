const cors = require('cors');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
const resolver = {
  hello: () => {
    return 'hello world!';
  }
}

const server = express();

server.use(cors());
// server.use(express.json());
server.use('/', graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true
}));

server.listen(3030);

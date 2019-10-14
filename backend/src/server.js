const cors = require('cors');
const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./graphql/schemas');
const resolver = require('./graphql/resolvers');

const server = express();

server.use(cors());
// server.use(express.json());
server.use('/', graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true
}));

server.listen(3030);

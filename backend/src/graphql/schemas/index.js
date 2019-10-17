const { buildSchema } = require('graphql');

const scalar = require('./scalar');
const query = require('./query');
const owner = require('./owner');
const question = require('./question');

const schema = buildSchema([scalar, query, owner, question].join(' '));

module.exports = schema;

const { buildSchema } = require('graphql');

const query = require('./query');
const owner = require('./owner');
const question = require('./question');

const schema = buildSchema([query, owner, question].join(' '));

module.exports = schema;

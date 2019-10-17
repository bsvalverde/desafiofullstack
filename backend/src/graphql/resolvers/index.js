const date = require('./date');
const query = require('./query');
const owner = require('./owner');
const question = require('./question');

const resolver = {
  ...date,
  ...query,
  ...owner,
  ...question
};

module.exports = resolver;

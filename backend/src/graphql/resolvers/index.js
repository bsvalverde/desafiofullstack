const query = require('./query');
const owner = require('./owner');
const question = require('./question');

const resolver = {
  ...query,
  ...owner,
  ...question
};

module.exports = resolver;

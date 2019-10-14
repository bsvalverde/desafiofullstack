module.exports = `
  type Query {
    questions(tag: String!, limit: Int, score: Int, sort: String): [Question!]!
  }
`;

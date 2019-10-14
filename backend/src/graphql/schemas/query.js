module.exports = `
  type Query {
    hello: String
    questions: [Question!]!
  }
`;
    // questions(tag: String!, limit: Int, score: Int, sort: String): [Question!]!

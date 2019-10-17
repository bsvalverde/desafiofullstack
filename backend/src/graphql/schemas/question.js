module.exports = `
  type Question {
    tags: [String!]!
    owner: Owner!
    is_answered: Boolean!
    view_count: Int!
    accepted_answer_id: ID
    answer_count: Int!
    score: Int!
    last_activity_date: Date!
    creation_date: Date!
    last_edit_date: Date!
    question_id: ID!
    link: String!
    title: String!
  }
`;

module.exports = `
  type Question {
    tags: [String!]!
    owner: Owner!
    is_answered: Boolean!
    view_count: Int!
    accepted_answer_id: ID
    answer_count: Int!
    score: Int!
    last_activity_date: Int!
    creation_date: Int!
    last_edit_date: Int!
    question_id: ID!
    link: String!
    title: String!
  }
`;

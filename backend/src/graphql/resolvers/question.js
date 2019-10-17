module.exports = {
  Question: {
    tags: (parent) => parent.tags,
    owner: (parent) => parent.owner,
    is_answered: (parent) => parent.is_answered,
    view_count: (parent) => parent.view_count,
    accepted_answer_id: (parent) => parent.accepted_answer_id,
    answer_count: (parent) => parent.answer_count,
    score: (parent) => parent.score,
    last_activity_date: (parent) => parent.last_activity_date,
    creation_date: (parent) => parent.creation_date,
    last_edit_date: (parent) => parent.last_edit_date,
    question_id: (parent) => parent.question_id,
    link: (parent) => parent.link,
    title: (parent) => parent.title
  }
};

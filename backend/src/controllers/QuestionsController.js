const stackExchange = require('../services/stackExchange');

class QuestionsController {
  async index(args) {
    const { tag, limit, score, sort } = args;

    if (!tag) {
      throw new Error('Missing tag');
    }

    const params = {
      site: 'stackoverflow',
      tagged: tag,
      limit: limit || 10,
      score: score || -1,
      sort: sort || 'activity'
    };

    try {
      let questions = [];
      let page = 1;
      let has_more = true;

      while (questions.length < params.limit && has_more) {
        params.page = page;
        const response = await stackExchange.get('/questions', { params });
        let new_questions = response.data.items;
        new_questions = new_questions.filter(question => question.score > score);
        questions = questions.concat(new_questions);
        has_more = response.data.has_more;
        page = page + 1;
      }

      questions = questions.slice(0, params.limit);

      return questions;
    } catch (error) {
      return error;
    }
  }
};

module.exports = new QuestionsController();

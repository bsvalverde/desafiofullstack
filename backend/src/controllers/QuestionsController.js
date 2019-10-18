const stackExchange = require('../services/stackExchange');

class QuestionsController {
  async index(args) {
    const { tag, score, sort } = args;
    const limit = args.limit || 10;

    if (!tag) {
      throw new Error('Missing tag');
    }

    const params = {
      site: 'stackoverflow',
      tagged: tag,
      score: score || -1,
      sort: sort || 'activity'
    };

    try {
      let questions = [];
      let page = 1;
      let has_more = true;

      while (questions.length < limit && has_more) {
        params.page = page;
        const response = await stackExchange.get('/questions', { params });
        let new_questions = response.data.items;
        new_questions = new_questions.filter(question => question.score > score);
        questions = questions.concat(new_questions);
        has_more = response.data.has_more;
        page = page + 1;
      }

      questions = questions.slice(0, limit);

      return questions;
    } catch (error) {
      throw new Error(error.response.data.error_message);
    }
  }
};

module.exports = new QuestionsController();

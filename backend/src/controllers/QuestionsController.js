const stackExchange = require('../services/stackExchange');

class QuestionsController {
  async index(args) {
    const { tag, score, sort } = args;
    const limit = args.limit || Number.MAX_SAFE_INTEGER;

    if (!tag) {
      // return res.status(400).json('missing tag');
      return 'missing tag';
    }

    const params = {
      site: 'stackoverflow',
      tagged: tag,
    };
    sort && (params.sort = sort);

    try {
      let questions = [];
      let page = 1;
      let has_more = true;

      while (questions.length < limit && has_more) {
        params.page = page;
        const response = await stackExchange.get('/questions', { params });
        let new_questions = response.data.items;
        if (score) {
          new_questions = new_questions.filter(question => question.score > score);
        }
        questions = questions.concat(new_questions);
        has_more = response.data.has_more;
        page = page + 1;
      }

      questions = questions.slice(0, limit);

      return questions;
    } catch (error) {
      // return res.status(500).json(error);
      return error;
    }
  }
};

module.exports = new QuestionsController();

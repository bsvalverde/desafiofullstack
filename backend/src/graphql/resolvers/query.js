const QuestionsController = require('../../controllers/QuestionsController');

module.exports = {
  questions: (args) => QuestionsController.index(args)
};

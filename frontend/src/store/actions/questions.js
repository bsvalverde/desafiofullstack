import * as actionTypes from './actionTypes';

import api from '../../services/api';

const searchQuestionsStart = () => {
  return {
    type: actionTypes.SEARCH_QUESTIONS_START
  };
};

const searchQuestionsSuccess = (response) => {
  return {
    type: actionTypes.SEARCH_QUESTIONS_SUCCESS,
    questions: response.questions
  };
};

const searchQuestionsFail = (error) => {
  return {
    type: actionTypes.SEARCH_QUESTIONS_FAIL,
    error: error
  };
};

export const searchQuestions = (args) => {
  const { tag, limit, score, sort } = args;

  const queryParams = [];
  queryParams.push(`tag:"${['javascript'].concat(tag).join(';')}"`);
  if (limit !== '') {
    queryParams.push(`limit:${limit}`)
  }
  if (score !== '') {
    queryParams.push(`score:${score}`)
  }
  queryParams.push(`sort:"${sort}"`);

  return dispatch => {
    dispatch(searchQuestionsStart());
    const params = {
      query: `{questions(${queryParams.join(',')}){title}}`
    };
    console.log(params);
    api.get('/', { params })
      .then(response => {
        dispatch(searchQuestionsSuccess(response.data.data))
      })
      .catch(error => {
        dispatch(searchQuestionsFail(error));
      });
  };
};

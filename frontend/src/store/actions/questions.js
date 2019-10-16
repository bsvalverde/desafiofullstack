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

export const searchQuestions = () => {
  return dispatch => {
    dispatch(searchQuestionsStart());
    const params = {
      query: '{questions(tag:"javascript",limit:3){title}}'
    };
    api.get('/', { params })
      .then(response => {
        dispatch(searchQuestionsSuccess(response.data.data))
      })
      .catch(error => {
        dispatch(searchQuestionsFail(error));
      });
  };
};

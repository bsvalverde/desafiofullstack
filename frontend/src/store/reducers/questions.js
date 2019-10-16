import * as actionTypes from '../actions/actionTypes';

const initialState = {
  questions: [],
  isLoading: false,
  error: null
};

const searchQuestionsStart = (state, action) => {
  return {
    ...state,
    isLoading: true,
    error: null
  };
};

const searchQuestionsSuccess = (state, action) => {
  return {
    ...state,
    questions: action.questions,
    isLoading: false
  };
};

const searchQuestionsFail = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.error
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_QUESTIONS_START: return searchQuestionsStart(state, action);
    case actionTypes.SEARCH_QUESTIONS_SUCCESS: return searchQuestionsSuccess(state, action);
    case actionTypes.SEARCH_QUESTIONS_FAIL: return searchQuestionsFail(state, action);
    default: return state;
  }
};

export default reducer;

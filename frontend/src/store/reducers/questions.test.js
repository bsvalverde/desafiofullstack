import * as actionTypes from '../actions/actionTypes';

import reducer from './questions';

describe('questions reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      questions: [],
      isLoading: false,
      error: null
    };
  });


  it('should return the current state when no valid action is passed', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should set isLoading to true, error to null, and empty the list of questions on SEARCH_QUESTIONS_START', () => {
    const action = {
      type: actionTypes.SEARCH_QUESTIONS_START
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      questions: [],
      isLoading: true,
      error: null
    });
  });

  it('should set isLoading to false and receive the questions from the action on SEARCH_QUESTIONS_SUCCESS', () => {
    const questions = [1, 2, 3, 4, 5];
    const action = {
      type: actionTypes.SEARCH_QUESTIONS_SUCCESS,
      questions: questions
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      questions: questions
    });
  });

  it('should set isLoading to false and receive the error from the action on SEARCH_QUESTIONS_FAIL', () => {
    const error = 'mock error';
    const action = {
      type: actionTypes.SEARCH_QUESTIONS_FAIL,
      error: error
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      error: error
    });
  });
});

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

const QuestionsList = (props) => {
  useEffect(() => {
    props.onPageLoad();
  }, []);
  if (props.isLoading) {
    return <p>Loading...</p>;
  }
  if (props.error) {
    return <p>Error</p>;
  }
  return props.questions.map((question, index) => {
    return <p key={index}>{question.title}</p>
  });
};

const mapStateToProps = (state) => {
  return {
    questions: state.questions.questions,
    isLoading: state.questions.isLoading,
    error: state.questions.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPageLoad: () => dispatch(actions.searchQuestions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);

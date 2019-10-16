import React from 'react';
import { connect } from 'react-redux';

const QuestionsList = (props) => {
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

export default connect(mapStateToProps)(QuestionsList);

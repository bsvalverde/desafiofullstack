import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './QuestionsList.module.scss';

import QuestionSummary from '../QuestionSummary/QuestionSummary';
import Spinner from '../../UI/Spinner/Spinner';

export const QuestionsList = (props) => {
  if (props.isLoading) {
    return <Spinner />;
  }

  if (props.error) {
    return <p className={classes.Message}>Houve um erro. Por favor, tente novamente.</p>;
  }

  if (props.questions.length === 0) {
    return <p className={classes.Message}>Nada para mostrar.</p>
  }

  return (
    <Fragment>
      {
        props.questions.map((question) => {
          return <QuestionSummary key={question.question_id} question={question} />;
        })
      }
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.questions.questions,
    isLoading: state.questions.isLoading,
    error: state.questions.error
  };
};

export default connect(mapStateToProps)(QuestionsList);

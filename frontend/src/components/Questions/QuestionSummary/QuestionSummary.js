import React from 'react';

import classes from './QuestionSummary.module.scss';

const QuestionSummary = (props) => {
  const { question } = props;
  return (
    <div className={classes.QuestionSummary}>
      <div className={classes.Counters}>
        <div className={classes.Counter}>
          <label>Votos: {question.score}</label>
        </div>
        <div className={classes.Counter}>
          <label>Respostas: {question.answer_count}</label>
        </div>
        <div className={classes.Counter}>
          <label>Visitas: {question.view_count}</label>
        </div>
      </div>
      <div className={classes.Title}>
        <label>{question.title}</label>
        <label>{question.link}</label>
      </div>
      <div className={classes.Tags}>
        <p>{question.tags.map(tag => <label>{tag}</label>)}</p>
      </div>
      <div className={classes.Info}>
        <label>{question.creation_date}</label>
        <label>{new Date(question.creation_date * 1000).toString()}</label>
        <label>{question.owner.display_name}</label>
        <label>{question.owner.link}</label>
      </div>
    </div>
  );
};

export default QuestionSummary;

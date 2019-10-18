import React from 'react';

import classes from './QuestionSummary.module.scss';

const QuestionSummary = (props) => {
  const { question } = props;

  const answerCounterClasses = [classes.Counter];
  question.answer_count > 0 && (answerCounterClasses.push(classes.HighlightedCounter))

  const date = new Date(question.creation_date * 1000).toLocaleString('pt-br').split(' ')[0];
  return (
    <div className={classes.QuestionSummary}>
      <div className={classes.Counters}>
        <div className={classes.Counter}>
          <label>{question.score}</label>
          <br />
          <label className={classes.CounterIdentifier}>
            {Math.abs(question.score) === 1 ? 'ponto' : 'pontos'}
          </label>
        </div>
        <div className={answerCounterClasses.join(' ')}>
          <label>{question.answer_count}</label>
          <br />
          <label className={classes.CounterIdentifier}>
            {Math.abs(question.answer_count) === 1 ? 'resposta' : 'respostas'}
          </label>
        </div>
        <div className={classes.Counter}>
          <label>{question.view_count}</label>
          <br />
          <label className={classes.CounterIdentifier}>
            {Math.abs(question.view_count) === 1 ? 'visita' : 'visitas'}
          </label>
        </div>
      </div>
      <div className={classes.Title}>
        <a
          href={question.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {question.title}
        </a>
      </div>
      <div className={classes.Tags}>
        {question.tags.sort().map(tag => <label key={tag} className={classes.Tag}>{tag}</label>)}
      </div>
      <div className={classes.Info}>
        <label>Em <label>{date}</label> por <a
            href={question.owner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {question.owner.display_name}
          </a>
        </label>
      </div>
    </div>
  );
};

export default QuestionSummary;

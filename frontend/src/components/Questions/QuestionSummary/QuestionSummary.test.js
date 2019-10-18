import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import QuestionSummary from './QuestionSummary';
import classes from './QuestionSummary.module.scss';

configure({adapter: new Adapter()});

describe('<QuestionSummary />', () => {
  let wrapper;
  let question;

  beforeEach(() => {
    question = {
      answer_count: 0,
      creation_date: 1571304779,
      link: "https://stackoverflow.com/questions/58429393/the-value-in-url-and-queryparametrs-are-different",
      owner: {
        display_name: "user11917666",
        link: "https://stackoverflow.com/users/11917666/user11917666",
        reputation: 21
      },
      question_id: "58429393",
      score: 0,
      tags: ["javascript", "angularjs", "http", "url", "networking"],
      title: "The value in URL and QUERYPARAMETRS are different",
      view_count: 20
    };
    wrapper = shallow(<QuestionSummary question={question} />);
  });

  it('should not highlight anything if there are no answers', () => {
    question.answer_count = 0
    wrapper.setProps({ question: question });
    expect(wrapper.exists(`div.${classes.HighlightedCounter}`)).toBeFalsy();
  });

  it('should highlight the answer counter if there are answers', () => {
    question.answer_count = 3;
    wrapper.setProps({ question: question });
    expect(wrapper.exists(`div.${classes.HighlightedCounter}`)).toBeTruthy();
  });

  it('should show the text in the singular if the score is 1 or -1', () => {
    question.score = 1;
    wrapper.setProps({ question: question });
    expect(wrapper.contains(<label className={classes.CounterIdentifier}>ponto</label>)).toBeTruthy();
    question.score = -1;
    wrapper.setProps({ question: question });
    expect(wrapper.contains(<label className={classes.CounterIdentifier}>ponto</label>)).toBeTruthy();
  });

  it('should show the text in the plural if the score is not 1 or -1', () => {
    question.score = 0;
    wrapper.setProps({ question: question });
    expect(wrapper.contains(<label className={classes.CounterIdentifier}>pontos</label>)).toBeTruthy();
  });

  it('should show the text in the singular if there is only 1 answer', () => {
    question.answer_count = 1;
    wrapper.setProps({ question: question });
    expect(wrapper.contains(<label className={classes.CounterIdentifier}>resposta</label>)).toBeTruthy();
  });

  it('should show the text in the plural if there are 0 or 2+ answers', () => {
    question.answer_count = 0;
    wrapper.setProps({ question: question });
    expect(wrapper.contains(<label className={classes.CounterIdentifier}>respostas</label>)).toBeTruthy();
    question.answer_count = 5;
    wrapper.setProps({ question: question });
    expect(wrapper.contains(<label className={classes.CounterIdentifier}>respostas</label>)).toBeTruthy();
  });

  it('should show the text in the singular if there is only 1 view', () => {
    question.view_count = 1;
    wrapper.setProps({ question: question });
    expect(wrapper.contains(<label className={classes.CounterIdentifier}>visita</label>)).toBeTruthy();
  });

  it('should show the text in the plural if there are 0 or 2+ views', () => {
    question.view_count = 0;
    wrapper.setProps({ question: question });
    expect(wrapper.contains(<label className={classes.CounterIdentifier}>visitas</label>)).toBeTruthy();
    question.view_count = 5;
    wrapper.setProps({ question: question });
    expect(wrapper.contains(<label className={classes.CounterIdentifier}>visitas</label>)).toBeTruthy();
  });
});
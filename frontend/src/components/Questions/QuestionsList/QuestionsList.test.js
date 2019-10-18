import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { QuestionsList } from './QuestionsList';
import classes from './QuestionsList.module.scss';

import QuestionSummary from '../QuestionSummary/QuestionSummary';
import Spinner from '../../UI/Spinner/Spinner';

configure({adapter: new Adapter()});

describe('<QuestionsList />', () => {
  let wrapper;
  let questions;

  beforeEach(() => {
    questions = [];
    for (var i = 1; i <= 7; i++) {
      questions.push({
        question_id: i
      });
    }
    wrapper = shallow(<QuestionsList questions={questions} />);
  });

  it('should render a <Spinner /> element if the questions are loading', () => {
    wrapper.setProps({ isLoading: true });
    expect(wrapper.exists(Spinner)).toBeTruthy();
  });

  it('should not render a <Spinner /> element if the questions are not loading', () => {
    wrapper.setProps({ isLoading: false });
    expect(wrapper.exists(Spinner)).toBeFalsy();
  });

  it('should render a message if there was an error loading', () => {
    wrapper.setProps({ error: true });
    expect(wrapper.contains(
      <p className={classes.Message}>Houve um erro. Por favor, tente novamente.</p>
    )).toBeTruthy();
  });

  it('should render a message if there are no questions to show', () => {
    wrapper.setProps({ questions: [] });
    expect(wrapper.contains(
      <p className={classes.Message}>Nada para mostrar.</p>
    )).toBeTruthy();
  });

  it('should not render a message if there are questions to show', () => {
    expect(wrapper.exists(`p.${classes.Message}`)).toBeFalsy();
  });

  it('should render a <QuestionSummary /> element if there are questions to show', () => {
    expect(wrapper.exists(QuestionSummary)).toBeTruthy();
  });
});

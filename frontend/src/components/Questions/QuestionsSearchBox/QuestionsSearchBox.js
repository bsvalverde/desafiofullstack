import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

import classes from './QuestionsSearchBox.module.scss';

import GreenButton from '../../UI/GreenButton/GreenButton';
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';

const QuestionsSearchBox = (props) => {
  const [tagInput, setTagInput] = useState('');
  const [limitInput, setLimitInput] = useState('');
  const [scoreInput, setScoreInput] = useState('');
  const [sortInput, setSortInput] = useState('activity');

  const sendSearchRequest = () => {
    const args = {
      limit: limitInput,
      score: scoreInput,
      sort: sortInput
    };
    args.tag = tagInput
      .split(/[,;]+/g)
      .map(tag => tag.trim())
      .filter(tag => tag !== '');
    props.onSendRequest(args);
  };

  const sortOptions = ['activity', 'creation', 'votes', 'hot', 'week', 'month'];

  return (
    <div className={classes.QuestionsSearchBox}>
      <h2>Buscar na API</h2>
      <div className={classes.Row}>
        <div className={classes.Input}>
          <label>Tag</label>
          <Input
            onChange={event => setTagInput(event.target.value)}
            value={tagInput}
          />
        </div>
        <div className={classes.Input}>
          <label>Limit</label>
          <Input
            type='number'
            onChange={event => setLimitInput(event.target.value)}
            value={limitInput}
          />
        </div>
        <div className={classes.Input}>
          <label>Score</label>
          <Input
            type='number'
            onChange={event => setScoreInput(event.target.value)}
            value={scoreInput}
          />
        </div>
        <div className={classes.Input}>
          <label>Sort</label>
          <Select
            options={sortOptions}
            onChange={event => setSortInput(event.target.value)}
            value={sortInput}
          />
        </div>
      </div>
      <div className={classes.Row}>
        <div className={classes.Button}>
          <GreenButton onClick={sendSearchRequest}>
            Buscar
          </GreenButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendRequest: (args) => dispatch(actions.searchQuestions(args))
  };
};

export default connect(null, mapDispatchToProps)(QuestionsSearchBox);

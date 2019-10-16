import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

import classes from './QuestionsSearchBox.module.scss';

import GreenButton from '../../UI/GreenButton/GreenButton';
import Input from '../../UI/Input/Input';

const QuestionsSearchBox = (props) => {
  return (
    <div className={classes.QuestionsSearchBox}>
      <h2>Buscar na API</h2>
      <div className={classes.Row}>
        <div className={classes.Input}>
          <label>Tag</label>
          <Input />
        </div>
        <div className={classes.Input}>
          <label>Limit</label>
          <Input />
        </div>
        <div className={classes.Input}>
          <label>Score</label>
          <Input />
        </div>
        <div className={classes.Input}>
          <label>Sort</label>
          <Input />
        </div>
      </div>
      <div className={classes.Row}>
        <div className={classes.Button}>
          <GreenButton onClick={props.onClickButton}>Buscar</GreenButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickButton: () => dispatch(actions.searchQuestions())
  };
};

export default connect(null, mapDispatchToProps)(QuestionsSearchBox);

import React from 'react';

import classes from './QuestionSummary.module.scss';

const QuestionSummary = (props) => {
	return <p>{props.question.title}</p>;
};

export default QuestionSummary;

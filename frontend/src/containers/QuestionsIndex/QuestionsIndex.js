import React, { Fragment } from 'react';

import QuestionsList from '../../components/Questions/QuestionsList/QuestionsList';
import QuestionsSearchBox from '../../components/Questions/QuestionsSearchBox/QuestionsSearchBox';

const QuestionsIndex = () => {
  return (
    <Fragment>
      <QuestionsSearchBox />
      <QuestionsList />
    </Fragment>
  );
};

export default QuestionsIndex;

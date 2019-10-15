import React from 'react';

import './App.scss';

import Layout from './containers/Layout/Layout';
import QuestionsIndex from './containers/QuestionsIndex/QuestionsIndex';

const App = () => {
  return (
    <div>
      <Layout>
        <QuestionsIndex />
      </Layout>
    </div>
  );
}

export default App;

import React from 'react';
import Question from './components/Question';

const App = () => {
  const question: string[] = ['What is my name?', 'What is my favorite color?'];

  return (
    <div className='App'>
      <Question question={question} />
    </div>
  );
};

export default App;

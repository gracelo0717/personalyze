import react, { useState } from 'react';
import Question from './components/Question';

const App = () => {
  const [submit, setSubmit] = useState(false);

  const questions: string[] = [
    'What is my name?',
    'What is my favorite color?',
  ];

  const onSubmit = () => {
    setSubmit(true);
    console.log('clicked');
  };

  return (
    <div className='App'>
      <Question questions={questions} onClick={onSubmit} />
    </div>
  );
};

export default App;

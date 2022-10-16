import React, { useState } from 'react';
import Home from './components/Home/Home';
import Stars from './components/Stars/Stars';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Question from './components/Question/Question';
import Header from './components/Header/Header';
import './App.css';
import { getCities } from './firebase';
import { qTemplate, Constellations } from './components/constants';

function App() {
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const totalQuestions = 3;

  const goToNext = () => {
    setQuestion(question + 1);
  }

  const goBack = () => {
    setQuestion(question - 1);
  }

  console.log(qTemplate);

  const getQuestion = () => {

  }

  // console.log(getCities());

  return (
    <div className="App">
      <Stars />
      { question !== 0 && question !== totalQuestions + 1 &&
        <Header next={goToNext} back={goBack} />
      }
      {questions[question]}
      { question !== 0 &&
        <ProgressBar progress={((question - 1) / totalQuestions) * 100 } />
      }

    </div>
  );
}

export default App;

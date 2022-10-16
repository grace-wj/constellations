import React, { useState } from 'react';
import Home from './components/Home/Home';
import Stars from './components/Stars/Stars';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Question from './components/Question/Question';
import Header from './components/Header/Header';
import Result from './components/Result/Result';
import { qTemplate, Constellations } from './components/constants';
import './App.css';


function App() {
  const [question, setQuestion] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(10);


  const addResult = (result, weight) => {
    answers.push(result);
    setAnswers(answers);
    setScore(score + weight);
    goToNext();
  }

  const goToNext = () => {
    setQuestion(question + 1);
  }

  const goBack = () => {
    setQuestion(question - 1);
  }

  const getQuestion = () => {
    if (question >= 0 && question < qTemplate.length) {
      const q = qTemplate[question];
      return (
        <Question question={q.question} choices={q.choices} action={addResult} />
      )
    }
  }

  console.log(answers);

  return (
    <div className="App">
      <Stars />
      { question === 0 }
      {question < 0 && question < qTemplate.length ? <Home next={goToNext} /> : getQuestion()}
      {question >= 0 && <ProgressBar progress={Math.min((question / (qTemplate.length)) * 100, 100)} />}
      {question >= qTemplate.length && <Result result={Constellations[score]} /> }
    </div>
  );
}

export default App;

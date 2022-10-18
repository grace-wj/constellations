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
  const [scoreKeeper, setScoreKeeper] = useState([]);


  const addResult = (result, weight) => {
    answers.push(result);
    setAnswers(answers);
    setScore(score + weight);
    scoreKeeper.push(weight);
    setScoreKeeper(scoreKeeper);
    goToNext();
  }
  const removeResult = () => {
    console.log("remove result called")
    if (scoreKeeper.length > 0) {
      console.log("removeResult:/n")
      answers.pop();
      setAnswers(answers);
      let diff = scoreKeeper.pop();
      let newScore = score - diff;
      setScore(newScore);
      setScoreKeeper(scoreKeeper);  
      goBack();
    }
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
        <Question question={q.question} choices={q.choices} addResult={addResult} removeResult={removeResult} />
      )
    }
  }

  console.log("answers: ", answers);

  return (
    <div className="App">
      <Stars />
      { question < 0 && question < qTemplate.length ? <Home next={goToNext} /> : getQuestion() }
      { question >= 0 && <ProgressBar progress={Math.min((question / (qTemplate.length)) * 100, 100)} /> }
      { question >= qTemplate.length && <Result result={Constellations[score]} /> }
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyAlhKyRfuBnKQNuT8fXyP1pYHJkNOA3-sA",
  authDomain: "constellations-f3de9.firebaseapp.com",
  projectId: "constellations-f3de9",
  storageBucket: "constellations-f3de9.appspot.com",
  messagingSenderId: "697520192794",
  appId: "1:697520192794:web:4ec8e166928427b68f80a3",
  measurementId: "G-K2FV5T5H9V"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

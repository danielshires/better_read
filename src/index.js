import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MyLibrary from './containers/MyLibrary/MyLibrary';
import SearchPage from './containers/SearchPage/SearchPage'
import reportWebVitals from './reportWebVitals';
import DisplayBooks from './components/Books/DisplayBooks';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDB7kSLyJ7gr9tEIBW9uNnaYcjzUfg-Cxg",
  authDomain: "betterread-e967b.firebaseapp.com",
  projectId: "betterread-e967b",
  storageBucket: "betterread-e967b.appspot.com",
  messagingSenderId: "344077104484",
  appId: "1:344077104484:web:2721b859fbc3c40c2e7671",
  measurementId: "G-YVYBNR6XN3",
  databaseURL: "https://betterread-e967b-default-rtdb.asia-southeast1.firebasedatabase.app/",
}
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="books/:id" element={<DisplayBooks />} />
        <Route path="my-library" element={<MyLibrary />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

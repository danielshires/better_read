import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import ReadingList from './ReadingList';
import About from './About'
import reportWebVitals from './reportWebVitals';
import DisplayBooks from './components/Books/DisplayBooks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="books/:id" element={<DisplayBooks />} />
        <Route path="my-library" element={<ReadingList />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

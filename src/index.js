import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {console.log(process.env.PUBLIC_URL)}
        <Link to="/" />
        <Link to="/privacy" />
        <Link to="/terms" />
        <App />
      </BrowserRouter>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

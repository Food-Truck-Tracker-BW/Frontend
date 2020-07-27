// * dependencies:
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import { BrowserRouter as Router } from 'react-router-dom';


// * components:
import App from './App';



ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);



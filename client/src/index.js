// * dependencies:
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import { BrowserRouter as Router } from 'react-router-dom';


// * components:
import App from './App';



ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById('root')
);



// * dependencies:
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer/truckReducer';
import thunk from 'redux-thunk';

// * redux
// import { store } from './Store';

// * components:
import App from './App';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
 <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);



import React from 'react';
import { createStore } from 'redux';

 // * simple reducer for dev
 function reducer() {
    return {
      title: 'Hello world! I\'m in the Redux store!',
    }
  };

export const store = createStore(reducer)
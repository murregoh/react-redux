import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers/StoreReducer';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
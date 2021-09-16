import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureJobs from './store'

ReactDOM.render(
    <Provider store={configureJobs}>
      <App />
    </Provider>,
  document.getElementById('root')
)

reportWebVitals();

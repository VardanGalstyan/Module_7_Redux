import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { configureJobs, persistor } from '../src/redux/stores/index.js'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={configureJobs}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals();

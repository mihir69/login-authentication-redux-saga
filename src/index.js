import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import store from './Redux/Store/Store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

reportWebVitals();

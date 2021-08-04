import react from 'react';
import { Provider } from 'react-redux';

import Login from './Pages/Login/Login';
import './App.css';
import store from './Redux/Store/Store'


function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;

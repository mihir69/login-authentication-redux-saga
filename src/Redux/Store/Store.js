import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import {RootSaga} from '../Sagas/RootSaga';
import  RootReducer  from '../Reducer/RootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(RootSaga);

export default store;
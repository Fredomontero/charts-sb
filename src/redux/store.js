import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import rootReducer from './reducers/index';
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
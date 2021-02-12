import { combineReducers } from 'redux';
import data from './data_reducer';

const rootReducer = combineReducers({
  data: data
});

export default rootReducer;
import { put, call, take, fork } from "redux-saga/effects";
import { eventChannel } from 'redux-saga';
import { loadDataError, loadDataSuccess } from '../actions/data_actions';
import externalEventSource from './externalEvents';


export const requestData = () => {
  //Creates a channel for event sources other than Redux Store
  return eventChannel( emit => externalEventSource(emit));
}

export function* flow(){
    const channel = yield call(requestData);
    try{
      while(true){
        let data = yield take(channel);
        if(data.errors){
            yield put(loadDataError(data.errors[0].message));    
        }else{
            yield put(loadDataSuccess(data));
        }
      }
    }finally {
      console.log('External Source Event channel closed');
    }
}

export function* dataStreamSagas(){
  yield fork(flow);
}
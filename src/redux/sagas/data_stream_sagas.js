import { put, call, take, fork } from "redux-saga/effects";
import { eventChannel, END } from 'redux-saga';
import { updateSecondsSuccess, updateSecondsError } from '../actions/data_actions';


const countdown = (secs) => {
  console.log("INSIDE COUNTDOWN");
    return eventChannel( emit => {
      const iv = setInterval(() => {
        console.log("INSIDE SETINTERVAL");
        console.log('countdown', secs);
        secs -= 1;
        if(secs > 0){
          console.log("Greater than 0");
          emit(updateSecondsSuccess(secs));
        }else{
          emit(END);
        }
      }, 1000);
      return () => {
        console.log("CLEARING INTERVAL");
        clearInterval(iv);
      }
    });
}

function* flow(){
    const channel = yield call(countdown, 10);
    try{
      while(true){
        let seconds = yield take(channel);
        yield put(seconds);
        console.log(`CountDown ${seconds}`);
      }
    }finally {
      console.log('CountDown Terminated');
    }
}

export function* dataStreamSagas(){
    yield fork(flow);
}
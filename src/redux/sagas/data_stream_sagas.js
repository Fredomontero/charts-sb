import { put, call, take, fork } from "redux-saga/effects";
import { eventChannel, END } from 'redux-saga';
import { loadDataError, loadDataSuccess } from '../actions/data_actions';

const daysf = ["01", "11", "21"];
const dayst = ["10", "20", "30"];

const countdown = (secs) => {
    return eventChannel( emit => {
      const iv = setInterval(() => {
        if(secs < 3){
          emit({
            from: `2020-0${6 + Math.floor(secs/3)}-${daysf[secs%3]}`,
            to: `2020-0${6 + Math.floor(secs/3)}-${dayst[secs%3]}`,
          });
          secs += 1;
        }else{
          emit(END);
        }
      }, 1000);
      return () => {
        clearInterval(iv);
      }
    });
}

function* flow(){
    const channel = yield call(countdown, 0);
    try{
      while(true){
        let dates = yield take(channel);
        let response = yield fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${dates.from}&end=${dates.to}`);
        let data = yield response.json();
        if(data.errors){
            yield put(loadDataError(data.errors[0].message));    
        }else{
            console.log(data);
            yield put(loadDataSuccess(data));
        }
        //
      }
    }finally {
      console.log('CountDown Terminated');
    }
}

export function* dataStreamSagas(){
    yield fork(flow);
}
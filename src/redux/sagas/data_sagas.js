import { call, put, takeEvery, all } from 'redux-saga/effects';
import { loadDataSuccess, loadDataError } from '../actions/data_actions';

const apiUrl = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-01-01&end=2021-02-01';

function* loadData() {
  console.log("Inside LoadData ")
  try{
    let res = yield fetch(apiUrl);
    let resData = yield res.json();
    console.log("RESTDATA: ", resData);
    if(resData.errors){
        yield put(loadDataError(resData.errors[0].message));    
    }else{
        console.log(resData);
        yield put(loadDataSuccess(resData));
    }
  }catch(error){
    yield put(loadDataError(error));    
  }
}

function* loadDataRequest() {
  yield takeEvery('LOAD_DATA_REQUEST', loadData)
}

export function* dataSagas(){
  yield all([
      call(loadDataRequest),
  ]);
};
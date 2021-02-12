import { all, call } from 'redux-saga/effects';
import { dataSagas } from './data_sagas';

export default function* rootSaga(){
    yield all([
        call(dataSagas)
    ]);
};
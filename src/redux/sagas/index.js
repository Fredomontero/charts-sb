import { all, call } from 'redux-saga/effects';
import { dataSagas } from './data_sagas';
import { dataStreamSagas } from './data_stream_sagas';

export default function* rootSaga(){
    yield all([
        call(dataSagas),
        call(dataStreamSagas)
    ]);
};
import { all, call } from 'redux-saga/effects';
import { dataStreamSagas } from './data_stream_sagas';

export default function* rootSaga(){
    yield all([
        call(dataStreamSagas)
    ]);
};
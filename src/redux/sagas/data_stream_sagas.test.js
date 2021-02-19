import  { runSaga } from 'redux-saga';
import { flow, dataStreamSagas, requestData } from './data_stream_sagas';
import { take, call } from "redux-saga/effects";
import { eventChannel } from 'redux-saga';
import externalEventSource from './externalEvents';

// test('should load data for chart', async () => {
  
//   // dispatched actions
//   const dispatchedActions = [];
  
//   const fakeStore = {
//     getState: () => ({ data: {labels: [], values: []} }),
//     dispatch: action => dispatchedActions.push(action)
//   }

//   await runSaga(fakeStore, dataStreamSagas).done;
//   // console.log(dispatchedActions);

// })

// test('Some test', async () => {
//   const generator = flow();
//   const testChannel = eventChannel(emit => externalEventSource(emit));
//   let result = generator.next().value;
// })


describe('Testing eventChannel', () => {
  test('returns data', async () => {
    const testChannel = await requestData();
    let data = await take(testChannel);
    // console.log(data);
  });
});

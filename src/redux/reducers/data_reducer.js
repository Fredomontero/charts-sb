import * as type from '../types';

const initialState = {
  labels: [],
  values: [],
  seconds: 0
}

export default function dataReducer(state = initialState, action) {
  switch(action.type) {
    case type.LOAD_DATA_SUCCESS:
      let reqData = action.payload;
      let dataset = {labels: [], values: []};
      for(const property in reqData.bpi) {
        dataset.labels.push(`${property}`);
        dataset.values.push(reqData.bpi[property]);
      }
      return {
        ...state,
        labels: dataset.labels,
        values: dataset.values
      }
    case type.UPDATE_SECONDS_SUCCESS:
      console.log("SECONDS: ", action.payload);
      return {
        ...state,
        seconds: action.payload
      }
    default: 
      return state;
  }
}
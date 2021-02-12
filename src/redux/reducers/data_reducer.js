import * as type from '../types';

const initialState = {
  data: [],
}

export default function data(state = initialState, action) {
  switch(action.type) {
    case type.LOAD_DATA_SUCCESS:
      console.log("The data is: ", action.payload.bpi);
      let reqData = action.payload;
      let dataset = {labels: [], values: []};
      for(const property in reqData.bpi) {
        dataset.labels.push(`${property}`);
        dataset.values.push(reqData.bpi[property]);
      }
      return {
        ...state,
        data: dataset
      }
      default: 
        return state;
  }
}
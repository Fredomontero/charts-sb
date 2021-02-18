import * as type from '../types';

const initialState = {
  labels: [],
  values: []
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
        labels: [...state.labels, ...dataset.labels],
        values: [...state.values, ...dataset.values]
      }
    default: 
      return state;
  }
}
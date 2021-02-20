import * as type from '../types';

const initialState = {
  labels: [],
  values: [],
}

export default function errorReducer(state = initialState, action) {
  switch(action.type) {
    case type.LOAD_DATA_SUCCESS:
      let dataset = action.payload;
      console.log("DATASET: ", dataset);
      return {
        ...state,
        labels: [...state.labels, ...dataset.labels],
        values: [...state.values, ...dataset.values]
      }
    default: 
      return state;
  }
}
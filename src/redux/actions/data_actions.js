import * as type from '../types';

export const loadDataRequest = () => ({
  type: type.LOAD_DATA_REQUEST,
});

export const loadDataSuccess = (data) => ({
  type: type.LOAD_DATA_SUCCESS,
  payload: data
});

export const loadDataError = (error) => ({
  type: type.LOAD_DATA_FAIL,
  payload: error
});

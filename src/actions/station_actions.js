import axios from 'axios';
import { GET_DATA, GET_DATA_ERROR } from './types';

export const getData = () => {
  return dispatch => {
    axios.get('https://apis.is/petrol')
      .then((response) => {
        dispatch({ type: GET_DATA, payload: response.data });
      })
      .catch(() => {
        dispatch({ type: GET_DATA_ERROR });
      });
  };
};
export const sort = () => {
  console.log('sort');
};

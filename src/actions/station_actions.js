import axios from 'axios';
import { GET_DATA, GET_DATA_ERROR, SORT_BY_PRICE } from './types';

export const sortByPrice = (dispatch, stations) => {
  dispatch({ type: SORT_BY_PRICE, payload: stations });
};

export const getData = () => {
  return dispatch => {
    axios
      .get('https://apis.is/petrol')
      .then(response => {
        dispatch({ type: GET_DATA, payload: response.data });
        sortByPrice(dispatch, response.data.results);
      })
      .catch(() => {
        dispatch({ type: GET_DATA_ERROR });
      });
  };
};

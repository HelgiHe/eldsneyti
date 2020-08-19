import axios from 'axios';
import { LOADING, GET_DATA, GET_DATA_ERROR, SORT_BY_PRICE } from './types';

export const sortByPrice = (dispatch, stations) => {
  dispatch({ type: SORT_BY_PRICE, payload: stations });
};

export const sortByDistance = () => {
  // sort by distance,
};

export const getData = () => {
  return dispatch => {
    dispatch({ type: LOADING });
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

export const filterByDistance = stations => {
  return dispatch => {
    sortByPrice(dispatch, stations);
  };
};

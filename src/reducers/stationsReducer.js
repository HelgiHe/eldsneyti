import _ from 'lodash';

import {
  GET_DATA,
  GET_DATA_ERROR,
  SORT_BY_PRICE,
  USER_LOCATION,
} from '../actions';

const INITAL_STATE = {
  stations: [],
  loading: true,
  location: {},
};

export default function(state = INITAL_STATE, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        loading: false,
      };
    case GET_DATA_ERROR:
      return { ...state, loading: true };
    case SORT_BY_PRICE:
      return {
        ...state,
        stations: _.sortBy(action.payload, ['bensin95'], 'bensin95'),
      };
    case USER_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
}

import {
  GET_DATA,
  GET_DATA_ERROR,
  SORT_BY_PRICE,
  USER_LOCATION,
  LOADING,
} from '../actions';

const INITAL_STATE = {
  stations: [],
  loading: true,
  loadingLocation: true,
  location: { lat: 37.78825, long: -122.4324 },
  total: 0,
};

export default function(state = INITAL_STATE, action) {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case GET_DATA:
      return {
        ...state,
        loading: false,
      };
    case GET_DATA_ERROR:
      return { ...state, loading: false };
    case SORT_BY_PRICE:
      return {
        ...state,
        stations: action.payload,
        total: action.payload.length,
      };
    case USER_LOCATION:
      return { ...state, location: action.payload, loadingLocation: false };
    default:
      return state;
  }
}

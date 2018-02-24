import { GET_DATA, GET_DATA_ERROR } from '../actions';

const INITAL_STATE = {
  stations: {},
  loading: true,
};

export default function (state = INITAL_STATE, action) {
  switch (action.type) {
    case GET_DATA:
      console.log(action);
      return { ...state, stations: action.payload, loading: false };
    case GET_DATA_ERROR:
      return { ...state, loading: true };
    default:
      return state;
  }
}

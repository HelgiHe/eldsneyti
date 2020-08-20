import {
  SET_DISTANCE_FILTER,
  SET_GAS_TYPE,
  SET_SORT_BY,
} from '../actions/types';

const INITIAL_STATE = {
  distanceFilter: '30',
  gasType: '95',
  sortMethod: 'priceLow',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_DISTANCE_FILTER:
      return { ...state, distanceFilter: action.payload };
    case SET_GAS_TYPE:
      return { ...state, gasType: action.payload };
    case SET_SORT_BY:
      return { ...state, sortMethod: action.payload };
    default:
      return state;
  }
}

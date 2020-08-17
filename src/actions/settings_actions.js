import { SET_GAS_TYPE, SET_SORT_BY, SET_DISTANCE_FILTER } from './types';

export const setDistanceFilter = value => {
  return {
    type: SET_DISTANCE_FILTER,
    payload: value,
  };
};

export const setSelectSortMethod = method => {
  return {
    type: SET_SORT_BY,
    payload: method,
  };
};

export const setGasType = type => {
  return {
    type: SET_GAS_TYPE,
    payload: type,
  };
};

import { SET_GAS_TYPE, SET_SORT_BY } from './types';

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

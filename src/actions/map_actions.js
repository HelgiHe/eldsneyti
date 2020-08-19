// import axios from 'axios';
import { USER_LOCATION } from './types';

export const setLocation = location => {
  return {
    type: USER_LOCATION,
    payload: location,
  };
};

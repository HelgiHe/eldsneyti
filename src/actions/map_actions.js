// import axios from 'axios';
import { USER_LOCATION } from './types';

export const setLocation = location => {
  return {
    type: USER_LOCATION,
    payload: location,
  };
};

// export const getUserLocation = () => {
//   return dispatch => {
//     axios
//       .get('http://api.ipstack.com/')
//       .then(res => setLocation(res.data, dispatch))
//       .catch(err => console.log(err));
//   };
// };

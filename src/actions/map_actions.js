import axios from 'axios';
import { USER_LOCATION } from './types';

export const setLocation = (location, dispatch) => {
  dispatch({
    type: USER_LOCATION,
    payload: { latitude: location.latitude, longitude: location.longitude },
  });
};

export const getUserLocation = () => {
  return dispatch => {
    axios
      .get('https://freegeoip.net/json/')
      .then(res => setLocation(res.data, dispatch))
      .catch(err => console.log(err));
  };
};

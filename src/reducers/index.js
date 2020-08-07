import StationsReducer from './stationsReducer';
import SettingsReducer from './settingsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  allStations: StationsReducer,
  settings: SettingsReducer,
});

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistReducer(config, reducers);

const initialState = {};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));

export const persistor = persistStore(store);

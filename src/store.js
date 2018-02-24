import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import reducers from './reducers';

const config = {
  key: 'root',
  storage,
  // blacklist: ['password'],
  // whitelist: ['settings', 'form'],
};

const reducer = persistCombineReducers(config, reducers);

export default function configureStore(initialState = {}) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk),
  );

  const persistor = persistStore(store);
  return { persistor, store };
}

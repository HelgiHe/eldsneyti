// @flow

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './store';
import StationList from './components/StationsList';
import Ad from './components/Ad';

type Props = {};

export default class App extends Component<Props> {
  render() {
    // const SuperComponent = StationContainer(StationList);
    const { persistor, store } = configureStore();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Ad />
          <StationList />
        </PersistGate>
      </Provider>
    );
  }
}

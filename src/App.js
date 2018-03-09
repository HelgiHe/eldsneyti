// @flow

import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Provider } from 'react-redux';

import configureStore from './store';
import Stations from './screens/StationList';
import Map from './screens/Map';
import Settings from './screens/Settings';
import Tabs from './components/Tabs';

type Props = {};

export default class App extends Component<Props> {
  render() {
    const { persistor, store } = configureStore();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ScrollableTabView
            tabBarPosition="bottom"
            renderTabBar={() => <Tabs />}
          >
            <Stations tabLabel="home" />
            <Map tabLabel="map" />
            <Settings tabLabel="gear" />
          </ScrollableTabView>
        </PersistGate>
      </Provider>
    );
  }
}

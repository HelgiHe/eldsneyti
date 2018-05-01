// @flow

import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import configureStore from './store';
import Settings from './screens/Settings';
import Stations from './screens/StationList';
import Map from './screens/Map';

type Props = {};

export default class App extends Component<Props> {
  render() {
    const { persistor, store } = configureStore();
    const MainNavigator = TabNavigator(
      {
        Stöðvar: { screen: Stations },
        Kort: { screen: Map },
        Stillingar: { screen: Settings },
      },

      {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Stöðvar') {
              iconName = 'home';
            } else if (routeName === 'Kort') {
              iconName = 'map';
            } else if (routeName === 'Stillingar') {
              iconName = 'gear';
            }

            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Icon name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          style: {
            backgroundColor: '#233446',
          },
          activeTintColor: '#dea42d',
          inactiveTintColor: 'gray',
        },
        tabBarPosition: 'bottom',
        swipeEnabled: true,
      }
    );
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

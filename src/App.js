// @flow

import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { TabNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import configureStore from './store';
import Settings from './screens/Settings';
import Stations from './screens/StationList';
import Info from './screens/info';
import Map from './screens/Map';
import { secondaryColor, mainColor } from './styles';

type Props = {};

export default class App extends Component<Props> {
  render() {
    const { persistor, store } = configureStore();
    const MainNavigator = TabNavigator(
      {
        Stöðvar: { screen: Stations },
        Kort: { screen: Map },
        Stillingar: { screen: Settings },
        info: { screen: Info },
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
            } else if (routeName === 'info') {
              iconName = 'info';
            }
            return <Icon name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          style: {
            backgroundColor: mainColor,
          },
          activeTintColor: secondaryColor,
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

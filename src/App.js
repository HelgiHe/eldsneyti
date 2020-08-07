// @flow

import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { persistor, store } from './store';
import Settings from './screens/Settings';
import Stations from './screens/StationList';
import Info from './screens/info';
import Map from './screens/Map';
import { secondaryColor, mainColor } from './styles';
import { Text } from 'react-native-animatable';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const Tab = createBottomTabNavigator();

    // const { persistor, store } = configureStore();
    // const MainNavigator = TabNavigator(
    //   {
    //     Stöðvar: { screen: Stations },
    //     Kort: { screen: Map },
    //     Stillingar: { screen: Settings },
    //     info: { screen: Info },
    //   },

    //   {
    //     navigationOptions: ({ navigation }) => ({
    //       tabBarIcon: ({ tintColor }) => {
    //         const { routeName } = navigation.state;
    //         let iconName;
    //         if (routeName === 'Stöðvar') {
    //           iconName = 'home';
    //         } else if (routeName === 'Kort') {
    //           iconName = 'map';
    //         } else if (routeName === 'Stillingar') {
    //           iconName = 'gear';
    //         } else if (routeName === 'info') {
    //           iconName = 'info';
    //         }
    //         return <Icon name={iconName} size={25} color={tintColor} />;
    //       },
    //     }),
    //     tabBarOptions: {
    //       style: {
    //         backgroundColor: mainColor,
    //       },
    //       activeTintColor: secondaryColor,
    //       inactiveTintColor: 'gray',
    //     },
    //     tabBarPosition: 'bottom',
    //     swipeEnabled: true,
    //   }
    // );
    return (
      <Provider store={store}>
        <PersistGate loading={<View />} persistor={persistor}>
          <Text>akodjfl</Text>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={Stations} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

// @flow
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, TouchableOpacity } from 'react-native';
import {
  tabStyle,
  tabs,
  inActiveTabBarText,
  activeTabBarText,
} from './tabStyle';

type Props = {
  tabs: Array<string>,
  activeTab: string,
  goToPage: () => void,
  style: object,
};

class Tabs extends Component<Props> {
  constructor(props) {
    super(props);
    this.tabIcons = [];
  }

  render() {
    const labels = ['Heim', 'Kort', 'Settings'];
    return (
      <View style={[tabs, this.props.style]}>
        {this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity
              key={tab}
              style={tabStyle}
              onPress={() => this.props.goToPage(i)}
            >
              <Icon
                name={tab}
                size={30}
                color={this.props.activeTab === i ? '#0080bb' : '#67727B'}
                ref={icon => {
                  this.tabIcons[i] = icon;
                }}
              />
              <Text
                style={
                  this.props.activeTab === i
                    ? activeTabBarText
                    : inActiveTabBarText
                }
              >
                {labels[i]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export default Tabs;

// @flow
import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import Geolocation from '@react-native-community/geolocation';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

import { setDistanceFilter, setGasType, setSelectSortMethod } from '../actions';
import Ad from '../components/Ad';
import Styles from '../styles/settingsStyle';
import { ScreenContainer, headerContainer, mainColor } from '../styles/common';

type Props = {
  distanceFilter: string,
  sortMethod: string,
  gasType: string,
  sortMethod: string,
  setDistanceFilter: (val: string) => void,
  setSelectSortMethod: () => void,
  setGasType: () => void,
};

class Settings extends Component<Props> {
  constructor(props) {
    super(props);
    this.setSortMethod = this.setSortMethod.bind(this);
    this.state = { showModal: false };
  }
  componentDidMount() {
    check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)'
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable'
            );
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
          default:
            console.log('default');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  setSortMethod(itemValue) {
    this.props.setSelectSortMethod(itemValue);
  }
  showModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { distanceFilter, gasType, sortMethod } = this.props;

    return (
      <View style={ScreenContainer}>
        <View style={Styles.contentContainer}>
          <Ad />
          <View style={headerContainer}>
            <View style={Styles.headerContent}>
              <Text style={Styles.textStyle}>Stillingar</Text>
            </View>
          </View>
          <View style={Styles.typeContainer}>
            <Text style={Styles.sectionHeader}>Tegund?</Text>
            <View style={Styles.seperatedButtons}>
              <TouchableOpacity
                onPress={this.props.setGasType.bind(this, '95')}
                style={[
                  Styles.buttonTypeLeft,
                  gasType === '95'
                    ? Styles.selectedStyle
                    : Styles.notSelectedStyle,
                ]}
              >
                <Text
                  style={[
                    { marginRight: 30 },
                    gasType === '95'
                      ? Styles.selectedText
                      : Styles.notSelectedText,
                  ]}
                >
                  95 okt.
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.props.setGasType.bind(this, 'disel')}
                style={[
                  Styles.buttonTypeRight,
                  gasType === 'disel'
                    ? Styles.selectedStyle
                    : Styles.notSelectedStyle,
                ]}
              >
                <Text
                  style={[
                    { marginLeft: 30 },
                    gasType === 'disel'
                      ? Styles.selectedText
                      : Styles.notSelectedText,
                  ]}
                >
                  Diesel
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text>Sía eftir fjarlægð</Text>
              <Slider
                step={10}
                style={{ width: 250, height: 40 }}
                minimumValue={10}
                maximumValue={200}
                minimumTrackTintColor="#000"
                maximumTrackTintColor="#B8BDC0"
                onValueChange={val => this.props.setDistanceFilter(val)}
                value={parseInt(distanceFilter, 10)}
              />
              <Text>
                {parseInt(distanceFilter, 10) < 200
                  ? `${distanceFilter}km`
                  : 'Engin sía'}
              </Text>
            </View>
            <Text style={Styles.sectionHeader}>Röð Lista?</Text>
            <TouchableOpacity
              onPress={this.showModal.bind(this)}
              style={Styles.buttonStyle}
            >
              <Text style={Styles.boldWhiteText}>
                {sortMethod === 'company' ? 'Fyrirtæki' : 'Verð'}
              </Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="none"
            transparent
            visible={this.state.showModal}
          >
            <View style={Styles.modalContainer}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={this.closeModal.bind(this)}
              />
              <Animatable.View
                style={Styles.modalStyle}
                animation={Platform.OS === 'ios' ? 'slideInUp' : ''}
                duration={200}
                easing="ease-out"
              >
                <View style={Styles.modalContent}>
                  <TouchableOpacity onPress={this.closeModal.bind(this)}>
                    <Icon
                      name="times"
                      size={25}
                      color={mainColor}
                      style={{ margin: 10 }}
                    />
                  </TouchableOpacity>
                </View>
                <Picker
                  selectedValue={sortMethod}
                  onValueChange={itemValue =>
                    this.props.setSelectSortMethod(itemValue)
                  }
                >
                  <Picker.Item label="Verð" value="priceLow" />
                  <Picker.Item label="Fyrirtæki" value="company" />
                </Picker>
              </Animatable.View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ settings, allStations }) => {
  const { distanceFilter, gasType, sortMethod } = settings;
  const { loadingLocation } = allStations;

  return { gasType, distanceFilter, sortMethod, loadingLocation };
};

export default connect(mapStateToProps, {
  setDistanceFilter,
  setGasType,
  setSelectSortMethod,
})(Settings);

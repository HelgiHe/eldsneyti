// @flow
import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

import { setGasType, setSelectSortMethod } from '../actions';
import Ad from '../components/Ad';
import Styles from '../styles/settingsStyle';
import { ScreenContainer, headerContainer, mainColor } from '../styles/common';

type Props = {
  sortMethod: string,
  gasType: string,
  sortMethod: string,
  setSelectSortMethod: () => void,
  setGasType: () => void,
};

class Settings extends Component<Props> {
  constructor(props) {
    super(props);
    this.setSortMethod = this.setSortMethod.bind(this);
    this.state = { showModal: false };
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
    const { gasType, sortMethod } = this.props;
    console.log({ sortMethod });
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
              ></TouchableOpacity>
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
                  onValueChange={(itemValue, itemIndex) =>
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

//                   onValueChange={() => this.setSortMethod}

const mapStateToProps = ({ settings }) => {
  const { gasType, sortMethod } = settings;

  return { gasType, sortMethod };
};

export default connect(mapStateToProps, {
  setGasType,
  setSelectSortMethod,
})(Settings);

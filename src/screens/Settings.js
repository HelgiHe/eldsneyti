// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  Picker,
  Modal,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import { setGasType, setSelectSortMethod } from '../actions';
import Ad from '../components/Ad';
import Styles from '../styles/settingsStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#233446' }}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Ad />
          <View
            style={{
              width: '100%',
              height: 41.4,
              backgroundColor: '#233446',
              marginBottom: 30,
              justifyContent: 'flex-end',
            }}
          >
            <View
              style={{
                marginLeft: 25,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <Text style={Styles.textStyle}>Stillingar</Text>
            </View>
          </View>
          {/* <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 10,
            }}
          >
            Fjarlægð?
          </Text>
          <Text style={{}}>{this.state.distance}km.</Text>
        </View>
        <View>
          <Slider
            minimumValue={10}
            maximumValue={200}
            step={10}
            value={this.state.distance}
            onValueChange={value => this.setState({ distance: value })}
          />
        </View> */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              Tegund?
            </Text>
            <View
              style={{
                marginBottom: 40,
                flexDirection: 'row',
                borderColor: '#233446',
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
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
            <Text
              style={{
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              Röð Lista?
            </Text>
            <TouchableOpacity
              onPress={this.showModal.bind(this)}
              style={{
                padding: 10,
                backgroundColor: '#233446',
                width: 160,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: '700',
                }}
              >
                {sortMethod === 'company' ? 'Fyrirtæki' : 'Verð'}
              </Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="none"
            transparent
            visible={this.state.showModal}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                height: '60%',
                backgroundColor: 'rgba(0,0,0,0.35)',
                position: 'relative',
                justifyContent: 'flex-end',
              }}
              activeOpacity={1}
              onPress={this.closeModal.bind(this)}
            >
              <Animatable.View
                style={{
                  justifyContent: 'center',
                  height: '30%',
                  backgroundColor: '#FFFEFF',
                  borderColor: 'rgba(94, 94, 94, 0.3)',
                  borderTopWidth: 1,
                }}
                animation={Platform.OS === 'ios' ? 'slideInUp' : ''}
                duration={200}
                easing="ease-out"
              >
                <View
                  style={{ backgroundColor: '#fff', alignItems: 'flex-end' }}
                >
                  <Icon
                    name="times"
                    size={25}
                    color="#233446"
                    style={{ margin: 10 }}
                  />
                </View>
                <Picker
                  style={{}}
                  selectedValue={this.props.sortMethod}
                  onValueChange={this.setSortMethod}
                >
                  <Picker.Item label="Verð" value="priceLow" />
                  <Picker.Item label="Fyrirtæki" value="company" />
                </Picker>
              </Animatable.View>
            </TouchableOpacity>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { gasType, sortMethod } = settings;

  return { gasType, sortMethod };
};

export default connect(mapStateToProps, {
  setGasType,
  setSelectSortMethod,
})(Settings);

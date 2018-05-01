import React, { Component } from 'react';
import {
  View,
  Text,
  Slider,
  Picker,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { container } from '../styles';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { distance: 30, showModal: false };
  }
  showModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <View style={container}>
        <Text>Stillingar</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
        </View>
        <TouchableOpacity onPress={this.showModal.bind(this)}>
          <Text>Flokka eftir pikker</Text>
        </TouchableOpacity>
        <Modal animationType="slide" transparent visible={this.state.showModal}>
          <Picker
            style={{
              height: '40%',
              justifyContent: 'flex-end',
            }}
            selectedValue="alphabet"
            onValueChange={itemValue => console.log(itemValue)}
          >
            <Picker.Item label="A-Ö" value="alphabet" />
            <Picker.Item label="Fjarlægð" value="distance" />
            <Picker.Item label="Handahófi" value="random" />
          </Picker>
        </Modal>
      </View>
    );
  }
}

export default Settings;

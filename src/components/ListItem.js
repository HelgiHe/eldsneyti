// @flow
import React from 'react';
import { View, Text } from 'react-native';

import { listItemStyle } from '../styles';

export default function({
  name,
  company,
  price,
  discount,
}: {
  name: string,
  company: string,
  price: string,
  discount: string,
}) {
  return (
    <View style={listItemStyle}>
      <Text>{company}</Text>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
}

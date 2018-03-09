// @flow
import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from '../styles/listItem';

export default function({
  name,
  company,
  price,
  discount,
  currency,
}: {
  name: string,
  company: string,
  price: string,
  discount: string,
  currency: string,
}) {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{company}, </Text>
        <TextInput value={name} style={styles.inputStyle} maxLength={16} />
      </View>
      <View style={styles.textContainer}>
        <Text>{price} </Text>
        <Text>
          {discount !== null ? `(${discount}) ` : ''}
          {currency}
        </Text>
      </View>
    </View>
  );
}

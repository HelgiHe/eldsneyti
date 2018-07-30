// @flow
import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from '../styles/listItem';

export default function ({
  name,
  company,
  price,
  discount,
  currency,
  background,
  textColor,
}: {
    name: string,
    company: string,
    price: string,
    discount: string,
    currency: string,
    background: string,
    textColor: string,
  }) {
  return (
    <View
      style={[styles.listItemContainer,
      { backgroundColor: background }]}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, { color: textColor }]}>{company}, </Text>
        <TextInput
          editable={false}
          value={name}
          style={[styles.inputStyle,
          { color: textColor }]}
          maxLength={16}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.priceText, { color: textColor }]}>
          {price}
        </Text>
        <Text style={[styles.priceText, { color: textColor }]}>
          {discount !== null ? `(${discount}) ` : ''}
          {currency}
        </Text>
      </View>
    </View>
  );
}

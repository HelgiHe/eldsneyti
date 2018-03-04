// @flow

import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';

import { listStyle, container } from '../styles';
import ListItem from '../components/ListItem';
import Container from '../components/Container';
import Ad from '../components//Ad';

type Props = {
  stations: Array<object>,
};

function StationList(props: Props) {
  console.log(props);
  return (
    <View style={container}>
      <Ad />
      <ScrollView>
        <ListItem
          company="Fyrirtæki"
          price="verð"
          discount="m.Afls."
          name="staðs."
          currency=""
        />
        <FlatList
          style={listStyle}
          data={props.stations.stations}
          renderItem={({ item }) => {
            return (
              <ListItem
                company={item.company}
                price={item.bensin95}
                discount={item.bensin95_discount}
                name={item.name}
                currency="kr."
              />
            );
          }}
        />
      </ScrollView>
    </View>
  );
}

// wrap the compoennt in the Hoc to receive it's props
export default Container(StationList);

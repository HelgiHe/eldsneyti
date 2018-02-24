// @flow

import React from 'react';
import { ScrollView, FlatList } from 'react-native';

import { listStyle } from '../styles';
import ListItem from './ListItem';
import Container from './Container';

type Props = {
  stations: object,
};

function StationList(props: Props) {
  console.log(props);
  return (
    <ScrollView>
      <FlatList
        style={listStyle}
        data={props.stations.stations.results}
        renderItem={({ item }) => {
          return (
            <ListItem
              company={item.company}
              price={item.bensin95}
              discount={item.bensin95_discount}
              name={item.name}
            />
          );
        }}
      />
    </ScrollView>
  );
}

// wrap the compoennt in the Hoc to receive it's props
export default Container(StationList);

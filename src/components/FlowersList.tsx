import {FlatList} from 'react-native';
import React, {FC} from 'react';
import {FlowerType} from '../data';
import ListItem from './ListItem';

type Props = {
  flowers: FlowerType[];
};

const FlowersList: FC<Props> = ({flowers}) => {
  return (
    <FlatList
      data={flowers}
      renderItem={({item}) => <ListItem item={item} />}
      keyExtractor={item => item.name}
      numColumns={2}
      contentContainerStyle={{marginTop: 10}}
    />
  );
};

export default FlowersList;

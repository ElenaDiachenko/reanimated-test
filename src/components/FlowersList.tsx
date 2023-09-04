import {FlatList} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {FlowerType} from '../data';
import ListItem from './ListItem';
import {useNavigation} from '@react-navigation/native';

type Props = {
  flowers: FlowerType[];
};

const FlowersList: FC<Props> = ({flowers}) => {
  const [scroll, setScroll] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    if (scroll) {
      // console.log('scrolling');
      navigation.setOptions({
        headerShown: false,
      });
    } else {
      navigation.setOptions({
        headerShown: true,
      });
    }
  }, [navigation, scroll]);

  return (
    <FlatList
      data={flowers}
      onScroll={r => setScroll(r.nativeEvent.contentOffset.y)}
      renderItem={({item}) => <ListItem item={item} />}
      keyExtractor={item => item.name}
      numColumns={2}
      contentContainerStyle={{marginTop: 10}}
    />
  );
};

export default FlowersList;

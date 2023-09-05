import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {FlowerType} from '../data';
import ListItem from './ListItem';
import {useNavigation} from '@react-navigation/native';
import {palette} from '../styles';

type Props = {
  flowers: FlowerType[];
};

const FlowersList: FC<Props> = ({flowers}) => {
  const [scroll, setScroll] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const flatListRef = useRef<FlatList | null>(null);

  const navigation = useNavigation();

  useEffect(() => {
    if (scroll > 10) {
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
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {atTop ? null : (
          <TouchableOpacity
            style={styles.goToTopButton}
            activeOpacity={1}
            onPress={() => {
              flatListRef.current?.scrollToOffset({animated: true, offset: 0});
            }}>
            <Text style={styles.goToTopText}>&#10224;</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        ref={ref => (flatListRef.current = ref)}
        data={flowers}
        onScroll={event => {
          const offsetY = event.nativeEvent.contentOffset.y;
          setScroll(offsetY);
          setAtTop(offsetY <= 100);
        }}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => item.name}
        numColumns={2}
        contentContainerStyle={{marginVertical: 10}}
      />
    </View>
  );
};

export default FlowersList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    zIndex: 1,
  },

  goToTopButton: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    backgroundColor: palette.footerTextColor,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goToTopText: {
    color: palette.whiteColor,
    fontWeight: 'bold',
    fontSize: 30,
  },
});

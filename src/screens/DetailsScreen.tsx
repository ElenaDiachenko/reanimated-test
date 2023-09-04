import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {commonStyles, palette} from '../styles';
import {HomeStackScreenProps} from '../navigation/types';

const DetailsScreen = ({route}: HomeStackScreenProps<'Details'>) => {
  const {item} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Animated.Image
        sharedTransitionTag={`image-${item.id}`}
        source={{uri: item?.imageUrl}}
        style={styles.image}
      />
      <Animated.Text
        sharedTransitionTag={`title-${item.id}`}
        style={[commonStyles.subTitle, styles.name]}>
        {item.name}
      </Animated.Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{item.description}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.whiteColor,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    objectFit: 'cover',
  },
  name: {
    marginHorizontal: 16,
    marginTop: 10,
  },
  detailsContainer: {
    margin: 10,
  },

  detailsText: {
    fontSize: 16,
    lineHeight: 20,
  },
});

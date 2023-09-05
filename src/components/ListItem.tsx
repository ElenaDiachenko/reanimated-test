import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Animated from 'react-native-reanimated';
import {FlowerType} from '../data';
import {commonStyles, palette} from '../styles';
import {useNavigation} from '@react-navigation/native';

type Props = {
  item: FlowerType;
};

const ListItem: FC<Props> = ({item}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('Details', {item})}>
      <Animated.Image
        sharedTransitionTag={`image-${item.id}`}
        source={{uri: item.imageUrl}}
        style={styles.image}
      />
      <Animated.Text
        sharedTransitionTag={`title-${item.id}`}
        style={[commonStyles.subTitle, styles.name]}>
        {item.name}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default ListItem;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: palette.whiteColor,
    borderRadius: 5,
    elevation: 2,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    backgroundColor: palette.footerTextColor,
  },
  name: {
    marginTop: 4,
  },
});

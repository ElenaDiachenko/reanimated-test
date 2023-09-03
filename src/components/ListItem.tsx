import {StyleSheet, Text, Pressable, Image} from 'react-native';
import React, {FC} from 'react';
import {FlowerType} from '../data';
import {commonStyles, palette} from '../styles';

type Props = {
  item: FlowerType;
};

const ListItem: FC<Props> = ({item}) => {
  return (
    <Pressable style={styles.container}>
      <Image source={{uri: item.imageUrl}} style={styles.image} />
      <Text style={[commonStyles.text, styles.name]}>{item.name}</Text>
    </Pressable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
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

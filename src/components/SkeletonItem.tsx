import {View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  withDelay,
  withSequence,
  withRepeat,
} from 'react-native-reanimated';
import {styles} from './ListItem';
import {palette} from '../styles';

const SkeletonItem = () => {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withDelay(1000, withTiming(0.5, {duration: 1000})),
        withTiming(1, {duration: 1000}),
      ),
      -1,
      false,
    );
  }, [opacity]);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.image, {opacity}]} />
      <Animated.View
        style={{
          height: 20,
          width: '50%',
          backgroundColor: palette.footerTextColor,
          marginTop: 8,
          opacity,
        }}
      />
    </View>
  );
};

export default SkeletonItem;

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import {commonStyles, palette} from '../styles';

type Props = {
  title: string;
};
const OFFSET = 40;

const CustomHeader = ({title}: Props) => {
  const navigation = useNavigation();
  const isHome = title === 'Home';

  const translateX = useSharedValue(0);

  const navigateBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };
  const handlePress = () => {
    translateX.value -= OFFSET;
  };

  const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withDelay(
            1,
            withTiming(
              translateX.value,
              {duration: 300, easing: Easing.linear},
              isFinished => {
                if (isFinished && translateX.value !== 0) {
                  runOnJS(navigateBack)();
                }
              },
            ),
          ),
        },
      ],
    };
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        justifyContent: isHome ? 'center' : 'space-between',
      }}>
      {!isHome && (
        <Animated.View style={[arrowStyle]}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={commonStyles.title}>&#8666;</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      <Text style={commonStyles.title}>{title}</Text>
      <View style={{width: 30}} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.accentColor,
    padding: 10,
  },
});

import {ActivityIndicator, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {commonStyles, palette} from '../styles';
import {FlowerType, flowers as flowersData} from '../data';
import {FlowersList} from '../components';

const HomeScreen = () => {
  const [flowers, setFlowers] = useState<FlowerType[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFlowers(flowersData);
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <View style={commonStyles.centeredContainer}>
        <ActivityIndicator color={palette.accentColor} size={'large'} />
      </View>
    );
  }
  return (
    <View style={{paddingBottom: 16}}>
      {flowers && <FlowersList flowers={flowers} />}
    </View>
  );
};

export default HomeScreen;

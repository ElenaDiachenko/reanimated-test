import {ActivityIndicator, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {palette} from '../styles';
import {HomeStackScreenProps} from '../navigation/types';
import {FlowerType, flowers as flowersData} from '../data';
import {FlowersList} from '../components';

const HomeScreen = ({navigation}: HomeStackScreenProps<'Home'>) => {
  const [flowers, setFlowers] = useState<FlowerType[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFlowers(flowersData);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View>
      {isLoading && (
        <ActivityIndicator color={palette.accentColor} size={'large'} />
      )}
      {flowers && <FlowersList flowers={flowers} />}
      {/* <Text>HomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {id: 1})}
      /> */}
    </View>
  );
};

export default HomeScreen;

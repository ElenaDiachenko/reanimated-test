import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

import {FlowerType, flowers as flowersData} from '../data';
import {FlowersList, SkeletonItem} from '../components';

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
      <FlatList
        data={Array(10)}
        renderItem={() => <SkeletonItem />}
        numColumns={2}
        contentContainerStyle={{marginVertical: 10}}
      />
    );
  }
  return <>{flowers && <FlowersList flowers={flowers} />}</>;
};

export default HomeScreen;

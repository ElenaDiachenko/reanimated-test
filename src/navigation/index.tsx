import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';
import {HomeStackNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Group>
      <Stack.Screen name="Home" component={Screens.HomeScreen} />
      <Stack.Screen name="Details" component={Screens.DetailsScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;

import React from 'react';
import {getHeaderTitle} from '@react-navigation/elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';
import {HomeStackNavigatorParamList} from './types';
import {CustomHeader} from '../components';
const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      // eslint-disable-next-line react/no-unstable-nested-components
      header: ({route, options}) => {
        const title = getHeaderTitle(options, route.name);
        return <CustomHeader title={title} />;
      },
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
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

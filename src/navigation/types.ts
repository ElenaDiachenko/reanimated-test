import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FlowerType} from '../data';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Details: {
    item: FlowerType;
  };
};

export type HomeStackScreenProps<T extends keyof HomeStackNavigatorParamList> =
  {
    navigation: NativeStackNavigationProp<HomeStackNavigatorParamList, T>;
    route: RouteProp<HomeStackNavigatorParamList, T>;
  };

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackNavigatorParamList {}
  }
}

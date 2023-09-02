import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Details: {
    id: number;
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

import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../styles';
import {HomeStackScreenProps} from '../navigation/types';

const HomeScreen = ({navigation}: HomeStackScreenProps<'Home'>) => {
  return (
    <View style={commonStyles.centeredContainer}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {id: 1})}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

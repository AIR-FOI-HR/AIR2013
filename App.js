import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import AppNavigator from './src/navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {
  render(){
      return (
        <AppNavigator />
      );
  }
};

const styles = StyleSheet.create({

});


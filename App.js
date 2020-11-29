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

<<<<<<< HEAD
const App = ()  => {
  return (
    
    <View style={
      {
        backgroundColor: "#000000",
        height: 500
      }
    }>
      <AppNavigator/>
    
    </View>
  );
=======
export default class App extends React.Component {
  render(){
      return (
        <AppNavigator />
      );
  }
>>>>>>> Home
};

const styles = StyleSheet.create({

});


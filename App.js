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

const App = ()  => {
  return (
    
    <View style={
      {
        backgroundColor: "#000000",
        height: 500
      }
    }>
      <AppNavigator/>
    
      <Text style={
        {
          color: "#ffffff",
          fontSize: 50,
          marginTop: 20,
          marginLeft: 20
        }
      }>App.js screen</Text>

    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;

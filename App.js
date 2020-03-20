/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screen ---------------------------

import Home from './Screen/Users/Home';
import NewActivity from './Screen/Users/NewActivity'

import {Text} from 'react-native'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} 
          options={{headerShown:false}}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
};



export default App;

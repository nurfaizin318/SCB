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
import MyTab from './Component/MyList';

//REDUX============
import {Provider} from 'react-redux';
import Store from './Redux/Store/Store'

// Screen  =============

import Home from './Screen/Users/Home';
import NewActivity from './Screen/Users/NewActivity';
import TabUsers from './Screen/Users/TabUsers'

import {View,TouchableOpacity,Text} from 'react-native'
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          
          <Stack.Screen name="Home" component={TabUsers} 
          options={{headerShown:false}}/>
          </Stack.Navigator>
          
      </NavigationContainer>
      </Provider>
  );
};



export default App;

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




//REDUX============
import {Provider} from 'react-redux';
import Store from './Redux/Store/Store'

// Screen  =============
import Insert from './Screen/Users/Insert'
import Home from './Screen/Users/Home';
import NewActivity from './Screen/Users/NewActivity';
import Loader from './Screen/Loader'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <Provider store={Store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Loader" component={Loader} 
          options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={Home} 
          options={{headerShown:false}}/>
          <Stack.Screen name="NewActivity" component={NewActivity} 
          options={{headerShown:false}}/>
           <Stack.Screen name="Insert" component={Insert} 
          options={{headerBackTitle:"back",headerTintColor:"#1e272e",headerStyle:{backgroundColor:"#2bcbba",}}}
          />
          </Stack.Navigator>
      </NavigationContainer>
      </Provider>

  );
};



export default App;

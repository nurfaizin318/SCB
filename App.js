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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {TouchableOpacity,View, LayoutAnimation} from 'react-native'


//REDUX============
import {Provider} from 'react-redux';
import Store from './Redux/Store/Store'

// Screen  =============
import Insert from './Screen/Users/Insert'
import Home from './Screen/Users/Home';
import Library from './Screen/Users/Library';
import Loader from './Screen/Loader'
import Search from './Screen/Users/Search'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{style:{backgroundColor:"#2C3A47",borderTopWidth:0},activeTintColor:"#ee5253",showLabel:false}} >
      <Tab.Screen name="Home" component={Home}  options={{tabBarIcon:({color})=>
      <FontAwesome5 name="home" size={20} color={color} />}}/>
      <Tab.Screen name="Search" component={Search} options={{tabBarIcon:({color})=>
      <FontAwesome5 name="search" size={20} color={color} />}}/>
      <Tab.Screen name="Library" component={Library} options={{tabBarIcon:({color})=>
      <FontAwesome5 name="paste" size={20} color={color} />}}/>
      <Tab.Screen name="Insert" component={Insert}  options={{tabBarIcon:({color})=>
       <View style={{width:60,height:60,borderRadius:90,backgroundColor:"#2C3A47",top:-10,elevation:4}}>
         <TouchableOpacity style={{alignItems:"center",justifyContent:"center",flex:1}}>
        <FontAwesome5 name="location-arrow" size={20} color={color} />
      </TouchableOpacity>
       </View>}}/>
    
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <Provider store={Store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Loader" component={Loader} 
          options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={MyTabs} 
          options={{headerShown:false}}/>
        
          </Stack.Navigator>
      </NavigationContainer>
      </Provider>

  );
};



export default App;

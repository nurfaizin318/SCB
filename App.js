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

import {
  View,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      style:{backgroundColor:"#2C3A47",borderTopWidth:0},showLabel:false,activeTintColor:'white',inactiveTintColor:'#7f8c8d'
      
    }}
    screenOptions={({route})=>
    ({ tabBarIcon:({color,size})=>{
      if(route.name === 'Home'){
          return <View ><Text style={{fontSize:16,color:color}}>Home</Text></View>
      }
      else if(route.name === 'Insert') {
        return <View style={{height:65,width:65,backgroundColor:'#2c3e50',justifyContent:"center",alignItems:"center",borderRadius:40,borderWidth:5,borderColor:'#1e272e',top:-15}}>
                    <Text style={{fontSize:30,color:color}}>+</Text>
               </View>
      }
      else if(route.name === 'Library') {
        return <View >
                    <Text style={{fontSize:16,color:color}}>Library</Text>
               </View>
      }
    } 
  })}
    
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Insert" component={Insert} />
      <Tab.Screen name="Library" component={NewActivity} />

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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {TouchableOpacity,View, SafeAreaView} from 'react-native'


//REDUX============
import {Provider} from 'react-redux';
import Store from './Redux/Store/Store';

// Screen  =============
import Insert from './Screen/Users/Insert';
import Home from './Screen/Users/Home';
import Library   from './Screen/Users/Library';
import Loader from './Screen/Loader';
import Search from './Screen/Users/Search';
import Login from './Screen/Users/Login';
import Edit from './Screen/Users/Edit';
import {Dark} from './Utils/';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs(props) {
  return (
    <Tab.Navigator  tabBarOptions={{style:{backgroundColor:Dark.black20,borderTopWidth:0,elevation:10},activeTintColor:"#ee5253"}}
    >
      <Tab.Screen name="Home" component={Home}  options={{tabBarIcon:({color})=>
        <FontAwesome5 name="home" size={20} color={color} />}}
      />
      <Tab.Screen name="Search" component={Search} options={{tabBarIcon:({color})=>
        <FontAwesome5 name="search" size={20} color={color} />}}
      />
      <Tab.Screen name="Library" component={Library} options={{tabBarIcon:({color})=>
       <FontAwesome5 name="paste" size={20} color={color} />}}
       />
      <Tab.Screen name="Insert" component={Insert}  options={{tabBarIcon:({color}) =>
        
        <FontAwesome5 name="location-arrow" size={20} color={color} />
      }}/>
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <Provider store={Store} >
     <SafeAreaView
      style={{ flex: 1}}
      >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Loader" component={Loader} 
          options={{headerShown:false}}
          />

          <Stack.Screen name="Home" component={MyTabs} 
          options={{headerShown:false}}
          />

           <Stack.Screen name="Edit" component={Edit} 
          options={{headerShown:true,headerTitleAlign:"center",
          headerStyle:{backgroundColor:Dark.black30,},
          headerTintColor:"white"}}
           />

        <Stack.Screen name="Login" component={Login} 
          options={{headerShown:false}}
          />

          </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
      </Provider>
     
  );
};



export default App;

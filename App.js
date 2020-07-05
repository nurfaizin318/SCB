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

import { SafeAreaView} from 'react-native'

// REDUX ============

import {Provider} from 'react-redux';
import { store , persisStore } from './Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';

// Screen  =============
import Insert from './Screen/Users/Insert';
import Home from './Screen/Users/Home';
import Library from './Screen/Users/Library';
import Loader from './Screen/Loader';
import List from './Screen/Users/List';
import Login from './Screen/Users/Login';
import Edit from './Screen/Users/Edit';
import InsertOrganitation from './Screen/Users/insertOrganitation'
import {Dark} from './Utils/';
import insertOrganitaion from './Screen/Users/insertOrganitation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs(props) {
  console.disableYellowBox=true
  return (
    <Tab.Navigator  tabBarOptions={{style:{backgroundColor:Dark.black30,borderTopWidth:0,elevation:10},activeTintColor:"#ee5253"}}
    >
      <Tab.Screen name="Home" component={Home}  options={{tabBarIcon:({color})=>
        <FontAwesome5 name="home" size={20} color={color} 
        />
      }}
      />
      <Tab.Screen name="List" component={List} options={{tabBarIcon:({color})=>
        <FontAwesome5 name="list" size={20} color={color} />}}
      />
      <Tab.Screen name="Library" component={Library} options={{tabBarIcon:({color})=>
       <FontAwesome5 name="paste" size={20} color={color} />}}
       />
      <Tab.Screen name="Insert" component={InsertOrganitation}  options={{tabBarIcon:({color}) =>
        
        <FontAwesome5 name="location-arrow" size={20} color={color} />
      }}
      />
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <Provider store={store} >
         <PersistGate loading={null} persistor={persisStore}>
              <SafeAreaView
                style={{ flex: 1}}
                >
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Loader">

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
         </PersistGate>
      </Provider>
     
  );
};



export default App;

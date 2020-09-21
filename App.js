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
import { decode, encode } from 'base-64';
import { SafeAreaView } from 'react-native'

// REDUX ============

import { Provider } from 'react-redux';
import { store, persisStore } from './Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';

// Screen  =============

import Insert from './Screen/Users/Insert';
import Home from './Screen/Users/Home';
import Library from './Screen/Users/Library';
import Loader from './Screen/Loader';
import List from './Screen/Users/List';
import Login from './Screen/Login';
import Edit from './Screen/Users/Edit';
import LibraryDetail from "./Screen/Users/LibraryDetail"


import HomeAdmin from "./Screen/Admin/HomeAdmin"
import AddUser from "./Screen/Admin/AddUser";
import UserList from "./Screen/Admin/UserList"
import AddDataUser from "./Screen/Admin/AddDataUser";
import Report from "./Screen/Admin/Report";
import UserProfil from "./Screen/Admin/UserProfile";
import ReportList from "./Screen/Admin/ReportList"
import ReportDetail from "./Screen/Admin/ReportDetail"

// import InsertOrganitation from './Screen/Users/insertOrganitation'
import { Dark } from './Utils/';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
if (!global.btoa) { global.btoa = encode }

if (!global.atob) { global.atob = decode }
console.disableYellowBox = true;
function MyTabs(props) {

  return (

    <Tab.Navigator tabBarOptions={{ style: { backgroundColor: Dark.black30, borderTopWidth: 0, elevation: 10 }, activeTintColor: "#ee5253" }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color }) =>
          <FontAwesome5 name="home" size={20} color={color}
          />
      }}
      />
      <Tab.Screen name="List" component={List} options={{
        tabBarIcon: ({ color }) =>
          <FontAwesome5 name="list" size={20} color={color} />
      }}
      />
      <Tab.Screen name="Library" component={Library} options={{
        tabBarIcon: ({ color }) =>
          <FontAwesome5 name="paste" size={20} color={color} />
      }}
      />
      <Tab.Screen name="Insert" component={Insert} options={{
        tabBarIcon: ({ color }) =>

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
          style={{ flex: 1 }}
        >
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Loader">

              <Stack.Screen name="Loader" component={Loader}
                options={{ headerShown: false }}
              />


              <Stack.Screen name="Home" component={MyTabs}
                options={{ headerShown: false }}
              />

              <Stack.Screen name="Edit" component={Edit}
                options={{
                  headerShown: true, headerTitleAlign: "center",
                  headerStyle: { backgroundColor: Dark.black30, },
                  headerTintColor: "white"
                }}
              />
                <Stack.Screen name="LibraryDetail" component={LibraryDetail}
                options={{
                  headerShown: true, headerTitleAlign: "center",headerTitle:"Library Detail",
                  headerStyle: { backgroundColor: "grey", },
                  headerTintColor: "white"
                }}
              />

              <Stack.Screen name="Login" component={Login}
                options={{ headerShown: false }}
              />

              <Stack.Screen name="HomeAdmin" component={HomeAdmin}
                options={{ headerShown: false }}
              />

              <Stack.Screen name="AddUser" component={AddUser}
                options={{
                  headerShown: true, headerTitleAlign: "center",headerTitle:"Add User",
                  headerStyle: { backgroundColor: "grey", },
                  headerTintColor: "white"
                }}
              />
              <Stack.Screen name="UserList" component={UserList}
                options={{
                  headerShown: true, headerTitleAlign: "center",headerTitle:"User List",
                  headerStyle: { backgroundColor:"grey", },
                  headerTintColor: "white"
                }}
              />
              <Stack.Screen name="AddDataUser" component={AddDataUser}
                options={{
                  headerShown: true, headerTitleAlign: "center",headerTitle:"Add Data User",
                  headerStyle: { backgroundColor:"grey", },
                  headerTintColor: "white"
                }}
              />
                <Stack.Screen name="Riport" component={Report}
                options={{
                  headerShown: true, headerTitleAlign: "center",headerTitle:"Report",
                  headerStyle: { backgroundColor:"grey", },
                  headerTintColor: "white"
                }}
              />
               <Stack.Screen name="UserProfile" component={UserProfil}
                options={{
                  headerShown: true, headerTitleAlign: "center",headerTitle:"User Profile",
                  headerStyle: { backgroundColor:"grey", },
                  headerTintColor: "white"
                }}
              />
              <Stack.Screen name="ReportList" component={ReportList}
                options={{
                  headerShown: true, headerTitleAlign: "center",headerTitle:"Report List",
                  headerStyle: { backgroundColor:"grey", },
                  headerTintColor: "white"
                }}
              />
                <Stack.Screen name="ReportDetail" component={ReportDetail}
                options={{
                  headerShown: true, headerTitleAlign: "center",headerTitle:"Report Detail",
                  headerStyle: { backgroundColor:"grey", },
                  headerTintColor: "white"
                }}
              />



            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>

  );
};



export default App;

import React,{Fragment} from 'react';
import {View ,Text,StyleSheet,TouchableOpacity,StatusBar,Dimensions, ShadowPropTypesIOS} from 'react-native';
import {useSelector,useDispatch } from 'react-redux'
import Home from './Home';
import MyTab from '../../Component/MyTab';
import NewActivity from './NewActivity'

 const TabUsers = () =>{ 
 const Screen = useSelector(state=>state.TabReducer.Screen);
 const dispatch = useDispatch();

        return (
          
        <Fragment>

            <StatusBar backgroundColor="#1e272e" tintColor="light"  />
            <View style={{flex:1,justifyContent:'center',alignItems:"center",backgroundColor:'#1e272e'}}>
              {Screen == 'Home' ? <Home /> : <NewActivity />}
                
                <MyTab />
            </View>
        </Fragment>
             
             )

        }



export default TabUsers;

const styles = StyleSheet.create({

})
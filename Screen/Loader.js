import React,{Fragment,useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {Dark} from '../Utils'

import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    ActivityIndicator
} from 'react-native';


const Loader = (props) =>
    {
        const status = useSelector(state=>state.AuthReducer.auth);

     useEffect(()=>{    
        getData = async()=>{
            if(status == 'isLogin'){
                props.navigation.replace('Home')
            }
            else{
                props.navigation.replace('Login')
            }
        }
        getData();
    },[])
       return ( 
        <Fragment >         
           <StatusBar backgroundColor={Dark.black20} />
            <View style={styles.container}>
                <ActivityIndicator  color={Dark.lightGreen} size={60}/>
                 <View style={styles.text}>
                <Text style={{color:'gray'}}>from :</Text>
                <Text style={{fontSize:20,color:'#eb4d4b',letterSpacing:10}}>SCB</Text>
           </View>
            </View>
          
         </Fragment>

            )

    }
export default Loader;

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:Dark.black20,
        justifyContent:'center',
        alignItems:"center"
    },
    image:{
        width:90,
        height:90,

    },
    text:{
        top:250,
        fontSize:20,
        color:'#eb4d4b',
        justifyContent:'center',
        alignItems:'center'
    }
})
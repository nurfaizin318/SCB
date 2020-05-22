import React,{Fragment,useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';

const Loader = (props) =>
    {

       

        const dispatch = useDispatch();
     useEffect(()=>{    
        getData = async()=>{
            const fetch = await AsyncStorage.getItem('Data');
            const fetchData = await JSON.parse(fetch);
            await fetchData != null ? dispatch({type:"FETCH_DATA",payload:fetchData}) : null;
            await props.navigation.navigate("Home");

            
        }
        getData();
    },[])
       return ( 
        <Fragment >         
           <StatusBar backgroundColor="#1e272e" />
            <View style={styles.container}>
                <Image source={require('../Assets/Image/loader.gif')} 
                    style={styles.image}/>
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
        backgroundColor:'#1e272e',
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
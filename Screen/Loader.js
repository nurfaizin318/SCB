import React,{Fragment,useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
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
        const isLogin = useSelector(state=>state.AuthReducer.auth);
        const status = useSelector(state=>state.AuthReducer.status);
        const dispatch = useDispatch()
     useEffect(()=>{    

        getData = async()=>{
            if(isLogin == 'isLogin'){
                if(status == "user"){
                    props.navigation.navigate("Home")
                }
                if(status == "admin"){
                    props.navigation.navigate("HomeAdmin")
                }
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
                <ActivityIndicator  color={Dark.lightGreen} size={40}/>
                 <View style={styles.text}>
                 <Text style={{color:'gray'}}>from :</Text>
       <Text style={{color:'gray'}}>{status}</Text>
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
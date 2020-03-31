import React,{Fragment,useEffect} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';

const load = (props) =>{
    
    setTimeout(()=>{
        props.navigation.navigate("Home")
    },3000)
}
const Loader = (props) =>

    {
     useEffect(()=>{
         load(props);
     })
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
import React,{Fragment} from 'react';
import Styles from '../../Styles/Styles'

import {View ,Text,StyleSheet,TouchableOpacity,StatusBar,Dimensions} from 'react-native';


 const NewActivity  = () => 
    {


        const height =Dimensions.get('window').height;
     return (
        <Fragment>
            <StatusBar backgroundColor="#1e272e" tintColor="light"  />
            <View style={{height:height/1.1,justifyContent:'center',alignItems:"center",backgroundColor:'#1e272e'}}>
                <Text style={{fontSize:30,color:'white'}}>new Acitivy Screen</Text>
            </View>
        </Fragment>
             )

    }

export default NewActivity;

const styles = StyleSheet.create({

})
import React from 'react';
import {Modal,StyleSheet,View,Dimensions} from 'react-native';
import Styles from '../Styles/Styles';

const MyModal = () =>
    {
    const height =Dimensions.get('window').height; 

        return(
        <View style={{...Styles.container,height:height/1.1}}>
             <Modal style={Styles.modal} visible={true}/>   
        </View>
        )
    }

export default MyModal; 
const Styles = StyleSheet.create({
    Container:{
        flex:1,
        width:'95%',


    }
})
import React from 'react';
import {View,
    Text,
    Dimensions,
    }

from 'react-native'

const CardLibrary = (props)=>{

    const width = Dimensions.get(window).width;
    const height = Dimensions.get(window).height;

    return (

        <View style={styles.container(width,height)}>

        </View>
    )
}

export default CardLibrary;

const styles ={
    container :()=>{
        return {
        width: width/1.1,
        height: height/2.2,
        backgroundColor:"red",
        }
    }
}
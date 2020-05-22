import React from 'react';
import {View,
    Text,
    Dimensions,
    }

from 'react-native'

const CardRecent = (props)=>{

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (

        <View style={styles.container(width,height)}>

        </View>
    )
}

export default CardRecent;

const styles ={
    container :(width,height)=>{
        return {
        width: width/3.5,
        height: height/4.5,
        backgroundColor:"red",
        marginTop:10,
        marginLeft:10,
        borderRadius:5,
        }
    }
}
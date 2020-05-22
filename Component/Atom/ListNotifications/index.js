import React from 'react';
import {View,
    Text,
    Dimensions,
    }

from 'react-native';

const ListNotification = (props)=>{

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (

        <View style={styles.container(width,height)}>

        </View>
    )
}

export default ListNotification;

const styles ={

    container : (width,height)=>{
        return {
        width: width/1.1,
        backgroundColor:"red",
        height:height/9,
        borderRadius:5,
        margin:5,


        

        }
    }
}
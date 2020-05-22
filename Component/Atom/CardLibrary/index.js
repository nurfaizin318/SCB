import React from 'react';
import {View,
    Text,
    Dimensions,
    }

from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Dark } from '../../../Utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardLibrary = (props)=>{

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (

        <View style={styles.container(width,height)}>
            <View style={styles.header.container}>
                 <View style={styles.header.time}>

                 </View>
                <View style={styles.header.options}>
                    <TouchableOpacity style={styles.header.icon} onPress={props.onDelete}>
                         <FontAwesome5 name="trash" size={18} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.header.icon}>
                         <FontAwesome5 name="pen" size={18} color="white" /> 
                    </TouchableOpacity>
                    
                </View>
            </View>
            
        </View>
    )
}

export default CardLibrary;

const styles ={
    container :(width,height)=>{
        return {
        width: width/1.1,
        height: height/3.2,
        backgroundColor:Dark.black10,
        marginTop:20,
        elevation:5,
        borderRadius:7
        }
    },
    header:{
        container:{
            width:"100%",
            height:30,
            flexDirection:'row',
            justifyContent:"space-between"
            
        },
        time:{
            width:'70%',
            height:30,
            backgroundColor:Dark.lightOrange,
            borderBottomRightRadius:30
        },
        options:{
            width:'35%',
            height:30,
            backgroundColor:Dark.black10,
            flexDirection:"row",
            paddingHorizontal:20,
            justifyContent:"space-between",
            
           
        },
        icon:{
            width:40,
            height:30,
            justifyContent:"center",
            alignItems:'center'
        }
    },
   
}
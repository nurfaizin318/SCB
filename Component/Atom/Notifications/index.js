import React from 'react';
import {View,
    Text,
    Dimensions,
    }

from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dark} from '../../../Utils';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';



const ListNotification = (props)=>{

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const name = useSelector(state => state.AuthReducer.name)
    const time = moment().format('dddd ,MMM Do YYYY');

    return (

        <View style={{...styles.container(width,height),backgroundColor:props.name == name && props.type == time ? Dark.black40 : Dark.black30}}>
            <View style={styles.left}>
                 <FontAwesome5 name="bell" size={25} color="gray" />
            </View>
            <View style={styles.center.container}>
    <Text style={styles.center.textName}>{props.name}</Text>
    <Text style={styles.center.textNotif}>{props.type}</Text>
            </View>
           
        </View>
    )
}

export default ListNotification;

const styles ={

    container : (width,height)=>{
        return {
        width: width/1.05,
        backgroundColor:"red",
        height:height/9,
        borderRadius:5,
        margin:3,
        elevation:3,
        justifyContent:"center",
        flexDirection:"row",
        }
    },
    left:{
        width:"20%",
        height:70,
        justifyContent:"center",
        marginVertical:5,
        marginRight:2,
        alignItems:"center"
    },
    center:{
        container:{
            width:"70%",
            height:70,
            marginHorizontal:2,
            marginVertical:5,
            justifyContent:"center",
            padding:10,

        },
        textName:{
            color:"white",
            fontSize:18,
        },
         textNotif:{
            color:"tomato",
            fontSize:14,
            marginTop:5
         }


    },
   
}
import React from 'react';
import {View,
    Text,
    Dimensions,
    }

from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dark} from '../../../Utils'

const ListNotification = (props)=>{

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (

        <View style={styles.container(width,height)}>
            <View style={styles.left}>
                 <FontAwesome5 name="bell" size={25} color="gray" />
            </View>
            <View style={styles.center.container}>
                <Text style={styles.center.textName}>Name</Text>
                <Text style={styles.center.textNotif}>Notifications</Text>
            </View>
            <View style={styles.right}>
                {/* <FontAwesome5 name="times" size={25} color="white" /> */}
            </View>
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
        backgroundColor:Dark.black20,
        elevation:3,
        justifyContent:"center",
        flexDirection:"row",
        }
    },
    left:{
        width:70,
        height:70,
        justifyContent:"center",
        marginVertical:5,
        marginRight:2
    },
    center:{
        container:{
            width:"40%",
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
            fontSize:15,
            marginTop:5
         }


    },
    right:{
        width:70,
        height:70,
        marginLeft:2,
        marginVertical:5,
        alignItems:"flex-end",
        justifyContent:"center",


    }
}
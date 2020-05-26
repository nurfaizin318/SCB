import React from 'react';
import {View,
    Text,
    Dimensions,
    }

from 'react-native';
import {Dark} from '../../../Utils'

const CardRecent = (props)=>{

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (

        <View style={styles.container(width,height)}>
            <View style={styles.progress.container}>
                 <Text style={styles.progress.text}>{props.progress}</Text>
            </View>
            <View style={styles.organitation.container}>
                {props.organitation.trim().length < 10 ? 
                 <Text style={styles.organitation.text}>{props.organitation}</Text>
                :
                <Text style={styles.organitation.text}>{props.organitation.slice(0,10)}...</Text>
            }
            </View>
        </View>
    )
}

export default CardRecent;

const styles ={
    container :(width,height)=>{
        return {
        width: width/3,
        height: height/4.5,
        backgroundColor:Dark.black30,
        marginTop:10,
        marginLeft:10,
        borderRadius:5,
        elevation:3,
        

        }
    },
        progress:{
            container:{
                width:'70%',
                height:"40%",
                justifyContent:"center",
                alignSelf:"center",
                alignItems:'center',
                marginTop:10
            },
            text:{
                fontSize:37,
                fontWeight:'bold',
                color:"white",


            }
           
        
        },
        organitation:{
            container:{
                width:"80%",
                height:"40%",
                alignSelf:"center",
                marginTop:10,
                justifyContent:"center",
                alignItems:"center",
            },
            text:{
                fontSize:13,
                color:"white"

            }

        }
}
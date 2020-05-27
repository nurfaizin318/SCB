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
                {props.organitation != null ?
                 props.organitation.trim().length < 10 ? 
                    <Text style={styles.organitation.text}>{props.organitation.toUpperCase()}</Text>
                   :
                   <Text style={styles.organitation.text}>{props.organitation.slice(0,10).toUpperCase()}...</Text>
               
                :
                null
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
                height:"30%",
                justifyContent:"center",
                alignSelf:"center",
                alignItems:'center',
                marginTop:40,
                backgroundColor:"red",
                elevation:4,
                borderRadius:5,
        
            },
            text:{
                fontSize:30,
                fontWeight:'bold',
                color:Dark.black10,


            }
           
        
        },
        organitation:{
            container:{
                width:"80%",
                height:"40%",
                alignSelf:"center",
                justifyContent:"center",
                alignItems:"center",
            },
            text:{
                fontSize:15,
                color:"white"

            }

        }
}
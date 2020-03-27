import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


const MyLitleCard = (props) =>
    {
        var color= ['#ff6b6b','#ff7675','#a29bfe','#fdcb6e','#fd79a8','#00cec9','#686de0','#ffbe76','#badc58','#f6e58d','#686de0','#B53471'];
        var randomColor=color[Math.floor(Math.random() * color.length)];
        var color2= 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

        return(
                <View style={{...styles.card,backgroundColor:randomColor}} >
                    <Text style={styles.text}>{props.text}</Text>
                     <Text style={{color:'white',bottom:10,left:5,top:1}}>{props.title}</Text>
                     <View style={{...styles.grade,backgroundColor:color2}} />
                </View>
        )

    }

    
export default MyLitleCard;

const styles = StyleSheet.create({
    card:{
        width:100,
        height:120,
        borderRadius:10,
        marginHorizontal:5,
        alignItems:'center',
        justifyContent:'space-between'

    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        top:10
       
    },
    grade:{
        top:10,
        width:20,
        height:20,
        borderColor:'white',
        borderWidth:1,
        borderRadius:20,
        top:-5,
        left:-35

    }
})


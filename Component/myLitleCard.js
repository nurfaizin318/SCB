import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


const MyLitleCard = (props) =>
    {
        var color= ['#1abc9c','#e74c3c','#9b59b6','#27ae60','#e67e22','#f39c12','#d35400','#eb4d4b','#eb4d4b','#be2edd','#05c46b','#0fbcf9','#00d8d6','#ffd32a','#ef5777','#575fcf'];
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


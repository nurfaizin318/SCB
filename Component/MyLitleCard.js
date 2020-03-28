import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MyLitleCard = (props) =>
    {
        var color= ['#ff6b6b','#ff7675','#a29bfe','#fdcb6e','#fd79a8','#00cec9','#686de0','#ffbe76','#badc58','#f6e58d','#686de0','#B53471'];
        var randomColor=color[Math.floor(Math.random() * color.length)];
        var color2= 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

        return(
                <View style={{...styles.card,backgroundColor:'#2C3A47'}} >
                    <Text style={styles.text}>{props.text}</Text>
                     <Text style={{color:'white',bottom:10,left:5,top:1}}>{props.title}</Text>
                     <View style={styles.grade} >
                     <FontAwesome5 name="star" size={16} color="black" style={{paddingLeft:10,alignSelf:'center'}}/>
                        <Text style={{marginLeft:2,fontWeight:'bold',top:2}}>4.6</Text>
                        <FontAwesome5 name="eye" size={13} color="white" style={{paddingLeft:10,alignSelf:'flex-end',marginLeft:15}}/>
                        
                     </View>
                </View>
        )

    }

    
export default MyLitleCard;

const styles = StyleSheet.create({
    card:{
        width:100,
        height:140,
        borderRadius:5,
        marginHorizontal:3,
        alignItems:'center',
        justifyContent:'space-between',
        elevation:5

    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        top:10
       
    },
    grade:{
        top:10,
        width:60,
        height:20,
        top:-10,
        alignSelf:'flex-start',
        flexDirection:'row',
        backgroundColor:'#ee5253',
        borderTopRightRadius:10,

        

    }
})


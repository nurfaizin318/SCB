import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MyLitleCard = (props) =>
    {
        var color= ['#ff6b6b','#ff7675','#a29bfe','#fdcb6e','#fd79a8','#00cec9','#686de0','#ffbe76','#badc58','#f6e58d','#686de0','#B53471'];
        var randomColor=color[Math.floor(Math.random() * color.length)];
        var color2= 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

        return(
                <View style={{...styles.card,backgroundColor:'#2C3A47',flexWrap:'wrap'}} >
                    <View style={{width:"100%",alignItems:"center",justifyContent:"space-between",height:100}}>
                        <Text style={styles.text}>{props.progress}</Text>
                        <View style={{width:"100%",flexWrap:'wrap',flexDirection:"row",justifyContent:"center"}}>
                        <Text style={{color:'white',}}>{props.organitation}</Text>
                        </View>
                    </View>
                   
                     <View style={styles.grade} >
                     <FontAwesome5 name="star" size={16} color="black" style={{paddingLeft:10,alignSelf:'center'}}/>
                        <Text style={{marginLeft:2,fontWeight:'bold',top:2}}>0.0</Text>
                        <FontAwesome5 name="eye" size={13} color="gray" style={{paddingLeft:50,alignSelf:'flex-end'}}/>
                     </View>
                </View>
        )

    }

    
export default MyLitleCard;

const styles = StyleSheet.create({
    card:{
        width:120,
        height:160,
        borderRadius:3,
        marginHorizontal:3,
        alignItems:'center',
        justifyContent:'space-between',
        elevation:3,
        borderTopWidth:3,
        borderTopColor:'#ee5253',
        marginLeft:5,
        elevation:10,

    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        top:20
       
    },
    grade:{
        top:10,
        width:90,
        height:20,
        top:-10,
        alignSelf:'flex-start',
        flexDirection:'row',
        backgroundColor:'#ee5253',
        borderTopRightRadius:10,
        elevation:5

        

    }
})


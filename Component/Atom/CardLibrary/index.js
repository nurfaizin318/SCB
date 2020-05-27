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
                        <Text>{props.time}</Text>
                 </View>
                <View style={styles.header.options}>
                    <TouchableOpacity style={styles.header.icon} onPress={props.onDelete}>
                         <FontAwesome5 name="trash" size={14} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.header.icon} onPress={()=>{props.navigation.navigate('Edit',{
                        index:props.index,
                        organitation:props.organitation,
                        actions:props.actions,
                        progress:props.progress,
                        contact1:props.contact1,
                        contact2:props.contact2,
                        nextPlan:props.nextPlan,
                        result:props.result,
                        id:props.id,
                        time:props.time
                    })}}>
                         <FontAwesome5 name="pen" size={14} color="white" /> 
                    </TouchableOpacity>
                    
                </View>
               
            </View>
            <View style={{width:'100%',height:'80%',marginTop:10,padding:20}}>
                    <Text style={styles.body.text}>organitation :  {props.organitation} </Text>
                    <Text style={styles.body.text}>actions         :  {props.actions}</Text>
                    <Text style={styles.body.text}>contact         :  {props.contact1}</Text>
                    <Text style={styles.body.text}>progress       :  {props.progress}</Text>
                    <Text style={styles.body.text}>next plan      :  {props.nextPlan}</Text>
                    <Text style={styles.body.text}>result             :  {props.result}</Text>
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
        backgroundColor:Dark.black30,
        marginTop:20,
        elevation:3,
        borderRadius:7,
        
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
            borderBottomRightRadius:30,
            justifyContent:"center",
            paddingLeft:25
        },
        options:{
            width:'35%',
            height:30,
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
    body:{
        text:{
            color:"white",
            fontSize:14,
            margin:2
        }
    }
   
}
import React,{Fragment,useState, useEffect} from 'react';
import {View ,Text,StyleSheet,TouchableOpacity,StatusBar,Dimensions,Modal,Button} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


 const MyListLibrary = (props) => 
    {

   

     return (
        <View style={styles.container} >  
            <View style={styles.side}>

           </View>
             <View >
                 <View style={styles.topNav}>
                <Text style={styles.text.time}>
                    {props.time}
                </Text>
                <View style={styles.button}>
                <TouchableOpacity >
                   <Text>
                     <FontAwesome5 name="pen" size={20} color="white" />
                   </Text>
               </TouchableOpacity> 
               <TouchableOpacity onPress={props.onDelete}>
                   <Text>
                     <FontAwesome5 name="trash" size={20} color="white" />
                   </Text>
               </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
            <Text style={styles.text.organitation}>
                  id: {props.id}
              </Text>
              <Text style={styles.text.organitation}>
                 organitation : {props.organitation}
              </Text>
              <Text style={styles.text.organitation}>
                  actions : {props.actions}
              </Text>
              <Text style={styles.text.organitation}>
                  contact : {props.contact}
              </Text>
              <Text style={styles.text.organitation}>
                  progress : {props.progress}
              </Text>
              <Text style={styles.text.organitation}>
                  nextPlan : {props.nextPlan}
              </Text>
              <Text style={styles.text.organitation}>
                 result :  {props.Result}
              </Text>
            </View>
            </View>
       </View>

             )

    }

export default MyListLibrary;

const styles = {
        container :{
            width:'97%',
            height:210,
            backgroundColor:'#34495e',
            marginVertical:10,
            alignSelf:"center",
            top:20,borderRadius:5,
            flexDirection:"row"
        },
        topNav:{
        width:'82%',
        height:40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
        },
        text:{
            time:{
                left:10,
                fontSize:15,
                color:'gray'
            },
            index:{

               
                left:10,
                color:'white',
                fontSize:18

            },
            organitation:{
                fontSize:15,
                color:"white"
            }
        },
        side:{
            height:'100%',
            width:20,
            backgroundColor:"#16a085"
        },
        button:{
            width:60,
            flexDirection:"row",
            justifyContent:"space-between"
        },
        body:{
            width:'80%',
            height:"100%",
            paddingHorizontal:10
        }
        

}
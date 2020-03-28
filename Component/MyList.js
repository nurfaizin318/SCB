import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Dimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const MyList= (props) =>
    {
    return(
        <View style={{...styles.list}}>
            <View style={styles.iconContainer}>
                 <FontAwesome5 name="bell" size={25} color="#fd9644" />
            </View>
            <View style={{width:'50%',left:20,height:'100%',justifyContent:"center",}}>
                <Text style={{fontSize:17,color:"white"}}>{props.text}</Text>
                <Text style={{fontSize:12,color:"#f6b93b"}}>{props.text2}</Text>
            </View>
            <View style={{width:80,height:'100%',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity>
                     <FontAwesome5 name="angle-double-up" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
          
    }
export default MyList;

const styles = StyleSheet.create({
        list:{
            width:'95%',
            height:70,
            backgroundColor:'#2C3A47',
            borderRadius:3,
            marginVertical:3,
            flexDirection:'row',
            alignItems:'center'           
        },
        iconContainer:{
            height:'80%',
            width:90,
            borderRightColor:'#576574',
            borderRightWidth:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            fontSize:20,
            color:'white',
            

        }
})

import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Dimensions} from 'react-native'
import Styles from '../Styles/Styles';

const MyList= (props) =>
    {
    return(
        <View style={{...styles.list}}>
            <View style={styles.iconContainer}>
                <Text style={{color:'#576574'}}>Icon</Text>
            </View>
            <View style={{width:'50%',left:20,height:'100%',justifyContent:"center",}}>
            <Text style={{fontSize:20,color:"white"}}>{props.text}</Text>
            <Text style={{fontSize:12,color:"#f6b93b"}}>{props.text2}</Text>
            </View>
            <View style={{width:80,height:'100%',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity>
                    <Text style={styles.text}>
                        >
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
          
    }
export default MyList;

const styles = StyleSheet.create({
        list:{
            width:'95%',
            height:80,
            backgroundColor:'rgba(72, 84, 96,0.8)',
            borderRadius:7,
            marginVertical:5,
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

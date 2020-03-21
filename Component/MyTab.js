import React from 'react';
import {useDispatch} from 'react-redux'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const MyTab = (props) =>{
   const dispatch = useDispatch()
    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.left}
            onPress={()=> dispatch({type:"HOME"})}
            >
                <Text style={{color:'white'}}>
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.add}>
                <Text style={{color:'white'}}>
                    +
                </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={Styles.right}
            onPress={()=>dispatch({type:"LIBRARY"})}
            >
                <Text style={{color:'white',fontSize:15,}} >
                    Library
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyTab;
const Styles =StyleSheet.create({
    container:{
        width:'95%',
        height:50,
        backgroundColor:'rgba(87, 101, 116,0.5)',
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'flex-end',
        right:10
    },
    add:{
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:'#8395a7',
        justifyContent:'center',
        alignItems:'center',
        top:-10,
        borderWidth:5,
        borderColor:'#1e272e',
        
    },
    left:{
        left:'100%',
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    right:{
        right:'100%',
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }

})
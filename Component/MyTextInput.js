import React,{useEffect} from 'react';
import {TextInput ,StyleSheet,Text} from 'react-native'

const MyTextInput = (props) =>
    {
      const [state,setState] = React.useState("gray")

    const isEmpty=(text)=>{
     if(text.trim().length <= 0 ){
       setState("red");
     }
     else{
       setState('gray')
     }
    }

    useEffect(()=>{
      setState("gray");
    })
  
    return(
            <TextInput 
            style={{...styles.textInput(state)}}
            onChangeText={props.onChangeText}
            value={props.value}
            />
          )
    }
export default MyTextInput;

const styles ={
  textInput:(color)=>{
    return{
    width:'95%',
    height:50,
    alignSelf:'center',
    color:'#95a5a6',
    marginVertical:10,
    right:10,
    borderWidth:1,
    borderRadius:5,
    borderColor:color
    }
  }
}
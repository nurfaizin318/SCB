import React from 'react';
import {TextInput ,StyleSheet} from 'react-native'

const MyTextInput = (props) =>
    {
    return(
            <TextInput 
            style={styles.textInput}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            value={props.value}
            />
          )
    }
export default MyTextInput;

const styles =StyleSheet.create({
  textInput:{
    width:'95%',
    height:50,
    alignSelf:'center',
    color:'#95a5a6',
    marginVertical:10,
    right:10,
    borderColor:'#7f8c8d',
    borderWidth:1,
    borderRadius:5

  }
})
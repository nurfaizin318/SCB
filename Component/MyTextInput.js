import React from 'react';
import {TextInput ,StyleSheet} from 'react-native'

const MyTextInput = (props) =>
    {
    return(
            <TextInput 
            style={styles.textInput}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            />
          )
    }
export default MyTextInput;

const styles =StyleSheet.create({
  textInput:{
    width:'95%',
    height:40,
    borderBottomWidth:0.5,
    borderColor:'#7f8c8d',
    alignSelf:'center',
    color:'#95a5a6',
    marginVertical:10,
    right:10

  }
})
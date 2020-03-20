import React from 'react';
import {TextInput} from 'react-native'

const MyTextInput = (props) =>
    {
    return(
            <TextInput 
            style={props.style}
            placeholder={props.placeholder}
            />
          )
    }
export default MyTextInput;

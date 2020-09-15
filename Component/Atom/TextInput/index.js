import React from 'react';
import {View,
    Text,
    Dimensions,
    TextInput
    }

from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dark} from '../../../Utils'

const TextInputs = (props)=>{

    return (

        <View >
            <TextInput 
            style={styles.input}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor={Dark.black40}
            onFocus={props.onFocus}
            ref={props.forwardedRef}
            secureTextEntry={props.secureTextEntry}
            
            />
        </View>
    )
}

export default TextInputs;

const styles ={

    container : (width,height)=>{
        return {
        width: width/1.1,
        
        }
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:Dark.black40,
        width:"100%",
        color:'white',
    }
    
     
}
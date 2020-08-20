import React from 'react';

import { View,Text,Button} from "react-native";

const AddDataUser = (props) => {
    return ( 
        <View style={{flex:1,backgroundColor:"red"}}>
            <Text>{props.route.params.uid}</Text>
        </View>
     );
}
 
export default AddDataUser;

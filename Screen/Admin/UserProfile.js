import React from 'react';
import {View,Text,} from 'react-native';


const UserProfil = (props) => {
    return ( 
        <View>
            <Text> nama : {props.route.params.profile.name}</Text>
            <Text> adders : {props.route.params.profile.address}</Text>
            <Text> email : {props.route.params.profile.email}</Text>
            <Text> status : {props.route.params.profile.status}</Text>
            <Text> position : {props.route.params.profile.position}</Text>
            <Text> number : {props.route.params.profile.number}</Text>
        </View>
     );
}
 
export default UserProfil;
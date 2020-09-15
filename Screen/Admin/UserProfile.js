import React from 'react';
import {View,Text,} from 'react-native';
import { Dark } from '../../Utils';


const UserProfil = (props) => {
    return ( 
        <View style={{flex:1,backgroundColor:Dark.black20}}>
            <View style={{width:"100%",height:150,backgroundColor:"grey",marginTop:10}}>
            <Text style={styles.text}> adders : {props.route.params.profile.address}</Text>
            <Text style={styles.text}> nama : {props.route.params.profile.name}</Text>
            <Text style={styles.text}> email : {props.route.params.profile.email}</Text>
            <Text style={styles.text}> status : {props.route.params.profile.status}</Text>
            <Text style={styles.text}> position : {props.route.params.profile.position}</Text>
            <Text style={styles.text}> number : {props.route.params.profile.number}</Text>
            </View>
        </View>
     );
}
 
export default UserProfil;

const styles = {
    text:{
        fontSize:17
    }
}
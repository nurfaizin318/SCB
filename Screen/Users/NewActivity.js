import React,{Fragment,useState} from 'react';
import Styles from '../../Styles/Styles';
import {View ,Text,StyleSheet,TouchableOpacity,StatusBar,Dimensions,Modal,Button} from 'react-native';


 const NewActivity  = () => 
    {

        const [visib,setVisible] = useState(false)
        const height =Dimensions.get('window').height;
     return (
        <Fragment>
            <StatusBar backgroundColor="#1e272e" tintColor="light"  />
            <View style={{flex:1,justifyContent:'center',alignItems:"center",backgroundColor:'#1e272e'}}>
            </View>
        </Fragment>
             )

    }

export default NewActivity;

const styles = StyleSheet.create({

})
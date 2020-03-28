import React from 'react';
import {View,TouchableOpacity,Image,StyleSheet,Text} from 'react-native';
import Styles from '../Styles/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomePanel = (props) =>
    {
        return(
            <View style={styles.container}>
               <TouchableOpacity style={styles.child}>
                     <FontAwesome5 name="search" size={25} color="#778ca3" />
                     <Text style={styles.text}>Search</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.child} onPress={()=>props.navigation.navigate('Insert')}>
                     <FontAwesome5 name="paste" size={26} color="#778ca3" />
                     <Text style={styles.text}>Add</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.child} onPress={()=>props.navigation.navigate('NewActivity')}>
                    <FontAwesome5 name="archive" size={24} color="#778ca3" />
                    <Text style={styles.text}>Library</Text>
               </TouchableOpacity>
            </View>
        )
    }
export default HomePanel;

const styles = StyleSheet.create({
    container:{
        width: 320,
        height:80,
        backgroundColor:'#2C3A47',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        borderRadius:5,
        elevation:8
        

    },
    child:{
        flex:1,
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:"#CAD3C8",
        top:5
    }
})
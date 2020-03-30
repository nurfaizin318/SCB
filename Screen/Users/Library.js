import React,{Fragment,useState, useEffect} from 'react';
import Styles from '../../Styles/Styles';
import {View ,Text,StyleSheet,TouchableOpacity,StatusBar,Dimensions,Modal,Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


 const Library = () => 
    {

        const [data,setData] = useState("")
        const height =Dimensions.get('window').height;

        const getDta = async () =>{
            const  findData =  await AsyncStorage.getItem('Items',(err,result)=>{console.log(result)})
            const newData = await JSON.stringify(findData)

            
        
            return console.log(data);
        }




     return (
        <Fragment>
            <StatusBar backgroundColor="#1e272e" tintColor="light"  />
            <View style={{flex:1,justifyContent:'center',alignItems:"center",backgroundColor:'#1e272e'}}>
                    <Text>{data}</Text>
                    <Button title="LIBRARY PAGE" onPress={()=>getDta()}/>
            </View>
        </Fragment>
             )

    }

export default Library;

const styles = StyleSheet.create({

})
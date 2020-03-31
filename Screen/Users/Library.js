import React,{Fragment,useState, useEffect} from 'react';
import Styles from '../../Styles/Styles';
import {View ,Text,StyleSheet,TouchableOpacity,StatusBar,Dimensions,Modal,Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector} from 'react-redux';



 const Library = () => 
    {

        const height =Dimensions.get('window').height;
        const  data = useSelector(state=>state.Insert.data)
        const getDta = async () =>{
            const  findData =  await AsyncStorage.getItem('Items',(err,result)=>{console.log(result)})
            const newData = await JSON.stringify(findData)

            
        
            return console.log(data);
        }




     return (
        <Fragment>
            <StatusBar backgroundColor="#1e272e" tintColor="light"  />
            <View style={{flex:1,backgroundColor:'#1e272e'}}>
            {data.map((res,index)=>{
                return  (
                        <TouchableOpacity key={index}><View style={{width:'100%',height:70,backgroundColor:'#ff6b6b',marginVertical:10,alignItems:"center",
                        justifyContent:'center',top:20,borderRadius:5}} >
                            <View style={{width:30,height:30,borderRadius:30,backgroundColor:'#c8d6e5',justifyContent:'center',alignItems:'center',top:-20}}>
                                    <Text>
                                        {index+1}
                                    </Text>
                            </View>
                            <Text style={{fontSize:22,color:"white"}}>{res.organitation}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
            </View>
        </Fragment>
             )

    }

export default Library;

const styles = StyleSheet.create({

})
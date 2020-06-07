import React,{Fragment,useState, useEffect} from 'react';
import {View ,Text,StyleSheet,TouchableOpacity,StatusBar,Dimensions,Modal,Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Dark} from '../../Utils'


 const Search = () => 
    {

    const getData = () =>{
        let date = new Date();
            let id = date.getTime();
            let dates = date.getDate();
            let month = date.getMonth() + 1; //Current Month
            let year = date.getFullYear(); //Current Year
            let times= date.toLocaleTimeString();

            var TimeNow = dates +'/'+month+'/'+year +' '+times;

        alert(dates+id)
    }

     return (
        <Fragment>
            <StatusBar backgroundColor={Dark.black20} tintColor="light"  />
            <View style={{flex:1,justifyContent:'center',alignItems:"center",backgroundColor:Dark.black20}}>
                    <Button title="SEARCH PAGE" onPress={()=>getData()}/>
            </View>
        </Fragment>
             )

    }

export default Search;

const styles = StyleSheet.create({

})
import React,{Fragment} from 'react';
import Styles from '../../Styles/Styles'

import {View ,ScrollView,Text,StyleSheet,TouchableOpacity,StatusBar,Dimensions} from 'react-native';


import MyTextInput from '../../Component/MyTextInput'
import MyLitleCard from '../../Component/myLitleCard';
import MyList from '../../Component/MyList'

 const Home  = () => 
    {
        const arr= [{key:1,data:'10%'},{key:2,data:'10%'},{key:3,data:'10%'},{key:4,data:'10%'},{key:5,data:'10%'},{key:6,data:'10%'}];
        const arr1=[
        {key:1,data:'First Notif',hint:'Person eek'},
        {key:2,data:'Secend Notif',hint :'Filling Good'},
        {key:3,data:'Third Notif',hint :'Filling Not Good'},
        {key:4,data:'Fourth Notif', hint :'Filling Good Nyut '},
        {key:5,data:'Fife Notif', hint :'Filling Gerah Body'},
        {key:6,data:'Six Notif',hint :'Filing Stress'}]


        const height =Dimensions.get('window').height;
        const width =Dimensions.get('window').width;
     return (
        <Fragment>
            <StatusBar backgroundColor="#1e272e" tintColor="light"  />
            <View style={{flex:1,backgroundColor:'#1e272e',alignItems:'center'}}>
               <View style={{flexDirection:'row',top:40,justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                 <View style={styles.thumnail} />
                    <View>
                        <Text style={styles.fontThumnail}>Jaya Saf</Text>
                        <Text style={{fontSize:15,color:'gray',left:-40}}>Grapic Designer</Text>
                    </View>
                    <Text style={{color:'white',right:10}}>setting</Text>
               </View>
               <View style={{height:50,top:70,flexDirection:'row'}}>
                     <MyTextInput placeholder="search" style={styles.searchInput} />
                     <TouchableOpacity style={styles.touch}>
                         <Text style={{color:'#95a5a6'}}>
                             Search
                         </Text>
                     </TouchableOpacity>
               </View>
            
               <View style={{top:70,left:5,height:170,justifyContent:"center"}}>
                   <Text style={styles.text}>
                       Recent
                   </Text>
                
                   <ScrollView horizontal={true} style={{top:5}}>
                   
                       {arr.map(result=>{
                           return ( <MyLitleCard  key={result.key} text={result.data} title="Projext Name Organitation"/>)
                       })}
                   </ScrollView>
                  
               </View>
               <View style={{width:300,height:height/2.5,top:70,alignItems:'center'}}>
                 <Text style={styles.text}>
                     Feed
                 </Text>
                    
                <ScrollView style={{width:width}}>
                {arr1.map(result =>{
                    return <MyList  key={result.key} text={result.data} text2={result.hint}/>
                })}
                 </ScrollView>
               </View>
              
            </View>
        </Fragment>
             )

    }

export default Home;

const styles = StyleSheet.create({
    thumnail :{
        width:70,
        height:70,
        borderRadius:50,
        backgroundColor:'tomato',
        left:20

    },
    fontThumnail:{
        fontSize:27,
        color:'white',
        left:-40,
        fontWeight:'bold',

    },
    searchInput:{
        fontSize:15,
        backgroundColor:'rgba(47, 54, 64,1)',
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        height:40,
        width:'65%',
        textAlign:'center',
        color:'white'


    },
    touch:{
        width:100,
        height:40,
        backgroundColor:'rgba(47, 54, 64,1)',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:2,
        borderTopRightRadius:15,
        borderBottomRightRadius:15,

    },
    text:{
        color:'white',fontWeight:'bold',fontSize:27,left:10
    }
})
import React,{Fragment} from 'react';
import {
    View ,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,Dimensions,
    TouchableWithoutFeedback,
    TextInput,
    Keyboard} from 'react-native';


import MyLitleCard from '../../Component/MyLitleCard';
import MyList from '../../Component/MyList';

 const Home  = () => 
    {

        const arr= [{key:1,data:'10%'},{key:2,data:'10%'},{key:3,data:'10%'},{key:4,data:'10%'},{key:5,data:'10%'},{key:6,data:'10%'}];
        const resArr = arr.length;
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
       
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}  >
        <Fragment>
            <StatusBar backgroundColor="#1e272e" tintColor="light"  />
            <View style={{flex:1,backgroundColor:'#1e272e',alignItems:'center',width:'100%'}}>

               <View style={{flexDirection:'row',top:40,justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                 <View style={styles.thumnail} />
                    <View>
                        <Text style={styles.fontThumnail}>Jaya Saf</Text>
                        <Text style={{fontSize:15,color:'gray',left:-40}}>Grapic Designer</Text>
                    </View>
                    <Text style={{color:'white',right:10}}>setting</Text>
               </View>
               <View style={{height:50,top:70,flexDirection:'row'}}>
                     <TextInput style={styles.searchInput} placeholder="search"/>
                     <TouchableOpacity style={styles.touch}>
                         <Text style={{color:'#95a5a6'}}>
                             O
                         </Text>
                     </TouchableOpacity>
               </View>
               <View style={{top:70,height:170,justifyContent:'flex-start',width:'100%'}}>
                   <View style={{justifyContent:'space-between',flexDirection:"row",alignItems:'center'}}>
                   <Text style={styles.text}>
                       Recent
                   </Text>
                   <TouchableOpacity style={{height:30,width:80,alignItems:"center",justifyContent:"center"}}>
                         <Text style={{color:"gray",}}>View all  > </Text>
                   </TouchableOpacity>
                   </View>
                       {resArr > 0 ?
                        <ScrollView horizontal={true} style={{top:5}}>
                   
                        {arr.map(result=>
                           {

                            return ( <MyLitleCard  key={result.key} text={result.data} title="Projext Name Organitation"/>)
                        
                        })}   
                          
                        </ScrollView> 
                    
                    :

                    <View style={{width:'95%',height:120,alignItems:'center',justifyContent:"center",marginVertical:10,marginHorizontal:10,borderRadius:10,borderWidth:0.5,borderColor:'#34495e'}}>
                        <Text style={{fontSize:15,color:'#2c3e50'}}>no result</Text>
                    </View>
                    }
                  
                  
               </View>
               <View style={{width:'100%',height:height/2.39,top:70}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={styles.text}>
                     Feed
                 </Text>
                 <TouchableOpacity style={{height:30,width:80,alignItems:"center",justifyContent:"center"}}>
                         <Text style={{color:"gray",}}>View all  > </Text>
                   </TouchableOpacity>
                 </View>
                <ScrollView style={{width:width}}>
                    <View style={{alignItems:'center'}}>
                    {arr1.map(result =>{
                    return <MyList  key={result.key} text={result.data} text2={result.hint}/>
                })}
                    </View>
               
                 </ScrollView>
               </View>
            </View>
        </Fragment>
        </TouchableWithoutFeedback >

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
        width:'75%',
        textAlign:'center',
        color:'white'


    },
    touch:{
        width:60,
        height:40,
        backgroundColor:'rgba(47, 54, 64,1)',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:2,
        borderTopRightRadius:15,
        borderBottomRightRadius:15,

    },
    text:{
        color:'white',fontWeight:'bold',fontSize:22,
        left:10
    }
})
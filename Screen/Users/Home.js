import React,{Fragment,useState} from 'react';
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
import {useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MyLitleCard from '../../Component/MyLitleCard';
import MyList from '../../Component/MyList';



 const Home  = (props) => 
    {
        const HomeData = useSelector(state=>state.Data.data)
       
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
            <View style={{flex:1,backgroundColor:'#1e272e',alignItems:'center',width:width}}>
               <View style={{height:70,flexDirection:'row',marginTop:10,paddingTop:10,width:'96%',elevation:10,backgroundColor:"#1e272e"}}>
                    <View style={{width:'100%'}}>
                        <Text style={styles.fontThumnail}>Jaya Saf</Text>
                        <Text style={{fontSize:15,color:'gray',left:20}}>grapic desigmer</Text>
                    </View>
                   <TouchableOpacity style={{height:50,width:50,alignItems:'center',justifyContent:"center",right:50,elevation:10}}>
                   <FontAwesome5 name="ellipsis-v" size={25} color="#778ca3" />
                    </TouchableOpacity>
                    
               </View>
               
               <View style={{flex:1,width:width}}>
                    <View style={{height:215,justifyContent:'flex-start',width:'98%',borderRadius:5,alignSelf:"center",}}>
                        <View style={{justifyContent:'space-between',flexDirection:"row",alignItems:'center',paddingTop:10}}>
                        <Text style={styles.text}>
                            Recent
                        </Text>
                        <TouchableOpacity style={{height:30,width:80,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{color:"gray",paddingTop:10}}>View all   </Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{justifyContent:'center',height:160}}>
                           
                           {HomeData.length >0 ? 
                           
                           <ScrollView horizontal={true} style={{top:5,width:'97%',left:5}}>
                           {HomeData.map((res,index)=> {
                                       return <MyLitleCard key={index} organitation={res.organitation} progress={res.progress} style={{}}/>
                           })}
                            </ScrollView> 

                            :

                            <View style={{...styles.noResult,height:height/5}}>
                            <Text style={{fontSize:15,color:'#2c3e50'}}>no notifications</Text>
                        </View>

                        }
                        </View>
                    </View>
                    <View style={{flex:1,alignSelf:"center",height:height/2.15,paddingTop:10,marginTop:20,backgroundColor:"#1e272e",elevation:20}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={styles.text}>
                            Feed
                        </Text>
                        <TouchableOpacity style={{height:20,width:80,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{color:"gray"}}>View all </Text>
                        </TouchableOpacity>
                        </View>

                        {arr1  ?
                                 <ScrollView style={{width:width,marginTop:10,elevation:10,marginBottom:10}}>
                                 <View style={{alignItems:'center'}}>
                                 {arr1.map(result =>{
                                 return  <MyList  key={result.key} text={result.data} text2={result.hint}/>
                                 
                             })}
                                 </View>
                             </ScrollView>
                            :
                            <View style={{...styles.noResult,height:height/2.4}}>
                                <Text style={{fontSize:15,color:'#2c3e50'}}>no notifications</Text>
                            </View>
                            }

                        
                    </View>
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

    },
    fontThumnail:{
        fontSize:22,
        color:'white',
        fontWeight:'bold',
        left:20

    },
    searchInput:{
        fontSize:15,
        backgroundColor:'rgba(47, 54, 64,1)',
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        height:40,
        width:'72%',
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
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        left:20,
       
    },
    noResult:{
        width:'94%',
        alignItems:'center',
        justifyContent:"center",
        marginVertical:10,
        marginHorizontal:10,
        borderRadius:5,
       
    }
})
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MyLitleCard from '../../Component/MyLitleCard';
import MyList from '../../Component/MyList';



 const Home  = (props) => 
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
            <View style={{flex:1,backgroundColor:'#1e272e',alignItems:'center',width:width}}>
               <View style={{height:90,flexDirection:'row',paddingTop:20,width:'100%'}}>
                    <View style={{width:'100%',borderBottomWidth:2,borderBottomColor:'#ee5253'}}>
                        <Text style={styles.fontThumnail}>Jaya Saf</Text>
                        <Text style={{fontSize:15,color:'gray',left:20}}>Grapic Designer</Text>
                    </View>
                   <TouchableOpacity style={{height:50,width:50,alignItems:'center',justifyContent:"center",right:50}}>
                         <FontAwesome5 name="ellipsis-v" size={25} color="#778ca3" />
                    </TouchableOpacity>
                    
               </View>
               
               <View style={{flex:1,width:width,marginTop:10}}>
                    <View style={{height:200,justifyContent:'flex-start',width:'100%'}}>
                        <View style={{justifyContent:'space-between',flexDirection:"row",alignItems:'center'}}>
                        <Text style={styles.text}>
                            Recent
                        </Text>
                        <TouchableOpacity style={{height:30,width:80,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{color:"gray",}}>View all   </Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{justifyContent:'center',height:160}}>
                            {resArr > 0 ?
                                <ScrollView horizontal={true} style={{top:5,width:'97%',left:5}}>
                                {arr.map(result=>
                                {
                                    return ( 
                                        <TouchableOpacity key={result.key} >
                                            <MyLitleCard  text={result.data} title="Projext Name Organitation"/>
                                        </TouchableOpacity>
                                    )
                                })}   
                                </ScrollView> 
                            :
                            <View style={{width:'95%',height:120,alignItems:'center',justifyContent:"center",marginVertical:10,marginHorizontal:10,borderRadius:10,borderWidth:0.5,borderColor:'#34495e'}}>
                                <Text style={{fontSize:15,color:'#2c3e50'}}>no result</Text>
                            </View>
                            }
                        </View>
                    </View>
                    <View style={{width:'100%',height:height/1.95,paddingTop:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.text}>
                            Feed
                        </Text>
                        <TouchableOpacity style={{height:30,width:80,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{color:"gray",}}>View all </Text>
                        </TouchableOpacity>
                        </View>
                        <ScrollView style={{width:width,marginTop:10}}>
                            <View style={{alignItems:'center'}}>
                            {arr1.map(result =>{
                            return  <MyList  key={result.key} text={result.data} text2={result.hint}/>
                               
                        })}
                            </View>
                    
                        </ScrollView>
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
        fontSize:27,
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
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        left:20
    }
})
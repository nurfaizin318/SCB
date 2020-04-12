import React,{Fragment,useState, useEffect} from 'react';
import Styles from '../../Styles/Styles';
import {View ,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    Modal,
    Button,
    ScrollView ,
    Clipboard,
    ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector,useDispatch} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



 const Library = () => 
    {

        const height =Dimensions.get('window').height;
        const  data = useSelector(state=>state.Insert.data)
        const dispatch = useDispatch();
        isVisible2= useSelector(state=>state.Modal.isVisible2)

       
       const  writeToClipboard = async () => {
           const a = await data.map((res) => { return (
               "Organitation : "+res.organitation+
               "\n"+"Contact : "+res.contact+
               "\n" +"Actions : "+res.actions +
               "\n"+"Progress : "+ res.progress +
               "\n"+"Next Plan : "+ res.nextPlan +
               "\n"+"Result : " + res.result+"\n ==========")})
                const  b = await a.join(" \n");
             await  Clipboard.setString(b);
            if(b == ""){
                await  ToastAndroid.showWithGravityAndOffset(
                    "Kosong",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                    0,0
                  );
            }else{
                await  ToastAndroid.showWithGravityAndOffset(
                    "copyed",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                    0,0
                  );
            }
          };

     return (
         
        <Fragment>
            <StatusBar backgroundColor="#1e272e" tintColor="light"  />
            <View style={{flex:1,backgroundColor:'#1e272e'}}>
            <ScrollView>

            {data.map((res,index)=>{
                return  (
                        <TouchableOpacity key={index}>
                            <View style={{width:'100%',height:70,backgroundColor:'#ff6b6b',marginVertical:10,alignItems:"center",justifyContent:'space-between',top:20,borderRadius:5,flexDirection:'row',paddingHorizontal:10}} 
                             >
                            <Text>
                                {index+1}
                            </Text>
                           <Text>
                               {res.organitation}
                           </Text>
                           <TouchableOpacity>
                               <Text>
                                   delete
                               </Text>
                           </TouchableOpacity>
                           
                        </View>

                    </TouchableOpacity>
                   
                )
            })}
             <Modal visible={isVisible2}
             animationType="fade"
        transparent={true}
             >
                <View style={{height:height/1.2,borderRadius:10,alignSelf:"center",marginTop:30,width:'90%',backgroundColor:"#334E68",alignItems:'center',}}>
                <TouchableOpacity style={{width:40,height:30,margin:10,justifyContent:"center",alignItems:"center",alignSelf:'flex-end'}} 
                onPress={()=>writeToClipboard()}>
                         <FontAwesome5 name="copy" size={25} color="#778ca3" />
                </TouchableOpacity>
                
                
                    <View style={{height:"80%",width:'95%',paddingLeft:10}}>
                     <ScrollView style={{height:100}}>
                        {data.map((res,index)=>{
                            return (

                                <View key={index} style={{borderBottomWidth:1,borderBottomColor:'gray',marginTop:10}}>
                                <Text  style={{color:"white",fontSize:20,}}>id   : {res.id} </Text>
                                <Text  style={{color:"white",fontSize:20,}}>Organitations : {res.organitation} </Text>
                                <Text  style={{color:"white",fontSize:20}}>actions : {res.actions} </Text>
                                <Text  style={{color:"white",fontSize:20}}>contact : {res.contact} </Text>
                                <Text style={{color:"white",fontSize:20}}>progress :{res.progress} </Text>
                                <Text style={{color:"white",fontSize:20}}>next plan : {res.nextPlan} </Text>
                                <Text  style={{color:"white",fontSize:20}}>result  : {res.result} </Text>
                                <Text  style={{color:"white",fontSize:20,paddingBottom:10}}>time  : {res.time} </Text>

                                </View>
                                )
                        })}
                     </ScrollView>
                 </View>
                 <View style={{top:20}}>
                    <Button title="close" onPress={()=>dispatch({type:"MODAL2_CLOSE"})}/>
                 </View>
                 </View>
                 
                </Modal>
            <View style={{marginTop:200,alignItems:"center",}}>
                <TouchableOpacity style={{height:40,width:100,borderColor:"tomato",borderWidth:1,alignItems:"center",justifyContent:"center",borderRadius:10}}
                onPress={()=>dispatch({type:"MODAL2_OPEN"})}>
                    <Text style={{color:"#ff6b81",fontSize:20}}>
                        Report
                    </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>

            </View>
        </Fragment>
             )

    }

export default Library;

const styles = StyleSheet.create({

})
import React,{Fragment,useState, useEffect} from 'react';
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
    ToastAndroid,
    FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector,useDispatch} from 'react-redux';
// import {CardLibrary} from '../../Component';
// import ModalLibrary from '../../Component/Atoms/ModalLibrary';



 const Library = () => 
    {
        const dataFromState = useSelector(state=>state.DataReducer.data);
        const [isVisible ,setIsVisible] = useState(false);
        const dispatch = useDispatch();
       
      
        const onDelete = async(id)=>{
                try{
                    await  dispatch({type:"ON_DELETE",payload:id})
                    await AsyncStorage.setItem('Data',JSON.stringify(dataFromState.filter(item=>item.id !== id)))
                }catch(e){
                    alert(e)
                }
          }
        
          const onEdit = (value) =>{
            alert(value);
          }
     return (
         
        <Fragment>
            <StatusBar backgroundColor="#1e272e" tintColor="light"  />
            <View style={{flex:1,backgroundColor:'#1e272e'}}>
            <View style={{alignItems:'flex-end',marginTop:20,marginHorizontal:20}}>
                <TouchableOpacity style={{height:40,width:100,alignItems:"center",justifyContent:"center",borderRadius:10}}
                onPitems={()=>setIsVisible(!isVisible)}>
                    <Text style={{color:"#ff6b81",fontSize:20}}>
                        Report
                    </Text>
                </TouchableOpacity>
            </View>
           <ModalLibrary 
           isVisible={isVisible}
           onClose={()=>setIsVisible(!isVisible)}
           dataFromState={dataFromState}
           />
                    <FlatList
                        data={dataFromState}
                        renderItem={ ({item}) =>

                                <CardLibrary
                                id={item.id}
                                organitation={item.organitation} 
                                actions={item.actions}
                                progitems={item.progitems}
                                contact={item.contact}
                                nextPlan={item.nextPlan}
                                progress={item.progress}
                                time={item.time} 
                                result={item.result}
                                onDelete={()=>{onDelete(item.id)}}
                                onEdit={()=>{onEdit(item.id)}}
                                /> }
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
        </Fragment>
             )

    }

export default Library;


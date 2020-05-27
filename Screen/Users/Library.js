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
    import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
    import AsyncStorage from '@react-native-community/async-storage';
import {useSelector,useDispatch} from 'react-redux';
import {CardLibrary,Modals} from '../../Component';
import {Dark} from '../../Utils'




 const Library = (props) => 
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


          const copyToClipboard = async () =>{
          let copy = dataFromState.map(({organitation,actions,contact1,progress,nextPlan,result})=>{
              return ('\n'+`organitation : ${organitation}` +'\n'+
                      `actions : ${actions}`+'\n'+ 
                      `progress : ${progress}` +'\n'+
                      `contact   : ${contact1}`+'\n'+
                      `next plan : ${nextPlan}`+'\n'+
                      `result  : ${result}`+'\n'+
                      `================` +'\n');
          })
          let finalCopy = await copy.toString();
          Clipboard.setString(finalCopy)
   }

          
     return (
         
        <Fragment>
            <StatusBar backgroundColor={Dark.black20} tintColor="light"  />
                 <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{width:100}}>
                             <Button title="print" onPress={()=>{copyToClipboard()}} color={Dark.black30} />
                        </View>
                    </View>
           <Modals
           isVisible={isVisible}
           onCloseModal={()=>setIsVisible(!isVisible)}
           data={dataFromState}
           />
           <FlatList
           style={{alignSelf:"center"}}
                    showsVerticalScrollIndicator={false}
                        data={dataFromState}
                        renderItem={ ({item,index}) =>

                                <CardLibrary
                                navigation={props.navigation}
                                id={item.id}
                                organitation={item.organitation} 
                                actions={item.actions}
                                progitems={item.progitems}
                                contact1={item.contact1}
                                contact2={item.contact2}
                                nextPlan={item.nextPlan}
                                progress={item.progress}
                                time={item.time} 
                                result={item.result}
                                onDelete={()=>{onDelete(item.id)}}
                                onEdit={()=>{onEdit(item.id)}}
                                index={index}
                                /> }
                        keyExtractor={item => item.id.toString()}
                    />
           </View>
                   
        </Fragment>
             )

    }

export default Library;


const styles = {

     container:{
        flex:1,
        backgroundColor:Dark.black20,
     },
     header:{
        marginTop:20,
        marginHorizontal:20,
        alignItems:"flex-end"
     },
   
}

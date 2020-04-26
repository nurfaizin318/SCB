import React,{useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import RadioGroup,{Radio} from "react-native-radio-input";

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Button,
    Modal,
    KeyboardAvoidingView
       } from 'react-native';
       import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MyTextInput from '../../Component/MyTextInput';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const Insert = (props)=>{
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        const times = date +'/'+month+'/'+year
        const [borderColor,setBorderColor] = useState("#7f8c8d")
        const dispatch =useDispatch();
        const organitation =useSelector(state=>state.Data.organitation);
        const actions =useSelector(state=>state.Data.actions);
        const contact= useSelector(state =>state.Data.contactPerson);
        const contact2= useSelector(state =>state.Data.contactPerson2);
        progress = useSelector(state=>state.Data.progress);
        nextPlan = useSelector(state=>state.Data.nextPlan);
        result2 = useSelector(state=>state.Data.result);
        isVisible= useSelector(state=>state.Modal.isVisible);
        isEditable= useSelector(state=>state.Data.isEditable);
        data = useSelector(state=>state.Data.data);
      

      const onInsert = async () =>{

           let date = new Date();
            let id =  await date.getTime();
            let dates = await date.getDate();
            var month = await  date.getMonth() + 1; //Current Month
            let year = await date.getFullYear(); //Current Year
            let times= await date.toLocaleTimeString();
            let TimeNow = dates +'/'+month+'/'+year +' '+times;
            dispatch({type:"INPUT_INSERT",timeNow:TimeNow,id:id});

                try{
            let dataToStorage = await JSON.stringify(data)

                    await AsyncStorage.setItem('Data',dataToStorage)

                }catch(e){
                    console.log(e)
                }

      }



       
    return(
        
        <View style={{flex:1,backgroundColor:'#1e272e'}}>
            <KeyboardAvoidingView behavior="padding">
            <View style={{alignItems:"center",top:20}}>
                 <Text style={styles.body.title} >{times}</Text>
            </View>
            <Modal 
            visible={isVisible}
            animationType="fade"
            transparent={true}
            >
                <View style={styles.modal.body}>
                    <View style={styles.modal.head}>
                         <FontAwesome5 name="thumbs-up" size={30} color="#1e272e" />
                         <Text style={styles.modal.textIcon}>Great</Text>
                    </View>
                    <Text style={styles.modal.textName}>
                           Jaya
                       </Text>
                    <View style={styles.modal.line}>
                         <View style={styles.modal.valueContainer}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Time                     :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {times}
                            </Text>
                        </View>
                        <View style={styles.modal.valueContainer}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Organitation        :  
                            </Text>
                            <View style={{flexDirection:'row',flexWrap:"wrap",width:200,}}>
                                <Text style={{fontSize:16,color:'white',paddingLeft:10,}}>
                                        {organitation}
                                </Text>
                            </View>
                           
                        </View>
                        <View style={styles.modal.valueContainer}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Actions                :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {actions}
                            </Text>
                        </View>
                        <View style={styles.modal.valueContainer}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Contact Person  :  
                            </Text>
                                <View style={{flexDirection:'row',flexWrap:"wrap",width:200,}}>
                                    <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                        {contact +`(${contact2})`}
                                    </Text>
                                </View>
                           
                        </View>
                        <View style={styles.modal.valueContainer}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Progres               :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {progress}
                            </Text>
                        </View>
                        <View style={styles.modal.valueContainer}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Next Plan            :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {nextPlan}
                            </Text>
                        </View>
                        <View style={styles.modal.valueContainer}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Result                  :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {result2}
                            </Text>
                            
                        </View>
                        <View style={{flexDirection:'row',paddingTop:90,paddingHorizontal:20,alignItems:"center",marginVertical:-50,width:'100%',justifyContent:"space-between"}}>
                                <Button title="cancel"  color="#c0392b" onPress={()=>dispatch({type:"MODAL_CLOSE"})}/>
                                <Button title="    Done    "  color="#1abc9c" onPress={()=>onInsert()}/>
                             </View>
                       
                    </View>

                </View>
            </Modal>
            <ScrollView style={{marginTop:20}}>
                <View style={{paddingTop:20,left:10}}>
                    <Text style={styles.body.title}>
                      *  Organitation
                    </Text>
                    <MyTextInput  
                     onChangeText={(value)=>{dispatch({type:"INPUT_ORGANITATION",payload1:value})}}
                     value={organitation}
                        />
                </View>
                <View style={{left:10,paddingTop:25}}>
                    <Text style={styles.body.title}>
                        Actions
                    </Text>
                    <View style={{marginTop:20,left:-5}}>
                        <RadioGroup getChecked={(value)=>dispatch({type:"INPUT_ACTIONS",payload2:value})} 
                        IconStyle={{fontSize:30,backgroundColor:"white",}}
                        coreStyle={{fontSize:21,color:'#1abc9c'}}
                        RadioGroupStyle={{flexDirection:"row"}}
                        labelStyle={{fontSize:16,color:"#7f8c8d"}}>
                            <Radio iconName={"lens"} label={"Visit "} value={"Visit"} />
                            <Radio iconName={"lens"} label={"Phone Call"} value={"Phone Call"}/>
                            <Radio iconName={"lens"} label={"Interview"} value={"InterView"}/>
                        </RadioGroup>   
                    </View>
              </View>
                <View style={{paddingTop:30,left:10}}>
                        <Text style={styles.body.title}>
                           *  Contact Person
                        </Text>
                        <MyTextInput value={contact} onChangeText={(value)=>dispatch({type:"INPUT_CONTACTPERSON",payload3:value})}/>
                        <MyTextInput  value={contact2} onChangeText={(value)=>dispatch({type:"INPUT_CONTACTPERSON2",payload6:value})}/>
                        
                    </View>
                    <View style={{left:10,width:"95%",paddingTop:30}}>
                        <Text style={styles.body.title}>
                            *  Progres
                        </Text>
                        <ProgressSteps progressBarColor="#7f8c8d" 
                        disabledStepIconColor="#7f8c8d" 
                        borderWidth={2}
                        activeStepIconBorderColor="#1abc9c"
                        completedProgressBarColor="#1abc9c"
                        activeStepIconColor="gray"
                        completedStepIconColor="#1abc9c"
                        activeLabelColor="#1abc9c"                   > 
                        <ProgressStep label="20%" 
                        nextBtnTextStyle={styles.stepsNext}
                        previousBtnTextStyle={styles.stepsPrev}
                         onNext={()=>dispatch({type:"INPUT_PROGRESS",payload:'20 %'})}
                         />
                        <ProgressStep label="40%" 
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onNext={()=>dispatch({type:"INPUT_PROGRESS",payload:'40 %'})}
                         onPrevious={()=>dispatch({type:"INPUT_PROGRESS",payload:'0%'})}
                         />
                        <ProgressStep label="60%"
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onNext={()=>dispatch({type:"INPUT_PROGRESS",payload:'60 %'})}
                         onPrevious={()=>dispatch({type:"INPUT_PROGRESS",payload:'20 %'})}
                         />
                        <ProgressStep label="80%" 
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onNext={()=>dispatch({type:"INPUT_PROGRESS",payload:'80 %'})}
                         onPrevious={()=>dispatch({type:"INPUT_PROGRESS",payload:'40 %'})}
                         />
                        <ProgressStep label="100%" 
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onSubmit={()=>dispatch({type:"INPUT_PROGRESS",payload:'100 %'})}
                         onPrevious={()=>dispatch({type:"INPUT_PROGRESS",payload:'60 %'})}
                         />
                    </ProgressSteps>
                    </View>
                    <View style={{left:10}}>
                        <Text style={{...styles.body.title,paddingBottom:20 }}> 
                           * Next  Plan
                        </Text>
                        <MyTextInput  value={nextPlan} onChangeText={(value)=>dispatch({type:"INPUT_NEXTPLAN",payload4:value})}/>
                    </View>
                    <View style={{paddingTop:20,left:10}}>
                        <Text style={styles.body.title}>
                            * Result
                        </Text>
                    <MyTextInput value={result2} onChangeText={(value)=>dispatch({type:"INPUT_RESULT",payload5:value})}/>
                    </View>
                    <View style={styles.buttomButton}>
                        <View style={{width:"100%",flexDirection:'row',justifyContent:'space-between',top:-10}}>
                            <Button title="Clear"  color="#ee5253" onPress={()=>dispatch({type:"INPUT_CLEAR"})}/>
                            <Button title="Submit"  color="#1abc9c" onPress={()=>dispatch({type:"MODAL_OPEN"})}/>
                        </View>
                     </View>
            </ScrollView>
            
            </KeyboardAvoidingView>
        </View>
            )
    }
    export  default Insert;

    const styles = {
        
        stepsNext:{
            color:"#1abc9c"
            
        },
        stepsPrev:{
            color:"#ee5253",
           
        },
        buttomButton:{
            height:120,
            width:'100%',
            alignItems:"center",
            flexDirection:'row',
            justifyContent:'flex-end',
            paddingHorizontal:40,
        },
        body:{
            title:{
                fontSize:19,
                color:'#7f8c8d'
            }
        },
        modal:{
            body:{
                width:'95%',
                height:"89%",
                top:15,
                backgroundColor:"#2c3e50",
                elevation:5,
                alignItems:'center' ,
                borderRadius:10,
                alignSelf:"center",
                justifyContent:'center',
                marginTop:10,
                elevation:8,
            },
            head:{
                alignSelf:'center',
                alignItems:'center',
                justifyContent:'center',
                width:100,
                height:100,
                backgroundColor:'white',
                borderRadius:60,
                marginTop:70,
                elevation:5
            },
            textName:{
                fontSize:35,
                alignSelf:"center",
                color:'white'
            },
            textIcon:{
                color:'gray',
                fontSize:20,
                fontWeight:'600',
            },
            line:{
                width:'100%',
                height:'80%',
                borderTopWidth:0.3,
                borderTopColor:'white',
                marginTop:20
            },
            valueContainer:{
                flexDirection:"row",
                marginHorizontal:10,
                marginTop:30
            }
        }
       
    }
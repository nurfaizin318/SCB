import React,{useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import RadioGroup,{Radio} from "react-native-radio-input";

import {
    View,
    Text,
    ScrollView,
    Button,
    KeyboardAvoidingView
       } from 'react-native';

import {TextInputs,Modals} from '../../Component';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import AsyncStorage from '@react-native-community/async-storage';

const Insert = (props)=>{

         const [visible ,setVisible ]= useState(false);

        const dispatch =useDispatch();
        const organitation =useSelector(state=>state.DataReducer.organitation);
        const actions =useSelector(state=>state.DataReducer.actions);
        const contact= useSelector(state =>state.DataReducer.contactPerson);
        const contact2= useSelector(state =>state.DataReducer.contactPerson2);
        progress = useSelector(state=>state.DataReducer.progress);
        nextPlan = useSelector(state=>state.DataReducer.nextPlan);
        result2 = useSelector(state=>state.DataReducer.result);
        Data = useSelector(state=>state.DataReducer.data);

             const date = new Date();
             const id =   date.getTime();
             const dates =  date.getDate();
             const month =  date.getMonth() + 1; //Current Month
             const year = date.getFullYear(); //Current Year
             const times=  date.toLocaleTimeString();
             const TimeNow = dates +'/'+month+'/'+year +' '+times;

        const onSave = async () =>{
              await dispatch({type:"INPUT_INSERT",timeNow:TimeNow,id:id});
                 try{
                   await AsyncStorage.setItem('Data',JSON.stringify(Data));
                   await setVisible(!visible);
                   await props.navigation.navigate('Home'); 
                 console.log(Data)
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
            <Modals 
            isVisible={visible}
            organitation={organitation}
            actions={actions}
            nextPlan={nextPlan}
            times={times}
            progress={progress}
            contact={contact}
            contact2={contact2}
            result2={result2}
            navigation={props.navigation}
            onSave = {()=>onSave()}
            onCloseModal={()=>setVisible(!visible)}
            />
            <ScrollView style={{marginTop:20}}>
                <View style={{paddingTop:20,left:10}}>
                    <Text style={styles.body.title}>
                      *  Organitation
                    </Text>
                    <TextInputs  
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
                        <TextInputs 
                            value={contact} 
                            onChangeText={(value)=>dispatch({type:"INPUT_CONTACTPERSON",payload3:value})}
                            placeholder="Nama"
                            />
                        <TextInputs  
                            value={contact2}
                            onChangeText={(value)=>dispatch({type:"INPUT_CONTACTPERSON2",payload6:value})}
                            placeholder="Jabatan" 
                            />
                        
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
                        <Text style={{...styles.body.title}}> 
                           * Next  Plan
                        </Text>
                        <TextInputs  value={nextPlan} onChangeText={(value)=>dispatch({type:"INPUT_NEXTPLAN",payload4:value})}/>
                    </View>
                    <View style={{paddingTop:20,left:10}}>
                        <Text style={styles.body.title}>
                            * Result
                        </Text>
                    <TextInputs 
                    value={result2} onChangeText={(value)=>dispatch({type:"INPUT_RESULT",payload5:value})}/>
                    </View>
                    <View style={styles.buttomButton}>
                        <View style={{width:"100%",flexDirection:'row',justifyContent:'space-between',top:-10}}>
                            <Button title="Clear"  color="#ee5253" onPress={()=>dispatch({type:"INPUT_CLEAR"})}/>
                            <Button title="Submit"  color="#1abc9c" onPress={()=>setVisible(!visible)}/>
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
                color:'#7f8c8d',
                
                
            }
        },
        
       
    }
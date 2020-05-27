import React,{useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import RadioGroup,{Radio} from "react-native-radio-input";

import {
    View,
    Text,
    ScrollView,
    Button,
    KeyboardAvoidingView,
    Alert
       } from 'react-native';

import {TextInputs,Modals} from '../../Component';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Dark} from '../../Utils'

const Insert = (props)=>{

        const dispatch =useDispatch();
         organitation =useSelector(state=>state.DataReducer.organitation);
         actions =useSelector(state=>state.DataReducer.actions);
         contact1= useSelector(state =>state.DataReducer.contact1);
         contact2= useSelector(state =>state.DataReducer.contact2);
         progress = useSelector(state=>state.DataReducer.progress);
         nextPlan = useSelector(state=>state.DataReducer.nextPlan);
         result = useSelector(state=>state.DataReducer.result)
         Data = useSelector(state=>state.DataReducer.data);

        let date = new Date();
        let  id =   date.getTime();
        let  dates =  date.getDate();
        let  month =  date.getMonth() + 1; //Current Month
        let  year = date.getFullYear(); //Current Year
        let  times=  date.toLocaleTimeString();
        let  TimeNow = dates +'/'+month+'/'+year +' '+times;

        const onSave = async () =>{
                 try{
                   await dispatch({type:"INPUT_INSERT",timeNow:TimeNow,id:id});
                   await AsyncStorage.setItem('Data', JSON.stringify(Data));
                   await props.navigation.navigate('Home'); 
                 }catch(e){
                     alert(e)
                 }
                 

       }

      const Alerts = () =>{
          Alert.alert(
              "",
              "Are you sure  ?",
              [
                {text:"No",
                    onPress:()=>{}
                },
                {
                    text:"Yes",
                    onPress:()=>{onSave()}
                }
             ]
          )
      }
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding">
            <View style={styles.header.container}>
                <TouchableOpacity style={styles.header.back}
                onPress={()=>{props.navigation.goBack(null)}}
                >
                   <FontAwesome5Icon name="arrow-left" size={20} color="white" />
                </TouchableOpacity>
                <View style={styles.header.center}>
                       <Text style={styles.header.text}>Insert</Text>
                </View>
            </View>
            
            <ScrollView style={{marginTop:20}}>
                <View style={styles.organitation.container}>
                     <View style={styles.title.container}>
                         <Text style={styles.title.important}>
                             *
                         </Text>
                         <Text style={styles.title.text}>organitation</Text>
                     </View>
                    <TextInputs  
                     onChangeText={(value)=>{dispatch({type:"INPUT_ORGANITATION",payload1:value})}}
                     value={organitation}
                        />
                </View>
                <View style={styles.actions.container}>
                <View style={styles.title.container}>
                         <Text style={styles.title.important}>
                             *
                         </Text>
                         <Text style={styles.title.text}>action</Text>
                     </View>
                    <View style={styles.actions.containerRadio}>
                        <RadioGroup 
                        getChecked={(value)=>dispatch({type:"INPUT_ACTIONS",payload2:value})} 
                        IconStyle={{fontSize:30,backgroundColor:"white",}}
                        coreStyle={{fontSize:21,color:'#1abc9c'}}
                        RadioGroupStyle={{flexDirection:"row"}}
                        labelStyle={{fontSize:16,color:"#7f8c8d"}}
                        >
                            <Radio iconName={"lens"} label={"Visit "} value={"Visit"} />
                            <Radio iconName={"lens"} label={"Phone Call"} value={"Phone Call"}/>
                            <Radio iconName={"lens"} label={"Interview"} value={"InterView"}/>
                        </RadioGroup>   
                    </View>
              </View>
                <View style={styles.contact.container}>
                <View style={styles.title.container}>
                         <Text style={styles.title.important}>
                             *
                         </Text>
                         <Text style={styles.title.text}>contact</Text>
                     </View>
                        <TextInputs 
                            value={contact1} 
                            onChangeText={(value)=>dispatch({type:"INPUT_CONTACTPERSON",payload3:value})}
                            placeholder="Nama"
                            />
                        <TextInputs  
                            value={contact2}
                            onChangeText={(value)=>dispatch({type:"INPUT_CONTACTPERSON2",payload6:value})}
                            placeholder="Jabatan" 
                            />
                        
                    </View>
                    <View style={styles.progress.container}>
                    <View style={styles.title.container}>
                         <Text style={styles.title.important}>
                             *
                         </Text>
                         <Text style={styles.title.text}>progress</Text>
                     </View>
                     <View style={styles.progress.body}>
                     <ProgressSteps progressBarColor="#7f8c8d" 
                        disabledStepIconColor="#7f8c8d" 
                        borderWidth={1}
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
                    </View>
                    <View style={styles.nextPlan.container}>
                    <View style={styles.title.container}>
                         <Text style={styles.title.important}>
                             *
                         </Text>
                         <Text style={styles.title.text}>Next Plan</Text>
                     </View>
                        <TextInputs  value={nextPlan} onChangeText={(value)=>dispatch({type:"INPUT_NEXTPLAN",payload4:value})}/>
                    </View>
                    <View style={styles.result.container}>
                    <View style={styles.title.container}>
                         <Text style={styles.title.important}>
                             *
                         </Text>
                         <Text style={styles.title.text}>Result</Text>
                     </View>
                    <TextInputs 
                    value={result} onChangeText={(value)=>dispatch({type:"INPUT_RESULT",payload5:value})}/>
                    </View>
                    <View style={styles.buttomButton}>
                        <View style={styles.buttomButton.container}>
                            <Button title="Clear"  color={Dark.lightOrange} onPress={()=>alert(organitation)}/>
                            <Button title="Submit"  color={Dark.lightGreen} onPress={()=>{Alerts()}}/>
                        </View>
                     </View>
            </ScrollView>
            
            </KeyboardAvoidingView>
        </View>
            )
    }
    export  default Insert;

    const styles = {

        container:{
            width:"100%",
            height:"100%",
            backgroundColor:Dark.black20
        },
        header:{
            container:{
                alignItems:"center",
                flexDirection:"row",
               borderBottomWidth:0.5,
                borderBottomColor:'black',
                height:50
            },back:{
                width:40,
                height:40,
                justifyContent:"center",
                alignItems:"center",
            },
            center:{
                width:'80%',
                height:40,
                alignItems:"center",
                justifyContent:"center",
            },
            text:{
                fontSize:20,
                color:"white",

            }
        },
        organitation:{
            container:{
                padding:15,
                height:130,
               borderBottomWidth:0.5,
                borderBottomColor:'black'
            }
        },
        actions:{
            container:{
                padding:10,
                width:'100%',
                height:150,
               borderBottomWidth:0.5,
                borderBottomColor:'black',
                marginTop:10
               
            },
            containerRadio:{
                marginTop:40,
            }
        },
        contact:{
            container:{
                padding:15,
                width:"100%",
                height:190,
               borderBottomWidth:0.5,
                borderBottomColor:'black',
                marginTop:10

            }
        },
        progress:{
            container:{
                width:"100%",
               borderBottomWidth:0.5,
                borderBottomColor:'black',
                height:230,
                marginTop:10,
                padding:10
            }, 
            body:{
                width:'80%',
                height:'100%',
                alignSelf:"center"
              }
        },
        nextPlan:{
            container:{
                width:"100%",
                borderBottomColor:'black',
                height:120,
                padding:10,
                borderBottomWidth:0.5,
                borderBottomColor:'black',
                marginTop:10,
                
            }
        },
        result:{
            container:{
               borderBottomWidth:0.5,
                borderBottomColor:'black',
                height:120,
                padding:15,
                marginTop:10,
            }
        },
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
            paddingHorizontal:40,

            container:{
                width:"100%",
                flexDirection:'row',
                justifyContent:'space-between',
                top:-25
            }
        },
        title:{
            container:{
            flexDirection:"row"
            },
            important:{
            color:"red",
            fontSize:15
            },
            text:{
            fontSize:16,
            marginLeft:10,
            color:"white"
            }
        }
        
       
    }
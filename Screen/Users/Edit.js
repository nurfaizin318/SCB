import React,{useState,useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import RadioGroup,{Radio} from "react-native-radio-input";

import {
    View,
    Text,
    ScrollView,
    Button,
    KeyboardAvoidingView,
    Alert,
       } from 'react-native';

import {TextInputs,} from '../../Component';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {Dark} from '../../Utils'

const Edit = (props)=>{

        const dispatch =useDispatch();
         dataFromState = useSelector(state=>state.DataReducer.data);

       
                [organitation,setOrganitation]= useState("");
                const [actions,setActions] =useState("");
                const [contact1,setContact1]= useState("");
                const [contact2,setContact2] = useState("");
                const [progress,setProgress] = useState("");
                const [nextPlan,setNextPlan] = useState("");
                const [result,setResult] = useState("");
                const [id,setId]= useState("");
                const [time,setTime] = useState("");
          [data,setData] = useState([])


        const onSave = async () =>{
         
                    let newData={
                                organitation:organitation,
                                actions:actions,
                                contact1:contact1,
                                contact2:contact2,
                                progress:progress,
                                nextPlan:nextPlan,
                                result:result,
                                id:id,
                                time:time
                               }
        
              await  data.splice(props.route.params.index,1,newData)
                dispatch({type:"EDIT",payload:data})
                console.log(data)
                props.navigation.navigate('List',{refresh:true});       }


    useEffect(()=>{
            setOrganitation(props.route.params.organitation);
            setActions(props.route.params.actions);
            setContact1(props.route.params.contact1);
            setContact2(props.route.params.contact2);
            setProgress(props.route.params.progress);
            setNextPlan(props.route.params.nextPlan);
            setResult(props.route.params.result);
            setId(props.route.params.id);
            setTime(props.route.params.time)
            setData(dataFromState)
        
    },[])

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
            <ScrollView style={{marginTop:20}}>
                <View style={styles.organitation.container}>
                     <View style={styles.title.container}>
                         <Text style={styles.title.important}>
                             *
                         </Text>
                         <Text style={styles.title.text}>organitation</Text>
                     </View>
                    <TextInputs  
                    value={organitation}
                     onChangeText={(text)=>{setOrganitation(text)}}
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
                        getChecked={(value)=>{setActions(value)}} 
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
                            onChangeText={(value)=>setContact1(value)}
                            placeholder="Nama"
                            />
                        <TextInputs  
                            value={contact2}
                            onChangeText={(value)=>{setContact2(value)}}
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
                        <ProgressSteps 
                        progressBarColor="#7f8c8d" 
                        disabledStepIconColor="#7f8c8d" 
                        borderWidth={1}
                        activeStepIconBorderColor="#1abc9c"
                        completedProgressBarColor="#1abc9c"
                        activeStepIconColor="gray"
                        completedStepIconColor="#1abc9c"
                        activeLabelColor="#1abc9c"               
                        > 
                        <ProgressStep label="20%" 
                        nextBtnTextStyle={styles.stepsNext}
                        previousBtnTextStyle={styles.stepsPrev}
                         onNext={()=>setProgress('20 %')}
                         />
                        <ProgressStep label="40%" 
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onNext={()=>setProgress('40%')}
                         onPrevious={()=>setProgress('0%')}
                         />
                        <ProgressStep label="60%"
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onNext={()=>setProgress('60%')}
                         onPrevious={()=>setProgress('20%')}
                         />
                        <ProgressStep label="80%" 
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onNext={()=>setProgress('80%')}
                         onPrevious={()=>setProgress('40%')}
                         />
                        <ProgressStep label="100%" 
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onSubmit={()=>setProgress('100%')}
                         onPrevious={()=>setProgress('60%')}
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
                        <TextInputs  
                        value={nextPlan}
                         onChangeText={(value)=>{setNextPlan(value)}}
                         />
                    </View>
                    <View style={styles.result.container}>
                    <View style={styles.title.container}>
                         <Text style={styles.title.important}>
                             *
                         </Text>
                         <Text style={styles.title.text}>Result</Text>
                     </View>
                    <TextInputs 
                    value={result}
                   onChangeText={(value)=>{setResult(value)}}/>
                    </View>
                    <View style={styles.buttomButton}>
                        <View style={styles.buttomButton.container}>
                            <Button title="Clear"  color={Dark.lightOrange} onPress={()=>alert(organitation)}/>
                            <Button title="Submit"  color={Dark.lightGreen} onPress={()=>{onSave()}}/>
                        </View>
                     </View>
            </ScrollView>
            
            </KeyboardAvoidingView>
        </View>
            )
    }
    export  default Edit;

    const styles = {

        container:{
            flex:1,
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
                padding:10,
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
import React,{useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'

import RadioGroup,{Radio} from "react-native-radio-input";

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Button,
    Modal
       } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MyTextInput from '../../Component/MyTextInput';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const Insert = (props)=>{
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    const times = date +'/'+month+'/'+year
   
      const dispatch =useDispatch();
      const organitation =useSelector(state=>state.Insert.organitation);
      const actions =useSelector(state=>state.Insert.actions);
      const contact= useSelector(state =>state.Insert.contactPerson);
      progress = useSelector(state=>state.Insert.progress)
      nextPlan = useSelector(state=>state.Insert.nextPlan)
      result2 = useSelector(state=>state.Insert.result)
      isVisible= useSelector(state=>state.Modal.isVisible)
      isEditable= useSelector(state=>state.Insert.isEditable)
      data = useSelector(state=>state.Insert.data)
      
      const push =  async () =>{
        const ItemsToSaved ={'time':times,'organitation' : organitation,'actions': actions,'contact':contact,'progres':progress,'nextPlan':nextPlan,'result':result};
        const existingItems = await AsyncStorage.getItem('Items');
         
      }  
      
      const onEdit = (nextPlan) =>{
          if(nextPlan === 'others'){
            dispatch({type:"ON_OTHERS"})
        }
        else{
            dispatch({type:"ON_OTHERS"})

        }
      }

      const onInsert = async () =>{
          await dispatch({type:"INPUT_INSERT"});
          await dispatch({type:"MODAL_CLOSE"});
          await props.navigation.navigate("Home")
          
      }
       
    return(
        <View style={{flex:1,backgroundColor:'#1e272e'}}>
            <View style={{alignItems:"center",top:20}}>
                 <Text style={styles.text} >{times}</Text>
            </View>
            <Modal 
            visible={isVisible}
            animationType="slide"
            transparent={true}
            >
                <View style={styles.modal}>
                    <View style={styles.headModal}>
                         <FontAwesome5 name="thumbs-up" size={30} color="#1e272e" />
                         <Text style={{color:'#1e272e',fontSize:25}}>Great</Text>
                    </View>
                    <Text style={{fontSize:35,alignSelf:"center",color:'white',top:10}}>
                           Jaya
                       </Text>
                    <View style={{width:'100%',height:'70%',borderTopWidth:0.3,borderTopColor:'white',marginTop:20}}>
                    <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Time                     :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {times}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30,}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Organitation        :  
                            </Text>
                            <View style={{flexDirection:'row',flexWrap:"wrap",width:200,}}>
                                <Text style={{fontSize:16,color:'white',paddingLeft:10,}}>
                                        {organitation}
                                </Text>
                            </View>
                           
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Actions                :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {actions}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Contact Person  :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {contact}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Progres               :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {progress}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Next Plan            :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {nextPlan}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Result                  :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {result2}
                            </Text>
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row',paddingTop:100,paddingHorizontal:20,top:-20}}>
                            <Button title="cancel"  color="#c0392b" onPress={()=>dispatch({type:"MODAL_CLOSE"})}/>
                            <Button title="    Done    "  color="#1abc9c" onPress={()=>onInsert()}/>
                        </View>
                    </View>

                </View>
            </Modal>
            <ScrollView style={{marginTop:20}}>
                <View style={{paddingTop:20,left:10}}>
                    <Text style={styles.text}>
                      *  Organitation
                    </Text>
                    <MyTextInput  value={organitation} onChangeText={(value)=>dispatch({type:"INPUT_ORGANITATION",payload1:value})}/>
                </View>
                <View style={{left:10}}>
                    <Text style={styles.text}>
                      *  Actions
                    </Text>
                    <View style={{marginTop:30,left:-5}}>
                        <RadioGroup getChecked={(value)=>dispatch({type:"INPUT_ACTIONS",payload2:value})} 
                        IconStyle={{fontSize:30,backgroundColor:"white",}}
                        coreStyle={{fontSize:21,color:'#1abc9c'}}
                        RadioGroupStyle={{flexDirection:"row"}}
                        labelStyle={{fontSize:16,color:"white"}}>
                            <Radio iconName={"lens"} label={"Visit "} value={"Visit"} />
                            <Radio iconName={"lens"} label={"Phone Call"} value={"Phone Call"}/>
                            <Radio iconName={"lens"} label={"Interview"} value={"InterView"}/>
                        </RadioGroup>   
                    </View>
              </View>
                <View style={{paddingTop:20,left:10}}>
                        <Text style={styles.text}>
                           *  Contact Person
                        </Text>
                        <MyTextInput  value={contact} onChangeText={(value)=>dispatch({type:"INPUT_CONTACTPERSON",payload3:value})}/>
                        <MyTextInput  />
                    </View>
                    <View style={{left:10,width:"95%"}}>
                        <Text style={styles.text}>
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
                         onPrevious={()=>dispatch({type:"INPUT_PROGRESS",payload:'belum ada progress'})}
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
                        <Text style={{...styles.text,paddingBottom:20 }}> 
                           * Next  Plan
                        </Text>
                        <RadioGroup getChecked={(value)=>dispatch({type:"INPUT_NEXTPLAN",payload4:value},onEdit())}
                        IconStyle={{fontSize:30,backgroundColor:"white",}}
                        coreStyle={{fontSize:20}}
                        labelStyle={{fontSize:16,color:"white"}}
                        >
                            <Radio iconName={"lens"} label={"Keep Contact"} value={"Keep Contact"} />
                            <Radio iconName={"lens"} label={"Survey"} value={"Survey"}/>
                            <Radio iconName={"lens"} label={"Preview Program"} value={"Preview Program"}/>
                            <Radio iconName={"lens"} label={"Others"} value={'others'} />
                        </RadioGroup>  
                        <MyTextInput  editable={isEditable} onChangeText={(value)=>dispatch({type:"INPUT_NEXTPLAN",payload4:value})}/>
                    </View>
                    <View style={{paddingTop:20,left:10}}>
                        <Text style={styles.text}>
                            * Result
                        </Text>
                    <MyTextInput  value={result2} onChangeText={(value)=>dispatch({type:"INPUT_RESULT",payload5:value})}/>
                    </View>
            </ScrollView>
            <View style={styles.buttomButton}>
                <View style={{width:"100%",flexDirection:'row',justifyContent:'space-between'}}>
                <Button title="Clear"  color="#ee5253" onPress={()=>dispatch({type:"INPUT_CLEAR"})}/>
                <Button title="Submit"  color="#1abc9c" onPress={()=>dispatch({type:"MODAL_OPEN"})}/>
                </View>
            </View>
        </View>
            )
    }
    export  default Insert;

    const styles = StyleSheet.create({
        text:{
            color:'#bdc3c7',
            fontSize:20,
            fontWeight:'600',
            marginLeft:5,
        },
        stepsNext:{
            color:"#1abc9c"
            
        },
        stepsPrev:{
            color:"#ee5253",
           
        },
        buttomButton:{
            height:70,
            width:'100%',
            alignItems:"center",
            flexDirection:'row',
            justifyContent:'flex-end',
            paddingHorizontal:40,
            top:-10
        },
        modal:{
            width:'95%',
            height:"95%",
            top:15,
            backgroundColor:"#2c3e50",
            elevation:5,
            alignItems:'center' ,
            borderRadius:5,
            alignSelf:"center",
            justifyContent:'center'
        },
        headModal:{
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
            width:100,
            height:100,
            backgroundColor:'white',
            borderRadius:60,
            marginTop:20,
            elevation:5
        }
       

    })
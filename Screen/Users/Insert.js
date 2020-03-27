import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {View,Text,ScrollView,StyleSheet,Button} from 'react-native';
import MyTextInput from '../../Component/MyTextInput';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Modal from 'react-native-modal'

const Insert = ()=>{
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    const times = date +'/'+month+'/'+year
    var radio_actions = [
        {label: 'Visit', value: 'visit',index:1 },
        {label: 'Phone Call', value: 'phone Call' ,index:2 },
        {label: 'Text', value: 'text' ,index:3 },

      ];
      var radio_plan= [
        {label: 'Keep Contact', value: 'Keep Contact' },
        {label: 'Survey', value: 'Survey' },
        {label: 'Review Program', value: 'Review Program' },
        {label: 'Others', value: 'Others' },

      ];
      const dispatch =useDispatch();
      const organitation =useSelector(state=>state.Insert.organitation);
      const actions =useSelector(state=>state.Insert.actions);
      const index1 = useSelector(state =>state.Insert.index1);
      const index2 = useSelector(state =>state.Insert.index2);
      const contact= useSelector(state =>state.Insert.contactPerson);
      progress = useSelector(state=>state.Insert.progress)
      nextPlan = useSelector(state=>state.Insert.nextPlan)
      result = useSelector(state=>state.Insert.result)
      isVisible= useSelector(state=>state.Modal.isVisible)


       
    return(
        <View style={{flex:1,backgroundColor:'#1e272e'}}>
            <View style={{alignItems:"center",top:20}}>
                 <Text style={styles.text} >{times}</Text>
            </View>
            <Modal 
            isVisible={isVisible}
            animationIn="zoomInUp"
            >
                <View style={{ flex:1,backgroundColor:"#1e272e",alignItems:'center' }}>
                    <View style={{alignSelf:'center',justifyContent:'center',width:100,height:100,backgroundColor:'white',borderRadius:60,marginTop:20}}>
                       <Text style={{fontSize:30,alignSelf:"center"}}>
                           great
                       </Text>

                    </View>
                    <Text style={{fontSize:35,alignSelf:"center",color:'white'}}>
                           Jaya
                       </Text>
                    <View style={{width:'100%',height:'70%',borderTopWidth:0.3,borderTopColor:'white',marginTop:20}}>
                    <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Time :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {times}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Organitation :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {organitation}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Actions :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {actions}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Contact Person :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {contact}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Progres :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {progress}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'white'}}>
                            Next Plan :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {nextPlan}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:30}}>
                            <Text style={{fontSize:16,color:'#576574'}}>
                            Result :  
                            </Text>
                            <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
                                    {result}
                            </Text>
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row',paddingTop:100,paddingHorizontal:20}}>
                            <Button title="cancel"  color="tomato" onPress={()=>dispatch({type:"MODAL_CLOSE"})}/>
                            <Button title="    Done    "  color="#1abc9c" onPress={()=>dispatch({type:"INPUT_DONE"})}/>
                        </View>
                    </View>

                </View>
            </Modal>
            <ScrollView style={{marginTop:20}}>
                <View style={{paddingTop:20,left:10}}>
                    <Text style={styles.text}>
                      *  Organitation
                    </Text>
                    <MyTextInput onChangeText={(value)=>dispatch({type:"INPUT_ORGANITATION",payload:value})}/>
                </View>
                <View style={{left:10}}>
                    <Text style={styles.text}>
                      *  Actions
                    </Text>
                    <View style={{marginTop:30,left:-5}}>
                    <RadioForm
                            formHorizontal={true}
                            animation={true}
                            
                            >
                            {
                                radio_actions.map((obj, i) => (
                                <RadioButton labelHorizontal={true} key={i} >
                                    <RadioButtonInput
                                    obj={obj}
                                    initial={0}
                                    index={i}
                                    isSelected={index1==i}
                                    onPress={(value,index)=>dispatch({type:"INPUT_ACTIONS",payload:value,pay:index})}
                                    borderWidth={1}
                                    buttonInnerColor={'#16a085'}
                                    buttonOuterColor={obj === i ? 'white' : 'white'}
                                    buttonSize={12}
                                    buttonOuterSize={20}
                                    buttonStyle={{color:'red'}}
                                    buttonWrapStyle={{marginLeft: 10}}
                                    />
                                    <RadioButtonLabel
                                    obj={obj}
                                    index={i}
                                    labelHorizontal={true}
                                    onPress={(value)=>value}
                                    labelStyle={{fontSize: 15, color: 'white'}}
                                    />
                            </RadioButton>
                            ))
                        }  
                        </RadioForm>
                    </View>
              </View>
                <View style={{paddingTop:20,left:10}}>
                        <Text style={styles.text}>
                           *  Contact Person
                        </Text>
                        <MyTextInput onChangeText={(value)=>dispatch({type:"INPUT_CONTACTPERSON",payload:value})}/>
                        <MyTextInput/>
                    </View>
                    <View style={{left:10,width:"95%"}}>
                        <Text style={styles.text}>
                            *  Progres
                        </Text>
                         
                        <ProgressSteps progressBarColor="#7f8c8d" disabledStepIconColor="#7f8c8d" > 
                        <ProgressStep label="20%" 
                        nextBtnTextStyle={styles.stepsNext}
                        previousBtnTextStyle={styles.stepsPrev}
                         progressBarColor="#red"
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
                    <View style={{marginTop:30,left:10}}>
                        <Text style={styles.text }> 
                           * Next  Plan
                        </Text>
                    <RadioForm
                            formHorizontal={false}
                            animation={true}
                            >
                            {
                                radio_plan.map((obj, i) => (
                                <RadioButton labelHorizontal={true} key={i}  style={{paddingTop:20,paddingLeft:10}} >
                                    <RadioButtonInput
                                   obj={obj}
                                   index={i}
                                   isSelected={index2==i}
                                   onPress={(value,index)=>dispatch({type:"INPUT_NEXTPLAN",payload:value,pay:index})}
                                   borderWidth={1}
                                   buttonInnerColor={'#16a085'}
                                   buttonOuterColor={obj === i ? 'white' : 'white'}
                                   buttonSize={12}
                                   buttonOuterSize={20}
                                   buttonStyle={{}}
                                   buttonWrapStyle={{marginLeft: 10}}
                                    />
                                     <RadioButtonLabel
                                    obj={obj}
                                    index={i}
                                    labelHorizontal={true}
                                    onPress={(value,index)=>dispatch({type:"INPUT_NEXTPLAN",payload:value,pay:index})}
                                    labelStyle={{fontSize: 15, color: 'white'}}
                                    labelWrapStyle={{}}
                                    />
                                   
                            </RadioButton>
                            ))
                        }  
                        </RadioForm>
                    </View>
                    <View style={{paddingTop:20,left:10}}>
                        <Text style={styles.text}>
                            * Result
                        </Text>
                        <MyTextInput onChangeText={(value)=>dispatch({type:"INPUT_RESULT",payload:value})}/>
                    </View>

            </ScrollView>
            <View style={{height:70,width:'100%',alignItems:"center",flexDirection:'row',justifyContent:'flex-end',paddingHorizontal:40}}>
        
                <View style={{width:"100%",flexDirection:'row',justifyContent:'space-between'}}>
                <Button title="Clear"  color="#c0392b" onPress={()=>{}}/>
                <Button title="Submit"  color="#1abc9c" onPress={()=>dispatch({type:"MODAL_OPEN"})}/>
                </View>
            </View>

        </View>
            )
    }
    export  default Insert;

    const styles = StyleSheet.create({
        text:{
            color:'#d1d8e0',
            fontSize:20,
            fontWeight:'600',
            marginLeft:5,
        },
        stepsNext:{
            color:"tomato"
            
        },
        stepsPrev:{
            color:"#16a085",
           
        }
       

    })
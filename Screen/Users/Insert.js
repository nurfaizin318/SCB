import React, {useState}from 'react'

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {View,Text,ScrollView,StyleSheet,Button} from 'react-native';
import MyTextInput from '../../Component/MyTextInput';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const Insert = ()=>{
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var radio_props = [
        {label: 'Visit', value: 'visit' },
        {label: 'Phone Call', value: 'phone Call' },
        {label: 'Text', value: 'text' },

      ];

     

      const [radio,setRadio] = useState(0);
      const [steps,setSteps] = useState("");


      const nextStep= (val)=>{
       alert(val)

    }

       
    return(
        <View style={{flex:1,backgroundColor:'#1e272e'}}>
            <View style={{alignItems:"center",top:20}}>
                 <Text style={styles.text} >{date} / {month}   / {year}</Text>
            </View>
            <ScrollView style={{marginTop:20}}>
                <View style={{paddingTop:20,left:10}}>
                    <Text style={styles.text}>
                        Organitation
                    </Text>
                    <MyTextInput/>
                </View>
                <View style={{paddingTop:30,left:10}}>
                    <Text style={styles.text}>
                      Actions
                    </Text>
                    <View style={{marginTop:30,left:-5}}>
                    <RadioForm
                            formHorizontal={true}
                            animation={true}
                            >
                            {
                                radio_props.map((obj, i) => (
                                <RadioButton labelHorizontal={true} key={i} >
                                    <RadioButtonInput
                                    obj={obj}
                                    index={i}
                                    isSelected={radio === i}
                                    onPress={(value)=>alert(value)}
                                    borderWidth={1}
                                    buttonInnerColor={'#16a085'}
                                    buttonOuterColor={radio === i ? 'white' : 'white'}
                                    buttonSize={12}
                                    buttonOuterSize={20}
                                    buttonStyle={{}}
                                    buttonWrapStyle={{marginLeft: 10}}
                                    />
                                    <RadioButtonLabel
                                    obj={obj}
                                    index={i}
                                    labelHorizontal={true}
                                    onPress={(value)=>alert(value)}
                                    labelStyle={{fontSize: 15, color: 'white'}}
                                    labelWrapStyle={{}}
                                    />
                            </RadioButton>
                            ))
                        }  
                        </RadioForm>
                    </View>
              </View>
                <View style={{paddingTop:60,left:10}}>
                        <Text style={styles.text}>
                            Contact Person
                        </Text>
                        <MyTextInput/>
                        <MyTextInput/>
                    </View>
                    <View style={{paddingTop:60}}>
                        <Text style={styles.text}>
                            Progres
                        </Text>
                        <ProgressSteps progressBarColor="#7f8c8d" disabledStepIconColor="#7f8c8d" > 
                        <ProgressStep label="20%" 
                        nextBtnTextStyle={styles.stepsNext}
                        previousBtnTextStyle={styles.stepsPrev}
                         progressBarColor="#red"
                         onNext={()=>nextStep('20 %')}
                         />
                        <ProgressStep label="40%" 
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onNext={()=>nextStep('40 %')}
                         />
                        <ProgressStep label="60%"
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onNext={()=>nextStep('60 %')}
                         />
                        <ProgressStep label="80%" 
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onNext={()=>nextStep('80 %')}
                         />
                        <ProgressStep label="100%" 
                         nextBtnTextStyle={styles.stepsNext}
                         previousBtnTextStyle={styles.stepsPrev}
                         onSubmit={()=>nextStep('10 %')}
                         />
                            
                    </ProgressSteps>
                        <MyTextInput/>
                    </View>
                    <View style={{marginTop:30,left:10}}>
                        <Text style={styles.text }>Next  Plan</Text>
                    <RadioForm
                            formHorizontal={false}
                            animation={true}
                            >
                            {
                                radio_props.map((obj, i) => (
                                <RadioButton labelHorizontal={true} key={i}  style={{paddingTop:20,paddingLeft:10}} >
                                    <RadioButtonInput
                                   obj={obj}
                                   index={i}
                                   isSelected={radio === i}
                                   onPress={(value)=>alert(value)}
                                   borderWidth={1}
                                   buttonInnerColor={'#16a085'}
                                   buttonOuterColor={radio === i ? 'white' : 'white'}
                                   buttonSize={12}
                                   buttonOuterSize={20}
                                   buttonStyle={{}}
                                   buttonWrapStyle={{marginLeft: 10}}
                                    />
                                     <RadioButtonLabel
                                    obj={obj}
                                    index={i}
                                    labelHorizontal={true}
                                    onPress={(value)=>alert(value)}
                                    labelStyle={{fontSize: 15, color: 'white'}}
                                    labelWrapStyle={{}}
                                    />
                                   
                            </RadioButton>
                            ))
                        }  
                        </RadioForm>
                    </View>
                    <View style={{paddingTop:60,left:10}}>
                        <Text style={styles.text}>
                            Result
                        </Text>
                        <MyTextInput/>
                    </View>

            </ScrollView>
            <View style={{height:70,width:'100%',alignItems:"center",flexDirection:'row',justifyContent:'flex-end',paddingHorizontal:40}}>
        
                <View style={{width:70}}>
                    <Button title="Submit"  color="#c0392b" onPress={()=>nextStep()}/>
                </View>
           
            </View>

        </View>
            )
    }
    export  default Insert;

    const styles = StyleSheet.create({
        text:{
            color:'white',
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
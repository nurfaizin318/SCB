import React,{useState} from 'react';
import {View,
    Text,
    Dimensions,
    Modal,
    Button,
    Alert,
    ScrollView,
    Clipboard
    }

from 'react-native'
import { Dark } from '../../../Utils';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Modals = ({
            isVisible,
            data,
            navigation,
            onSave,
            onCloseModal
}) =>{
    
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const copyToClipboard = async () =>{
   
    // let copy =  data.map(items=>{
    //     Clipboard.setString(`\norganitation : ${items.organitation}`+
    //             `\nactions : ${items.actions}` +
    //             `\nprogress : ${items.progress}`+
    //             `\ncontact : ${items.contact1}` +
    //             `\nnext Plan : ${items.nextPlan}`+
    //             `\nresult : ${items.result}`+
    //             `\n-------------------------`)
    // })


         let copy = data.map(({organitation})=>{

             return ( organitation ) 

         });
              


    console.log(copy)
    }


    return (

            <Modal 
            visible={isVisible} 
            animationType={"fade"}
            transparent
            >
                <View style={styles.container(width,height)}>
                    <View style={styles.body.container(width,height)}>
                        <View style={styles.body.inner}>
                            <View style={{width:"100%",alignItems:'flex-end'}}>
                                <Button title="copy" onPress={()=>{copyToClipboard()}} color={Dark.black20} />
                            </View>
                        <ScrollView style={{height:400,marginTop:40}} showsVerticalScrollIndicator={false} >
                        {data.map(items=>{
                            return(
                        <View key={items.id} >

                                <Text style={styles.body.text}>organitation :    {items.organitation.trim().length < 10 ? 
                                     <Text style={styles.body.text}>{items.organitation}</Text>
                                   :
                                      <Text style={styles.body.text}>{items.organitation.slice(0,10)}...</Text>
                                 }</Text>
                                <Text style={styles.body.text}>actions          :   {items.actions} </Text>
                                <Text style={styles.body.text}>Next Plan     :   {items.nextPlan} </Text>
                                <Text style={styles.body.text}>times             :   {items.time} </Text>
                                <Text style={styles.body.text}>progress       :   {items.progress} </Text>
                                <Text style={styles.body.text}>contact         :   {items.contact1,items.contact2} </Text>
                                <Text style={styles.body.text}>result2          :   {items.result} </Text> 
                                <Text></Text>
                                <Text>-------------------------------------------------------</Text>
                        </View>
                            )
                        })}
                     </ScrollView>
                     </View>
                    <View style={styles.body.button}>
                        <Button title="close" onPress={onCloseModal} color={Dark.black20} />
                  </View>
                    </View>
                </View>

                
            </Modal>

    )
}

export default Modals;

const styles ={
    container :(width,height)=>{
        return {
        backgroundColor:"transparent",
        borderRadius:5,
        flex:1,
        alignItems:"center"
        
        }
    },
    body:{
      container: (width,height)=>{
            return{
            width:width/1.1,
            height:height/1.0,
            backgroundColor:"tomato",
            borderRadius:10,
            padding:20
                
            }
    },
    text:{
        fontSize:17,
    },
    button:{
      marginTop:25
    },
    inner:{
        height:"90%"
    }
        
}
}
import React from 'react';
import {View,
    Text,
    Dimensions,
    Modal,
    Button,
    Alert
    }

from 'react-native'

const Modals = ({
            isVisible,
            organitation,
            actions,
            nextPlan,
            times,
            progress,
            contact,
            contact2,
            result2,
            navigation,
            onSave,
            onCloseModal
}) =>{

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
            <Modal 
            visible={false} 
            animationType={"fade"}
            style={styles.container(height,width)}
            >
                <Text>organitation : {organitation}</Text>
                <Text>actions      : {actions} </Text>
                <Text>Next Plan    : {nextPlan} </Text>
                <Text>times        : {times} </Text>
                <Text>progress     : {progress} </Text>
                <Text>contact      : {contact,contact2} </Text>
                <Text>result2      : {result2} </Text>
                <View>
                <Button title="close" onPress={onCloseModal}/>
            </View>
            </Modal>
            
    )
}

export default Modals;

const styles ={
    container :(width,height)=>{
        return {
        width:width/1.2,
        height:height/1.1,
        backgroundColor:"red",
        borderRadius:5,
        
        }
    },
  
}
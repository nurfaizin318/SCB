import React from 'react';
import {View,
    Text,
    Dimensions,
    Modal,
    Button
    }

from 'react-native'

const CardRecent = ({
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
        <View tyle={styles.container(width,height)}>
            <Modal visible={isVisible}>
                <Text>organitation : {organitation}</Text>
                <Text>actions      : {actions} </Text>
                <Text>Next Plan    : {nextPlan} </Text>
                <Text>times        : {times} </Text>
                <Text>progress     : {progress} </Text>
                <Text>contact      : {contact,contact2} </Text>
                <Text>result2      : {result2} </Text>

            </Modal>
            <View>
                <Button title="close" onPress={()=>{}}/>
            </View>
        </View>
    )
}

export default CardRecent;

const styles ={
    container :(width,height)=>{
        return {
        width: width/3.5,
        height: height/4.5,
        backgroundColor:"red",
        marginTop:10,
        marginLeft:10,
        borderRadius:5,
        }
    }
}
import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    Dimensions,
    Animated
}

    from 'react-native';
import { Dark } from '../../../Utils'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';



const CardList = (props) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const animatedValue = useRef(new Animated.Value(0)).current;

    const animatedCard = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [height, 1]
    })
    useEffect(() => {
        Animated.sequence([
            Animated.delay(props.index * 200),
            Animated.spring(animatedValue, {
                toValue: 1,
                friction: 8,
                useNativeDriver: true
            })
        ]).start()
    }, [])
    return (

        <Animated.View style={{ ...styles.container(width, height), transform: [{ translateY: animatedCard }] }}>
            <View style={styles.header.container}>
                <View style={styles.header.time}>
                    <Text>{props.time}</Text>
                </View>
                <View style={styles.header.options}>
                    <TouchableOpacity style={styles.header.icon} onPress={props.onDelete}>
                        <FontAwesome5 name="trash" size={14} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.header.icon} onPress={() => {
                        props.navigation.navigate('Edit', {
                            index: props.index,
                            organitation: props.organitation,
                            actions: props.actions,
                            progress: props.progress,
                            contact1: props.contact1,
                            contact2: props.contact2,
                            nextPlan: props.nextPlan,
                            result: props.result,
                            id: props.id,
                            time: props.time,
                            status:props.status,
                        })
                    }}>
                        <FontAwesome5 name="pen" size={14} color="white" />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{ width: '100%', height: '80%', marginTop: 10, padding: 20 }}>
                <Text style={styles.body.text}>organitation :  {props.organitation} </Text>
                <Text style={styles.body.text}>actions         :  {props.actions}</Text>
                <Text style={styles.body.text}>contact         :  {props.contact1}</Text>
                <Text style={styles.body.text}>progress       :  {props.progress}%</Text>
                <Text style={styles.body.text}>next plan      :  {props.nextPlan}</Text>
                <Text style={styles.body.text}>result            :  {props.result}</Text>
                <Text style={styles.body.text}>status            :  {props.status}</Text>
            </View>
        </Animated.View>
    )
}

export default CardList;

const styles = {
    container: (width, height) => {
        return {
            width: width / 1.1,
            height: height / 3.2,
            backgroundColor: Dark.black30,
            marginTop: 10,
            elevation: 3,
            borderRadius: 7,

        }
    },
    header: {
        container: {
            width: "100%",
            height: 30,
            flexDirection: 'row',
            justifyContent: "space-between"

        },
        time: {
            width: '70%',
            height: 30,
            backgroundColor: Dark.lightOrange,
            borderBottomRightRadius: 30,
            justifyContent: "center",
            paddingLeft: 10
        },
        options: {
            width: '35%',
            height: 30,
            flexDirection: "row",
            paddingHorizontal: 20,
            justifyContent: "space-between",


        },
        icon: {
            width: 40,
            height: 30,
            justifyContent: "center",
            alignItems: 'center'
        }
    },
    body: {
        text: {
            color: "white",
            fontSize: 14,
            margin: 2
        }
    }

}
import React,{useRef,useEffect} from 'react';
import { View, Text, TouchableOpacity, Dimensions,Animated } from 'react-native';
import { Dark } from '../../../Utils';
import moment from 'moment';

const LibraryList = (props) => {


    var fullTime = props.time.split(',')
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const animatedValue = useRef(new Animated.Value(0)).current;
    const time = moment().format('MMM Do YYYY');

   
    const animatedCard = animatedValue.interpolate({
        inputRange:[0,1],
        outputRange:[height,1]
    })
    useEffect(()=>{
        Animated.sequence([
            Animated.delay(props.index * 30),
            Animated.spring(animatedValue,{
                toValue:1,
               friction:8,
                useNativeDriver:true
            })
        ]).start()

    },[])

    return (
        
        <TouchableOpacity style={{ ...styles.container, width: width, height: height / 5,transform:[{translateY:animatedCard}] }}
        onPress={props.onPress}
        >
            <View style={{ ...styles.subContainer, width: width / 1.1,backgroundColor:fullTime[1] == time ?Dark.lightGreen: Dark.lightOrange }}>
                <View style={styles.circle.big} />
                <View style={styles.circle.litle} />
                <View style={styles.child.container}>
                    <View style={styles.child.left}>
                        <Text style={{ ...styles.text, marginTop: 10,fontSize:30 }}> {fullTime[0]}</Text>
                        <Text style={{...styles.text,marginLeft:10 }} >{fullTime[1]}</Text>
                        <Text style={{...styles.text,marginTop:10,marginLeft:4}}> {props.count.length} items</Text>
                    </View>
                    <View style={styles.child.right}>
                      
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default LibraryList;
const styles = {
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    subContainer: {
        height: '90%',
        borderRadius: 10,
        borderRadius: 10,
        overflow: "hidden"
    },
    circle: {
        litle: {
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: 'rgba(2255,225,225,0.2)',
            position: 'absolute',
            top: 40,
            left: '85%'
        },
        big: {
            width: 190,
            height: 190,
            borderRadius: 950,
            backgroundColor: 'rgba(2255,225,225,0.2)',
            position: 'absolute', top: -50, left: -40
        }
    },
    child:{
        container:{
             width: '100%',
              height: "100%",
               flexDirection: "row" 
        },
        left:{
            width: '60%', 
            height: "100%" 
        },
        right:{ 
            width: '40%', 
            height: "100%", 
            alignItems: "flex-end" }
    },
  
    text:{
        fontSize: 20, 
        color: Dark.black30,
    }
}

import React,{useRef,useEffect} from 'react';
import { View, Text, TouchableOpacity, Dimensions,Animated } from 'react-native';
import { Dark } from '../../../Utils'

const LibraryList = (props) => {


    var fullTime = props.time.split(',')
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const animatedValue = useRef(new Animated.Value(0)).current;
   
    const animatedCard = animatedValue.interpolate({
        inputRange:[0,1],
        outputRange:[height,1]
    })
    useEffect(()=>{
        Animated.sequence([
            Animated.delay(props.index * 200),
            Animated.spring(animatedValue,{
                toValue:1,
               friction:8,
                useNativeDriver:true
            })
        ]).start()
    },[])
    return (
        <TouchableOpacity style={{ ...styles.container, width: width, height: height / 5,transform:[{translateY:animatedCard}] }}>
            <View style={{ ...styles.subContainer, width: width / 1.1, }}>
                <View style={styles.circle.big} />
                <View style={styles.circle.litle} />
                <View style={styles.child.container}>
                    <View style={styles.child.left}>
                        <Text style={{ ...styles.text, marginTop: 10,fontSize:38 }}> {fullTime[0]}</Text>
                        <Text style={{...styles.text }} >{fullTime[1]}</Text>
                        <Text style={{...styles.text,marginTop:10}}> {props.count.length} items</Text>
                    </View>
                    <View style={styles.child.right}>
                        <TouchableOpacity style={styles.buttonDelete} onPress={props.onDelete}>
                            <Text>
                                delete
                            </Text>
                        </TouchableOpacity>
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
        backgroundColor:'#FF7043',
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
    buttonDelete:{
        width: 80, 
        height: 50, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    text:{
        fontSize: 20, 
        color: Dark.black30,
    }
}

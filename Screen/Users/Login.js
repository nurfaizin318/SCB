import React, { Fragment, useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    Dimensions,
    Animated,
    KeyboardAvoidingView
} from 'react-native';
import { TextInputs } from '../../Component/';
import { Dark } from "../../Utils/Color";
import { useDispatch } from 'react-redux';
import  db  from "../../Config/config";
import "firebase/firestore"


const Login = (props) => {

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const animatedValue = useRef(new Animated.Value(0)).current;
    const animatedTime = useRef(new Animated.Value(0)).current;
    const dispatch = useDispatch();
    
    
    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [height,-30]
    })

    const scale = animatedTime.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    const onLogin = async () => {
        
    db.auth()
      .signInWithEmailAndPassword(username, password)
      .then( async(data) =>{ 
          
        db.firestore().collection('user').doc(`${data.user.uid}`)
          .onSnapshot( async (docs)=>{
              await dispatch({type:"LOGIN",
              name:docs.data().name,
              address:docs.data().address,
              position:docs.data().position,
              email:docs.data().email,
              number:docs.data().number})
            await docs.data().status == "user"? props.navigation.navigate("Home") : null;
          })
        
    })
      .catch(error => alert(error))
        
    }

    useEffect(() => {
        Animated.parallel([
            Animated.spring(animatedValue, {
                toValue: 1,
                friction: 5,
                useNativeDriver: true

            }),
            Animated.spring(animatedTime, {
                delay: 1500,
                toValue: 1,
                friction: 5,
                useNativeDriver: true
            }),
        ]).start()
    })


    
    return (
        <Fragment >
            <StatusBar backgroundColor={Dark.black20} barStyle="light-content" />
            <View style={styles.container}>
                
                    <Animated.View style={{ ...styles.icon.container, height: height / 5, width: width, transform: [{ scale: scale }] }}>
                        <View style={styles.icon.body}>
                            <Text style={styles.icon.text} >S C B</Text>
                        </View>
                    </Animated.View>
                    <Animated.View style={{ ...styles.box, width: width, height: height / 1.2, transform: [{ translateY: translateY }] }}>
                        <View style={styles.title.container}>
                            <Text style={styles.title.text}>Login</Text>
                        </View>
                        <View style={styles.spacer(30)} />
                        <View>
                            <Text style={styles.box.text}>username</Text>
                            <View style={styles.box.input}>
                                <TextInputs
                                    placeholder="username"
                                    onChangeText={(value) => setUsername(value)} 
                                    />
                                    
                            </View>

                        </View>
                        <View style={styles.spacer(30)} />
                        <View>
                            <Text style={styles.box.text}>passowrd</Text>
                            <View style={styles.box.input} >
                                <TextInputs
                                    placeholder="pasword"
                                    onChangeText={(value) => setPassword(value)} />
                            </View>
                        </View>
                        <View style={styles.box.button}>
                            <Button title="Log in" color={Dark.lightOrange} onPress={() => { onLogin() }} />
                        </View>
                    </Animated.View>
            </View>
        </Fragment>
    )
}
export default Login;

const styles = {
    container: {
        flex: 1,
        backgroundColor: Dark.black20,
        alignItems: "center"
    },
    icon: {
        container: {
            marginTop: 20,
            justifyContent: 'center',
            alignItems: "center",
        },
        body: {
            width: 300,
            height: '100%',
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            fontSize: 70,
            color: "red"
        }
    },
    title: {
        container: {
            width: '100%',
            height: 70,

        },
        text: {
            fontSize: 30,
            color: "grey"

        }
    },
    box: {

        backgroundColor: Dark.black30,
        padding: 20,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        backgroundColor: Dark.black30,
        position: "absolute",
        top: 180,
        left: 0,
        right: 0,
        text: {
            fontSize: 14,
            color: 'grey'
        },
        button: {
            marginTop: 40
        }

    },
    spacer: (value) => {
        return {
            height: value
        }
    }
}
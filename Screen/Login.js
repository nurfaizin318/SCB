import React, { Fragment, useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    Dimensions,
    Animated,
    KeyboardAvoidingView,
    ActivityIndicator,
    BackHandler,
    Alert
} from 'react-native';
import { TextInputs } from '../Component';
import { Dark } from "../Utils/Color";
import { useDispatch } from 'react-redux';
import app from "../Config/config";
import "firebase/firestore"


const Login = (props) => {

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [load, setLoad] = useState(false)

    const animatedValue = useRef(new Animated.Value(0)).current;
    const animatedTime = useRef(new Animated.Value(0)).current;
    const dispatch = useDispatch();


    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [height, -30]
    })

    const scale = animatedTime.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    const onLogin = async () => {
        setLoad(true)
        app.auth()
          .signInWithEmailAndPassword(username, password.toLowerCase())
          .then( async(data) =>{ 
            

            app.firestore()
              .collection('User_data')
              .doc(`${data.user.uid}`)
              .onSnapshot( async (docs,)=>{

                  await dispatch({type:"LOGIN",
                  name:docs.data().profile.name,
                  address:docs.data().profile.address,
                  position:docs.data().profile.position,
                  email:docs.data().profile.email,
                  number:docs.data().profile.number,
                  status:docs.data().profile.status,
                  uid:data.user.uid,
                })

                if(docs.data().profile.status === "user"){
                    props.navigation.push("Home")
                }
                else if(docs.data().profile.status === "admin"){
                    props.navigation.push("HomeAdmin")
                }
               

              })
setLoad(false)
        })
          .catch(error => {alert(error),setLoad(false)})

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

        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to exit ?", [
              {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
              },
              { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
          };
      
          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
      
          return () => backHandler.remove();
    },[])



    return (
        <Fragment >
            <StatusBar backgroundColor={Dark.black20} />
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
                                onChangeText={(value) => setPassword(value)}
                                secureTextEntry={true}
                            />

                        </View>
                    </View>
                    <View style={styles.box.button}>
                        {load ? <ActivityIndicator /> :
                            <Button title="login" color={Dark.lightOrange} onPress={() => { onLogin() }} />
                        }
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
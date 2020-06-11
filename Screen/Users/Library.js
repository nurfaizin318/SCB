import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    Modal,
    Button,
    ScrollView,
    Clipboard,
    ToastAndroid,
    TextInput,
    Animated,
    Easing,
    FlatList
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { CardLibrary, } from '../../Component';
import { Dark } from '../../Utils';
import { db } from '../../Config/config'




const Library = (props) => {
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;

    let date = new Date();
    let dates = date.getDate();
    let month = date.getMonth() + 1; //Current Month
    let year = date.getFullYear(); //Current Year
    let times = date.toLocaleTimeString();
    let TimeNow = dates + '-' + month + '-' + year;

    const scrollValue = useRef(new Animated.Value(0)).current;

    const scrollHeight = Animated.diffClamp(scrollValue, 0, 110).interpolate({
        inputRange: [0, height / 7],
        outputRange: [height / 6, height / 11],
    });
    const inputOffsetX = scrollValue.interpolate({
        inputRange: [0, 100],
        outputRange: [-40, 20],
        extrapolate: 'clamp',

    });
    const opacityX = scrollValue.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: "clamp"
    })

    const dataFromState = useSelector(state => state.DataReducer.data);
    const data = useSelector(state => state.DataReducer.data);
    const dispatch = useDispatch();

    const [time, setTime] = useState([]);

    const itemsRef = db.ref('/Date');

    const onDelete = async (id) => {
        try {
            await dispatch({ type: "ON_DELETE", payload: id })
        } catch (e) {
            alert(e)
        }
    }

    let addItem = () => {
        let  id =   date.getTime();
        itemsRef.child(`${TimeNow}`)
        .set({'id':id,'createdAt':TimeNow})
        .then()
        .catch(e=>console.warn(e))
    };

    const onEdit = (value) => {
        alert(value);
    }


    const copyToClipboard = async () => {
        let copy = dataFromState.map(({ organitation, actions, contact1, progress, nextPlan, result }) => {
            return ('\n' + `organitation : ${organitation}` + '\n' +
                `actions : ${actions}` + '\n' +
                `progress : ${progress}` + '\n' +
                `contact   : ${contact1}` + '\n' +
                `next plan : ${nextPlan}` + '\n' +
                `result  : ${result}` + '\n' +
                `================` + '\n');
        })
        let finalCopy = await copy.toString();
        Clipboard.setString(finalCopy)
    }

    const onInsert = async () => {
        await dispatch({ type: "INSERT_DATA", payload: time })
        console.log(data)
    }

    useEffect(() => {
        const itemsRef = db.ref('/Date/');
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            if (data != null) {
                let items = Object.values(data);
                setTime(items)
            }
        });
    }, [])
    return (

        <Fragment>
            <StatusBar backgroundColor={Dark.black30}  barStyle='default' />
            <View style={styles.container}>
                <Animated.View style={{ width: width / 1.15, height: 40, alignSelf: "center", transform: [{ translateY: inputOffsetX }], zIndex: 300 }}>
                    <TextInput style={{ borderBottomColor: Dark.black30, borderBottomWidth: 1, textAlign: "center" }}
                        placeholder="Search"
                        placeholderTextColor={Dark.black30}
                    />
                </Animated.View>
                <Animated.View style={{ width: width, height: 90, transform: [{ scale:opacityX}], marginTop: -20, paddingHorizontal: 20, justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, fontWeight: '600', color:'grey'}}>Library</Text>
                    <Text style={{ fontSize: 15, fontWeight: '600', color:'grey'}}>Add your activity and recent here !</Text>
                </Animated.View>
                <Animated.View style={{ height: height / 1.1, width: width / 1, backgroundColor: Dark.black20, position: "absolute", borderTopRightRadius: 45, borderTopLeftRadius: 45, paddingTop: 40, transform: [{ translateY: scrollHeight }] }}>
                    <Animated.FlatList
                        scrollEventThrottle={16}
                        onScroll={Animated.event([
                            {
                                nativeEvent: {
                                    contentOffset: { y: scrollValue }
                                }
                            }
                        ], {
                            useNativeDriver: true
                        })}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={time}
                        renderItem={({ item, index }) =>

                            <TouchableOpacity style={{ width: width, height: 120, marginVertical: 3, justifyContent: "center", alignItems: "center",}}>
                                <View style={{ width: width / 1.1, height: '90%', borderRadius: 10, alignItems:"center" ,justifyContent:"flex-end"}}>
                                   
                                    <View style={{width:'100%',height:'90%',backgroundColor:Dark.black30,borderRadius:10,flexDirection:"row"}}>

                                    <View style={{width:"30%",height:'110%',backgroundColor:Dark.lightOrange,marginLeft:20,borderBottomLeftRadius:10,borderBottomRightRadius:10,top:-2,justifyContent:"center",alignItems:"center"}}>
                                            <Text style={{fontSize:30}}>
                                                8
                                            </Text>
                                            <Text>
                                                Items
                                            </Text>
                                    </View>
                                    <View style={{width:"65%",height:'100%',padding:10}}>
                                        <Text style={{color:'grey'}}>
                                            created At : 19 / 27 /2020
                                        </Text>
                                        <View style={{flexDirection:"row"}}>
                                            <TouchableOpacity style={{width:80,height:30,backgroundColor:Dark.lightGreen,justifyContent:"center",alignItems:"center",borderRadius:3,marginTop:25,marginLeft:'30%'}}>
                                            <Text >delete</Text>
                                            </TouchableOpacity>
                                           

                                        </View>
                                    </View>
                                    </View>
                                    
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={items => items.id.toString()}
                    />
                </Animated.View>
            </View>
        </Fragment>
    )

}

export default Library;


const styles = {

    container: {
        flex: 1,
        backgroundColor: Dark.black30,
    },
    header: {
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: "flex-end"
    },
    collapseHeader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        width: "100%",
        overvflow: "hidden",
        zIndex: 999,
        padding: 10,
        backgroundColor: Dark.lightGreen,
        borderBottomLeftRadius: 34,
    },
    add: {
        text: {
            fontSize: 30,
            color: Dark.black30
        },
        button: {
            width: 55,
            height: 55,
            borderRadius: 35,
            backgroundColor: Dark.lightOrange,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 4

        }
    }
}


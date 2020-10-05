import React, { Fragment, useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StatusBar, FlatList, Dimensions, Animated, Clipboard, Modal, Alert, ActivityIndicator } from 'react-native';
import { Dark } from '../../Utils';;
import { CardList } from '../../Component';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import db from '../../Config/config';
import moment from 'moment';
import NetInfo from "@react-native-community/netinfo";



const List = (props) => {

    const scrollValue = useRef(new Animated.Value(0)).current;
    const time = moment().format('MMM Do YYYY')
    const fullTime = moment().format('dddd ,MMM Do YYYY');
    const dataFromState = useSelector(state => state.DataReducer.data)
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const dispatch = useDispatch();
    const firebase = db.database();
    const uid = useSelector(state => state.AuthReducer.uid)
    const name = useSelector(state => state.AuthReducer.name)
    const [visible, setVisible] = useState(false)
    const date = new Date();
    const [load, setLoad] = useState(false);




    const onDelete = (id) => {

        Alert.alert(
            "",
            "Are you sure  ?",
            [
                {
                    text: "No",
                    onPress: () => { }
                },
                {
                    text: "Yes",
                    onPress: () => {
                        try {
                            dispatch({ type: "ON_DELETE", payload: id })
                        } catch (e) {
                            alert(e)
                        }
                    }
                }
            ]
        )

    }

    const scrollHeight = Animated.diffClamp(scrollValue, 0, 100).interpolate({
        inputRange: [0, 80],
        outputRange: [-40, -80],
    })

    const scrollHeight2 = Animated.diffClamp(scrollValue, 0, 100).interpolate({
        inputRange: [0, 130],
        outputRange: [-10, -90],
    });

    const copyToClipboard = async () => {
        let copy = dataFromState.map(({ organitation, actions, contact1, progress, nextPlan, result, status }) => {
            return ('\n' + `organitation : ${organitation}` + '\n' +
                `actions : ${actions}` + '\n' +
                `progress : ${progress}` + '\n' +
                `contact   : ${contact1}` + '\n' +
                `next plan : ${nextPlan}` + '\n' +
                `result  : ${result}` + '\n' +
                `status  : ${status}` + '\n' +
                `================` + '\n');
        })
        let finalCopy = await copy.toString();
        Clipboard.setString(finalCopy)
    }


    let addItem = async () => {
        setLoad(true)
        NetInfo.fetch().then(state => {
            if (state.isConnected === false) {
                alert("network error")
                setLoad(false)
            } else {

                if (dataFromState.length == 0) {
                    alert("data is empty")
                    setLoad(false)
                }
                else {
                    firebase.ref().child("Feed").child(`${uid}`).orderByChild("createdAt").equalTo(`${fullTime}`)
                        .once("value", snap => {
                            if (snap.exists()) {
                                alert("data has uploaded")
                                setLoad(false)
                            }
                            if (!snap.exists()) {
                                firebase.ref(`Customer_data/${time}`)
                                    .child(`${uid}`)
                                    .set({ 'name': name, 'createdAt': fullTime, 'data': dataFromState })
                                    .then(() => {
                                        firebase.ref(`Feed`).child(`${uid}`)
                                            .child(`${time}`)
                                            .set({ 'name': name, 'createdAt': fullTime, 'data': dataFromState })
                                        alert("berhasil")
                                        setLoad(false)
                                    })
                                dispatch({ type: "ON_RESET" })
                            }
                        }).catch(e => {
                            alert(e)
                            setLoad(false)
                        })
                }

            }
        }).catch((e) => {
            alert(e)
            setLoad(false)
        })
    };
    return (
        <Fragment>
            <Modal
                visible={visible}
                transparent
                animationType="slide"
            >
                <View style={{ ...styles.modal.container, marginTop: height / 1.8 }}>
                    <View style={{ width: width / 1.1, height: height / 4, backgroundColor: Dark.black40, borderRadius: 10 }}>
                        <View style={styles.modal.header}>
                            <TouchableOpacity onPress={() => setVisible(false)} style={styles.btnClose}>
                                <Text style={{ color: 'white' }}>close</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modal.body}>
                            <View style={{ width: "40%", height: "80%", alignItems: "center" }}>

                                <TouchableOpacity
                                    onPress={addItem}
                                    style={styles.modal.btn}>
                                    {load ?
                                     <ActivityIndicator /> :

                                        <FontAwesome5 name="location-arrow" size={20} color="grey" />
                                    }
                                </TouchableOpacity>

                                <Text style={styles.modal.text}>
                                    Report
                            </Text>
                            </View>
                            <View style={{ width: "40%", height: "80%", alignItems: "center" }}>
                                <TouchableOpacity
                                    onPress={copyToClipboard}
                                    style={styles.modal.btn}>
                                    <FontAwesome5 name="copy" size={20} color="grey" />
                                </TouchableOpacity>
                                <Text style={styles.modal.text}>
                                    copy
                            </Text>
                            </View>
                            <View style={{ width: "40%", height: "80%", alignItems: "center" }}>
                                <TouchableOpacity
                                    onPress={() => dispatch({ type: "ON_RESET" })}
                                    style={styles.modal.btn}>
                                    <FontAwesome5 name="trash" size={20} color="grey" />
                                </TouchableOpacity>
                                <Text style={styles.modal.text}>
                                    clear all
                            </Text>
                            </View>

                        </View>
                    </View>

                </View>
            </Modal>
            <StatusBar backgroundColor={Dark.black30} translucent={false} tintColor="light" />
            <View style={styles.container}>

                <Animated.View style={{ ...styles.header.container, width: width, height: height / 5, transform: [{ translateY: scrollHeight }], }}>
                    <View style={{ ...styles.header.content, width: width }}>
                        <Text style={styles.header.title}>Recent today</Text>
                        <TouchableOpacity onPress={() => setVisible(true)} style={{ width: 50, height: 50, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesome5 name="ellipsis-v" size={24} color="gray" />

                        </TouchableOpacity>
                    </View>
                </Animated.View>


                <Animated.View style={{ ...styles.body, transform: [{ translateY: scrollHeight2 }] }}>

                    <Animated.FlatList
                        bounces={false}
                        scrollEventThrottle={1}
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
                        data={dataFromState}
                        renderItem={({ item, index }) =>
                            <CardList
                                navigation={props.navigation}
                                organitation={item.organitation}
                                actions={item.actions}
                                progress={item.progress}
                                contact1={item.contact1}
                                contact2={item.contact2}
                                nextPlan={item.nextPlan}
                                result={item.result}
                                id={item.id}
                                status={item.status}
                                time={item.time}
                                index={index}
                                budget={item.budget}
                                number={item.number}
                                onDelete={() => { onDelete(item.id) }}
                            />
                        }
                        keyExtractor={items => items.id.toString()}
                    />

                </Animated.View>

            </View>

        </Fragment>
    )

}

export default List;

const styles = {
    container: {
        flex: 1, alignItems: "center",
        backgroundColor: Dark.black20,
    },
    header: {
        container: {
            backgroundColor: Dark.black30,
            justifyContent: "flex-end",
            zIndex: 100,
        },
        content: {
            flexDirection: "row",
            height: "100%",
            justifyContent: 'space-between',
            alignItems: "center",
            paddingTop: 70
        },
        title: {
            fontSize: 23,
            color: 'grey',
            left: 20
        },
        btnContainer: {
            width: "100%",
            height: 40,
            backgroundColor: Dark.black30,
            flexDirection: "row"
        },
        btn: {
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 2,
        }
    },
    body: {
        width: '100%',
        alignItems: "center",
        bottom: 60,
        paddingVertical: 30
    },
    btnCopy: {
        zIndex: 1000,
        width: 60,
        height: 60,
        backgroundColor: Dark.lightOrange,
        position: "absolute",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 4
    },
    modal: {
        container: {
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: "center",
            alignItems: "center",

        },
        header: {
            height: 40,
            width: '100%',
            alignItems: "flex-end"

        },
        body: {
            width: '100%',
            height: "70%",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
        },
        btn: {
            width: 90,
            height: 90,
            backgroundColor: Dark.black20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10
        },
        text: {
            color: "white",
            marginTop: 10
        }
    },
    btnClose: {
        width: 80,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    }
}

import React, { Fragment, useState, useEffect, useRef } from 'react';
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



const Library = (props) => {
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;

    const scrollValue = useRef(new Animated.Value(0)).current;

    const scrollHeight = Animated.diffClamp(scrollValue,0,110).interpolate({
        inputRange: [0, height / 7],
        outputRange: [height / 6, height / 11],
    });
    const inputOffsetX = scrollValue.interpolate({
        inputRange: [0, 100],
        outputRange: [-40, 20],
        extrapolate: 'clamp',

    });
    const opacityX = scrollValue.interpolate({
        inputRange:[0,100],
        outputRange:[1,0],
        extrapolate:"clamp"
    })

    const laporan = [1,2,3,4,5,6,7,87,8,8,86,]
    const dataFromState = useSelector(state => state.DataReducer.data);
    const dispatch = useDispatch();

    const onDelete = async (id) => {
        try {
            await dispatch({ type: "ON_DELETE", payload: id })
            await AsyncStorage.setItem('Data', JSON.stringify(dataFromState.filter(item => item.id !== id)))
        } catch (e) {
            alert(e)
        }
    }

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


    return (

        <Fragment>
            <StatusBar backgroundColor={Dark.lightOrange}  />
            <View style={styles.container}>
                <Animated.View style={{ width: width / 1.15, height: 40, alignSelf: "center", transform: [{ translateY: inputOffsetX }], zIndex: 300 }}>
                    <TextInput style={{ borderBottomColor: Dark.black30, borderBottomWidth: 1, textAlign: "center" }}
                        placeholder="Search"
                        placeholderTextColor={Dark.black30}

                    />
                </Animated.View>
                <Animated.View style={{ width: width, height: 90,transform:[{scaleY:opacityX,scaleX:opacityX}],marginTop:-20,paddingHorizontal:20,justifyContent:"center"}}>
                <Text style={{fontSize:25,fontWeight:'600',}}>Library</Text>
                <Text style={{fontSize:15,fontWeight:'600',}}>Add your activity and recent here !</Text>
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
                        style={{ alignSelf: "center" }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={laporan}
                        renderItem={({ item, index }) =>
                        <View style={{width:width,height:120,marginVertical:3,justifyContent:"center",alignItems:"center",}}>
                            <View style={{width:width/1.1,height:'90%',borderRadius:10,flexDirection:"row",elevation:4,}}>
                                <View style={{width:"20%",height:'100%',backgroundColor:Dark.lightOrange,borderTopLeftRadius:10,borderBottomLeftRadius:10,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontSize:40}}>8</Text>
                                <Text>items</Text>
                                </View>
                                <View style={{width:"80%",height:'100%',backgroundColor:Dark.black30,borderTopRightRadius:10,borderBottomRightRadius:10,padding:10}}>
                                    <Text style={{color:'grey'}}>created at : 12/20/2020</Text>
                                </View>
                            </View>
                        </View>
                          }
                        keyExtractor={items=>items.index}
                        key={items=>items.index}
                    />

                </Animated.View>


            </View>
            <Animated.View style={{ position: "absolute", top: height / 1.20, left: width / 1.23 }}>
                <TouchableOpacity style={{ ...styles.add.button, }}>
                    <Text style={styles.add.text}>+</Text>
                </TouchableOpacity>
            </Animated.View>



        </Fragment>
    )

}

export default Library;


const styles = {

    container: {
        flex: 1,
        backgroundColor: Dark.lightOrange,
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


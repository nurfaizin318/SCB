import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import {useSelector,useDispatch} from "react-redux"
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    TextInput,
    Animated,
    FlatList
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LibraryList } from '../../Component';
import { Dark } from '../../Utils';
import { db } from '../../Config/config'


const Library = (props) => {
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const feedData = useSelector(state=>state.FeedReducer.feed)
    const dispatch = useDispatch();

    const scrollValue = useRef(new Animated.Value(0)).current;

    const scrollHeight = Animated.diffClamp(scrollValue, 0, 110).interpolate({
        inputRange: [0, height / 7],
        outputRange: [height / 6, height / 11],
    });
    const inputOffsetX = scrollValue.interpolate({
        inputRange: [0, 100],
        outputRange: [50, 0],
        extrapolate: 'clamp',

    });
    const opacityX = scrollValue.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: "clamp"
    })
    onDelete = (id) =>{
        dispatch({type:"DELETE_FEED",payload:id})
    }
useEffect(()=>{
    console.log(feedData)
},[])
    return (

        <Fragment>
            <StatusBar backgroundColor={Dark.black30}  barStyle='default' />
            <View style={styles.container}>
               
                <Animated.View style={{ width: width, height: 90, transform: [{ translateY:inputOffsetX}], marginTop: -20, paddingHorizontal: 20, justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, fontWeight: '600', color:'grey'}}>Library</Text>
                    <Text style={{ fontSize: 15, fontWeight: '600', color:'grey'}}>all report here !</Text>
                </Animated.View>
                <Animated.View style={{ height: height / 1.1, width: width / 1, backgroundColor: Dark.black20, position: "absolute",paddingTop: 20,paddingBottom:100, transform: [{ translateY: scrollHeight }] }}>
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
                        data={ feedData.length != null ? feedData : null }
                        renderItem={({ item, index }) =>
                            <LibraryList 
                            time={item.created}
                            index={index}
                            count={item.data}
                            onDelete={()=>onDelete(item.id)}
                                />
                        }
                        keyExtractor={items => items.id}
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


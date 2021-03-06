import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import {useSelector,useDispatch} from "react-redux";
import {
    View,
    Text,
    StatusBar,
    Dimensions,
    Animated,
    Button
} from 'react-native';
import { LibraryList } from '../../Component';
import { Dark } from '../../Utils';
import db from "../../Config/config"


const Library = (props) => {
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const dispatch = useDispatch();
    const scrollValue = useRef(new Animated.Value(0)).current;
    const firebase = db.database();
    const uid = useSelector(state => state.AuthReducer.uid);
    const [data,setData] = useState([])



    const scrollHeight = Animated.diffClamp(scrollValue, 0, 110).interpolate({
        inputRange: [0, height / 7],
        outputRange: [height / 6, height / 11],
    });
    const inputOffsetX = scrollValue.interpolate({
        inputRange: [0, 100],
        outputRange: [40, 0],
        extrapolate: 'clamp',

    });
    
    // const onDelete = (createdAt,indexof) =>{
    //     let date = createdAt.split(',');
    //     firebase.ref().child("Feed").child(`${uid}`).child(`${date[1]}`).remove()
    //    const filtered = data.filter(index =>index !== indexof);
    //    setData(filtered)
    // }

    const LibraryMemo = React.memo(LibraryList)


   
useEffect(()=>{
    firebase.ref('Feed').child(`${uid}`).limitToLast(7)
    .on("value", snapshot => {
        if ( snapshot.val() !== null ) {
            const value = Object.values(snapshot.val())
       setData(value.reverse())
        }
    });
    
},[])
    return (

        <Fragment>
            <StatusBar backgroundColor={Dark.black30}  barStyle='default' />
            <View style={styles.container}>
                <Animated.View style={{ width: width, height: 90, transform: [{ translateY:inputOffsetX}], marginTop: -20, paddingHorizontal: 20, justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, fontWeight: '600', color:'grey'}}>Library</Text>
                    <Text style={{ fontSize: 15, fontWeight: '600', color:'grey',marginBottom:5}}>all report here !</Text>
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
                        data={ data }
                        renderItem={({ item, index }) =>
                            <LibraryMemo 
                            time={item.createdAt}
                            index={index}
                            count={item.data}
                            onPress={()=>props.navigation.navigate("LibraryDetail",{data:item.data})}
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


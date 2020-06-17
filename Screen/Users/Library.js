import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react';
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
    
    const [time, setTime] = useState([])

    useEffect(() => {
        const itemsRef = db.ref('/Date/');
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            if (data != null) {
                let items = Object.values(data);
                setTime(items)
            }
        });
        console.log(time)
    }, [])
    return (

        <Fragment>
            <StatusBar backgroundColor={Dark.black30}  barStyle='default' />
            <View style={styles.container}>
                <Animated.View style={{ width: width / 1.15, height: 40, alignSelf: "center", transform: [{ translateY: inputOffsetX }], zIndex: 700 }}>
                    <TextInput style={{ borderBottomColor: 'grey', borderBottomWidth: 1, textAlign: "center",
                     }}
                        placeholder="Search"
                        placeholderTextColor="grey"
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
                            <LibraryList 
                            time={item.createdAt}
                            data={item.data}
                            index={index}
                                />
                         
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


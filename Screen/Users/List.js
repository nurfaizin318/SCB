import React, { Fragment, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, FlatList, Dimensions, Animated } from 'react-native';
import { Dark } from '../../Utils';;
import { CardList } from '../../Component';
import { useDispatch, useSelector } from 'react-redux';
import { ProgressSteps } from 'react-native-progress-steps';


const List= (props) => {
    const scrollValue = useRef(new Animated.Value(0)).current;
    const animatedValue = useRef(new Animated.Value(0)).current;

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const dataFromState = useSelector(state => state.DataReducer.data);
    const dispatch = useDispatch();

    const [navigator, setNavigator] = useState(true);
    const [loaded,setLoaded]=useState(true)

    const onDelete = async (id) => {
        try {
            await dispatch({ type: "ON_DELETE", payload: id })
        } catch (e) {
            alert(e)
        }
    }

    const scrollHeight = Animated.diffClamp(scrollValue, 0, 100).interpolate({
        inputRange: [0, 80],
        outputRange: [-40, -80],
    })

    const scrollHeight2 = Animated.diffClamp(scrollValue, 0, 100).interpolate({
        inputRange: [0, 130],
        outputRange: [-10, -90],
    });
  
   
    return (
        <Fragment>
            <StatusBar backgroundColor={Dark.black30} translucent={false} tintColor="light" />
            <View style={styles.container}>

                <Animated.View style={{ ...styles.header.container, width: width, height: height / 5, transform: [{ translateY: scrollHeight }] }}>
                    <Text style={styles.header.title}>{navigator ? 'Recent ' : 'All Recent'}</Text>
                    <View style={styles.header.btnContainer}>
                        <TouchableOpacity style={{...styles.header.btn,borderBottomColor: navigator ? Dark.lightOrange : 'transparent'}} onPress={() => setNavigator(true)}>
                            <Text style={{ color: "grey", }}>
                                today
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.header.btn,borderBottomColor: navigator ? 'transparent' :Dark.lightOrange}} onPress={() => setNavigator(false)}>
                            <Text style={{ color: "grey" }}>
                                all
                        </Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>

                {navigator ?
                    <Animated.View style={{ ...styles.body,transform: [{ translateY: scrollHeight2 }] }}>
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
                                    time={item.tim}
                                    index={index}
                                    onDelete={() => { onDelete(item.id) }}
                                />
                            }
                            keyExtractor={items => items.id.toString()}
                        />
                    </Animated.View>
                    :
                    
                    <Animated.View style={{ ...styles.body,transform: [{ translateY: scrollHeight2 }],  }}>
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
                                organitation={item.organitation}
                                actions={item.acitem}
                                progress={item.progress}
                                contact1={item.contact1}
                                contact2={item.contact2}
                                nextPlan={item.nextPlan}
                                result={item.result}
                                id={item.id}
                                time={item.tim}
                                onDelete={() => { onDelete(item.id) }}
                            />
                        }
                        keyExtractor={items => items.id.toString()}
                    />
                </Animated.View>
                }
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
        title: {
            fontSize: 23, 
            color: 'grey', 
            position: 'absolute', 
            top: 60,
             left: 20 
        },
        btnContainer:{
            width:"100%",
             height: 40, 
             backgroundColor: Dark.black30, 
             flexDirection: "row"
        },
        btn:{
            width: "50%", 
            justifyContent: "center", 
            alignItems: "center",
            borderBottomWidth: 2,
        }
    },
    body:{
        width: '100%', 
        alignItems: "center",
        bottom: 60, 
        paddingVertical: 30
    }
}

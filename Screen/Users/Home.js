import React, { Fragment, useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StatusBar, Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
    Alert,
    BackHandler,
    ActivityIndicator
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ListNotification, CardRecent } from '../../Component'
import { Dark } from '../../Utils';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';
import db from "../../Config/config";


const Home = (props) => {

    const ifFocused = useIsFocused();
    const dispatch = useDispatch();
    const time = moment().format('MMM Do YYYY')
    const firebase = db.database();
    const [feed, setFeed] = useState([])

    const recentData = useSelector(state => state.DataReducer.data)
    const feedData = useSelector(state => state.DataReducer.feed)
    const name = useSelector(state => state.AuthReducer.name)
    const position = useSelector(state => state.AuthReducer.position)
    const [load, setLoad] = useState({});
    const reverseFeed = feed.reverse();
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const uid = useSelector(state => state.AuthReducer.uid)

   const  [data, setData] = useState(false)
    const Alerts = () => {
        Alert.alert(
            "",
            "Are you sure logout ?",
            [
                {
                    text: "No",
                    onPress: () => { }
                },
                {
                    text: "Yes",
                    onPress: () => { onLogOut() }
                }
            ]
        )
    }


    const onLogOut = async () => {
        await db.auth().signOut();
        await dispatch({ type: 'LOGOUT' })
        await props.navigation.navigate('Login');
    }

    useEffect(() => {
        firebase.ref().child('Customer_data').limitToLast(10)
            .on("child_added", snapshot => {
                const value = Object.values(snapshot.val())
                if (typeof snapshot !== null || typeof snapshot !== undefined) {
                   value.reverse().forEach(data=>{
                       setFeed(prevState=>[...prevState,data])
                    
                   })
            
                    
                }
            });
    }, [])
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}  >
            <Fragment>
                <StatusBar backgroundColor={Dark.black20} tintColor="light" />
                <View style={styles.container}>
                    <Text>{feed.created}{feed.name}</Text>
                        <View style={{...styles.userPanel}}>
                            <View style={styles.thumnail.name}>
                                <Text style={styles.thumnail.fontThumnail1}>{name}</Text>
                                <Text style={styles.thumnail.fontThumnail2}>{position}</Text>
                            </View>
                            <TouchableOpacity style={styles.settingIcon} onPress={() => { Alerts() }}>
                                <FontAwesome5 name="sign-out-alt" size={18} color="gray" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, width: width }}>
                            <View style={{...styles.recent.box,height:height/3.2}}>
                                <View style={styles.recent.boxheader}>
                                    <Text style={styles.text(20)}>
                                        Recent
                                     </Text>
                                    <TouchableOpacity style={styles.viewAll}>
                                        <Text style={{ color: "gray" }}>View all </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.recent.body}>
                                    {ifFocused ?
                                        (
                                            recentData.length > 0 ?

                                                <FlatList
                                                    data={recentData.reverse()}
                                                    horizontal={true}
                                                    showsHorizontalScrollIndicator={false}
                                                    renderItem={({ item }) =>

                                                        <CardRecent
                                                            id={item.id}
                                                            organitation={item.organitation}
                                                            progress={item.progress}
                                                        />}
                                                    keyExtractor={item => item.id.toString()}
                                                />
                                                :
                                                <Text style={{ color: "white", alignSelf: "center" }}>
                                                    Empty
                                          </Text>
                                        )
                                        :
                                        null}
                                </View>
                            </View>
                            <View style={styles.feed.box(height)}>
                                <View style={{ ...styles.feed.header, width: width }}>
                                    <Text style={styles.text(20)}>
                                        Feed
                                     </Text>
                                   
                                </View>

                               
                                    <FlatList
                                        data={feed}
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item }) =>
                                            item != null ?
                                                <ListNotification
                                                    name={item.name}
                                                    type={item.createdAt}

                                                />
                                                :
                                                <View style={{ ...styles.noResult, height: height / 2.4 }}>
                                                    <Text style={{ fontSize: 15, color: '#2c3e50' }}>no notifications</Text>
                                                </View>
                                        }
                                        keyExtractor={item=>item.id}
                                    />
                                
                            </View>
                        </View>
                </View>
            </Fragment>
        </TouchableWithoutFeedback >


    )

}

export default Home;

const styles = {

    container: {
        flex: 1,
        backgroundColor: Dark.black20,
        alignItems: 'center',
    },
    userPanel: {
        width:"100%",
        height: 70,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.3)',

    },
    thumnail: {
        name: {
            width: '100%',

        },
        fontThumnail1: {
            fontSize: 22,
            color: 'white',
            left: 10,
            letterSpacing: 1

        },
        fontThumnail2: {
            fontSize: 15,
            color: 'gray',
            left: 10,
            marginTop: 2,
            letterSpacing: 2
        }
    },
    recent: {
        box: {
            justifyContent: 'flex-start',
            width: '100%',
            borderRadius: 5,
            alignSelf: "center",
            borderBottomWidth: 0.5,
        },
        boxheader: {
            justifyContent: 'space-between',
            flexDirection: "row",
            alignItems: 'center',
            paddingTop: 10
        },
        body: {
            justifyContent: 'center',
            height: 180
        },
        scrollBody: {
            top: 5,
            width: '97%',
            left: 5
        }
    },

    settingIcon: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: "center",
        right: 50,
    },
    touch: {
        width: 60,
        height: 40,
        backgroundColor: 'rgba(47, 54, 64,1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,

    },
    text: (left) => {
        return {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft: left,
        }
    },
    noResult: {
        width: '94%',
        alignItems: 'center',
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5,

    },
    feed: {
        box: (height) => {
            return {
                backgroundColor:"red",
                flex: 1,
                alignSelf: "center",
                height: height / 2,
                paddingTop: 10,
                backgroundColor: Dark.black20,
                alignItems: "center"
            }
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        scrollBody: (width) => {
            return {
                width: width,
                marginTop: 10,
                elevation: 10,
                marginBottom: 10
            }
        }
    },
    viewAll: {
        height: 25,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
    }
};
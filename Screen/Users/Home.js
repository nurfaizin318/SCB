import React, { Fragment, useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StatusBar, Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
    FlatList,
    Alert
} from 'react-native';
import {db} from '../../Config/config'
import { useSelector, useDispatch } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ListNotification, CardRecent } from '../../Component'
import { Dark } from '../../Utils';
import moment from 'moment';
import {useIsFocused} from '@react-navigation/native'


const Home = (props) => {

    const ifFocused = useIsFocused();
    const dispatch = useDispatch();
    const time = moment().format('MMM Do YYYY')

    const recentData = useSelector(state => state.DataReducer.data)

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    [data,setData] = useState({})
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

        await dispatch({ type: 'LOGOUT' })
        await props.navigation.navigate('Login');
    }
    useEffect(() => {
        const itemsRef = db.ref(`/Notifications/`)
        itemsRef.on('value', snapshot => {
            let database = snapshot.val();
            if (data != null) {
                let items = Object.values(data);
                // dispatch({ type: "INSERT_FEED", payload: items })

            }
            //    if(database==null){
            //        setData()
            //    }else{
            //        setData(Object.values(database))
            //    }
        });
    }, [])
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}  >
            <Fragment>
                <StatusBar backgroundColor={Dark.black20} tintColor="light" />
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.userPanel}>
                            <View style={styles.thumnail.name}>
                                <Text style={styles.thumnail.fontThumnail1}>Jaya Saf</Text>
                                <Text style={styles.thumnail.fontThumnail2}>Supervisor</Text>
                            </View>
                            <TouchableOpacity style={styles.settingIcon} onPress={() => { Alerts() }}>
                                <FontAwesome5 name="sign-out-alt" size={18} color="gray" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, width: width }}>
                            <View style={styles.recent.box}>
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
                                                data={recentData}
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
                                    null }
                                </View>
                            </View>
                            <View style={styles.feed.box(height)}>
                                <View style={{...styles.feed.header,width:width}}>
                                    <Text style={styles.text(20)}>
                                        Feed
                                     </Text>
                                    <TouchableOpacity style={styles.viewAll}>
                                        <Text style={{ color: "gray" }}>View all </Text>
                                    </TouchableOpacity>
                                </View>


                                {/* <FlatList
                                    data={Object.values(data)}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) =>
                                        item != null ?
                                            <ListNotification
                                                name={item.name}
                                                type={item.type}
                                                
                                            />
                                            :
                                            <View style={{ ...styles.noResult, height: height / 2.4 }}>
                                                <Text style={{ fontSize: 15, color: '#2c3e50' }}>no notifications</Text>
                                            </View>
                                    }
                                /> */}
                            </View>
                        </View>
                    </ScrollView>
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
        height: 70,
        flexDirection: 'row',
        marginTop: 10,
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
        },
        fontThumnail2: {
            fontSize: 15,
            color: 'gray',
            left: 10
        }
    },
    recent: {
        box: {
            height: 230,
            justifyContent: 'flex-start',
            width: '100%',
            borderRadius: 5,
            alignSelf: "center",
            borderBottomWidth: 0.5
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
        right: 90,
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
                flex: 1,
                alignSelf: "center",
                height: height / 2,
                paddingTop: 10,
                backgroundColor: Dark.black20,
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
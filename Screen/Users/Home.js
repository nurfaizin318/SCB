import React, { Fragment, useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar, Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList
} from 'react-native';
import { useSelector } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ListNotification,CardRecent} from '../../Component'
import { Dark } from '../../Utils';



const Home = (props) => {
    const HomeData = useSelector(state => state.DataReducer.data)
    const arr1 = [
        { key: 1, data: 'First Notif', hint: 'Person eek' },
        { key: 2, data: 'Secend Notif', hint: 'Filling Good' },
        { key: 3, data: 'Third Notif', hint: 'Filling Not Good' },
        { key: 4, data: 'Fourth Notif', hint: 'Filling Good Nyut ' },
        { key: 5, data: 'Fife Notif', hint: 'Filling Gerah Body' },
        { key: 6, data: 'Six Notif', hint: 'Filing Stress' }]

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}  >
            <Fragment>
                <StatusBar backgroundColor="#1e272e" tintColor="light" />
                <View style={styles.container(width)}>
                    <View style={styles.userPanel}>
                        {/* <View style={styles.userPanel.icon}>
                            <Text>J</Text>
                        </View> */}
                        <View style={styles.thumnail.name}>
                            <Text style={styles.thumnail.fontThumnail1}>Jaya Saf</Text>
                            <Text style={styles.thumnail.fontThumnail2}>Supervisor</Text>
                        </View>
                        <TouchableOpacity style={styles.settingIcon}>
                             <FontAwesome5 name="ellipsis-v" size={25} color="gray" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, width: width }}>
                        <View style={styles.recent.box}>
                            <View style={styles.recent.boxheader}>
                                <Text style={styles.text(10)}>
                                    Recent
                        </Text>
                                <TouchableOpacity style={styles.viewAll}>
                                    <Text style={{ color: "gray" }}>View all </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.recent.body}>

                            <FlatList
                        data={HomeData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={ ({item}) =>

                                <CardRecent
                                id={item.id}
                                organitation={item.organitation} 
                                progress={item.progress}                               
                                /> }
                        keyExtractor={item => item.id.toString()}
                    />
                    {/* <ScrollView 
                    horizontal={true}>
                        {HomeData.map(data=>{

                            return <CardRecents key={ data.id } organitation={data.organitation} progress={data.progress}/>
                        })}
                    </ScrollView> */}
                    
                            </View>
                        </View>
                        <View style={styles.feed.box(height)}>
                            <View style={styles.feed.header}>
                                <Text style={styles.text(20)}>
                                    Feed
                        </Text>
                                <TouchableOpacity style={styles.viewAll}>
                                    <Text style={{ color: "gray" }}>View all </Text>
                                </TouchableOpacity>
                            </View>

                            {arr1 ?
                                <ScrollView style={styles.feed.scrollBody(width)}>
                                    <View style={{ alignItems: 'center' }}>
                                        {arr1.map(result => {
                                            return <ListNotification
                                                key={result.key}
                                                text={result.data}
                                                text2={result.hint} />
                                        })}
                                    </View>
                                </ScrollView>
                                :
                                <View style={{ ...styles.noResult, height: height / 2.4 }}>
                                    <Text style={{ fontSize: 15, color: '#2c3e50' }}>no notifications</Text>
                                </View>
                            }
                        </View>
                    </View>
                </View>
            </Fragment>
        </TouchableWithoutFeedback >


    )

}

export default Home;

const styles = {

    container: (width) => {

        return {
            flex: 1,
            backgroundColor: '#1e272e',
            alignItems: 'center',
            width: width
        }
    },
    userPanel: {
        height: 70,
        flexDirection: 'row',
        marginTop: 10,
        padding: 10,
        width: '100%',
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,0.3)',

        icon:{
            width:50,
            height:50,
            borderRadius:90,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:Dark.black10,
            elevation:7
        }
    },
    thumnail: {
        name:{
        width:'100%',

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
            borderBottomWidth:0.5
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
            left: left,
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
                height: height / 2.15,
                paddingTop: 10,
                backgroundColor: "#1e272e",
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
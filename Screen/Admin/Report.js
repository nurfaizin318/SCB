import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import db from "../../Config/config";
import NetInfo from "@react-native-community/netinfo";

const Report = (props) => {

    const [report, setReport] = useState([]);
    const width = Dimensions.get("window").width;

    React.useEffect(() => {
        NetInfo.fetch().then(state => {
            if (state.isConnected === false) {
                alert("network error")
            } else {
                const ref = db.database().ref().child("Data")
                ref
                    .on("value", (snapshot) => {
                        const data = snapshot.val();
                        if(data !== null){
                            const translateData = Object.keys(data)
                             setReport(translateData)
                        }else{
                            setReport([])
                        }
                        
                    })
            }
        })
    }, [])

    return (
        <View style={{ flex: 1, }}>
            <FlatList
                data={report}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{ width: width, backgroundColor: "grey", height: 60, marginTop: 5, justifyContent: "space-between", paddingHorizontal: 10, flexDirection: "row", }}
                        onPress={() => props.navigation.navigate("ReportList", { date: item })}
                    >
                        <Text style={{ fontSize: 18, marginTop: 10 }}>{item}</Text>

                    </TouchableOpacity>
                )}
                keyExtractor={item => item.index}
            />
        </View>
    );
}

export default Report;
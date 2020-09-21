import React, { useEffect, useState } from 'react';
import { View, Text, FlatList ,Dimensions} from "react-native";
import { Dark } from "../../Utils"

const LibraryDetail = (props) => {

    const [data, setData] = useState([]);
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    useEffect(() => {
        setData(props.route.params.data)
    }, [])

    return (
        <View style={{ alignItems: "center", backgroundColor: Dark.black20,flex:1}}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <View style={{ width: width, backgroundColor: Dark.lightGreen, height: height/4, marginTop: 5, paddingHorizontal: 10 ,width:width/1.1}}
                    >
                        <Text style={{ fontSize: 18, marginTop: 1 }}> Organitation : {item.organitation}</Text>
                        <Text style={{ fontSize: 18, marginTop: 1 }}> Contact : {item.contact1}</Text>
                        <Text style={{ fontSize: 18, marginTop: 1 }}> Positiion : {item.contact2}</Text>
                        <Text style={{ fontSize: 18, marginTop: 1 }}> Action : {item.actions}</Text>
                        <Text style={{ fontSize: 18, marginTop: 1 }}> Next Plan : {item.nextPlan}</Text>
                        <Text style={{ fontSize: 18, marginTop: 1 }}> progress : {item.progress}%</Text>
                        <Text style={{ fontSize: 18, marginTop: 1 }}> status : {item.status}</Text>

                    </View>
                )}
                keyExtractor={item => item.index}
            />
        </View>);
}

export default LibraryDetail;
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';
import { db } from '../../Config/config'
const insertOrganitaion = () => {


    const [data, setData] = useState("")
    const [firebaseData, setFirebaseData] = useState([])
    const name  = firebaseData.filter(item=>{return  item.indexOf(data) >=0})
    React.useEffect(() => {
        const itemsRef = db.ref(`/allRecents/`)
        itemsRef.on('value', snapshot => {
            let database = snapshot.val();
            setFirebaseData(Object.keys(database))
        });
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "orange" }}>
            <View style={{ width: "100%", height: 100, backgroundColor: "white", justifyContent: "center", alignItems: "center", flexDirection: "row", }}>
                <TextInput style={{ width: "80%", height: "50%", borderWidth: 1, borderColor: "red" }}
                    onChangeText={(text) => { setData(text) }}
                />
                <TouchableOpacity style={{ width: "15%", height: "50%", backgroundColor: "black", marginLeft: 2 }}
                    onPress={() => console.log(variable)}></TouchableOpacity>

            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={data == "" ? firebaseData:name}
                renderItem={({ item, index }) =>
                    <TouchableOpacity>
                        <View style={{ width: "100%", height: 80, backgroundColor: "red", justifyContent: "center", marginTop: 5 }}>
                            <Text>{item}</Text>
                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={items => items.id}
            />
        </View>
    );
}

export default insertOrganitaion;
import React, { Component, useState } from 'react';
import TextInputs from "../../Component/Atom/TextInput"
    import { View, Text ,FlatList,TouchableOpacity,Dimensions} from "react-native"
const ValidationId = (props) => {

    const [data, setData] = useState([])
    const width = Dimensions.get("window").width;


    React.useEffect(() => {
        setData(props.route.params.data)
        console.log(props.route.params.data)

    }, [])
    return (
        <View style={{ flex: 1 }}>
            <View >
                <TextInputs style={{ borderBottomColor: "red", borderBottomWidth: 1 }} />
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={{ width: width, backgroundColor: "grey", height: 60, marginTop: 5, paddingHorizontal: 10, }}
                        
                        >
                            <Text style={{ fontSize: 18, marginTop: 1 }}>{item.id}</Text>

                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.index}
                />
            </View>
        </View>
    );
}

export default ValidationId;
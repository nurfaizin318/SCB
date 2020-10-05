import React, { Component,useState } from 'react';
import {View,Text,TouchableOpacity,ActivityIndicator,FlatList,Dimensions} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import db from "../../Config/config";
import moment from 'moment';
import {Dark} from "../../Utils"
const validation = (props) => {

    const time = moment().format('MMM Do YYYY')
    const [report,setReport]= useState([]);
    const [loading,setLoading] = useState(true);
    const width = Dimensions.get("window").width;

    React.useEffect(() => {
        NetInfo.fetch().then(state => {
            if (state.isConnected === false) {
                alert("network error")
            } else {
                const ref = db.database().ref().child("Customer_data").child(`${time}`)
                ref
                    .on("value", (snapshot) => {
                        const data = snapshot.val();
                        if(data !== null){
                            const translateData = Object.values(data)
                             setReport(translateData)
                             console.log(translateData)
                        }else{
                            setReport([])
                        }
                        
                    })
                    setLoading(false)
            }
        })
    }, [])
    return ( 
        <View style={{flex:1,backgroundColor:Dark.black20}}>
        <FlatList 
        data={report}
        renderItem={({item,index})=>(
          <TouchableOpacity style={{width:width,backgroundColor:"grey",height:60,marginTop:5,paddingHorizontal:10,}} 
          onPress={()=>props.navigation.navigate("validateId",{data:item.data})}
          >
              <Text style={{fontSize:18,marginTop:1}}>{item.name}</Text>

          </TouchableOpacity>
      )}
      keyExtractor={item=>item.index}
      />
    </View>
     );
}
 
export default validation;

const styles = {
    container:{
        flex:1,
        backgroundColor:"white"



    }
}
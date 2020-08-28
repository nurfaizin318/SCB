import React, { useEffect ,useState} from 'react';
import {View,Text,FlatList,TouchableOpacity,Dimensions} from 'react-native';
import db from "../../Config/config";
import NetInfo from "@react-native-community/netinfo";


const ReportList = (props) => {

const [report,setReport]= useState([]);
const width = Dimensions.get("window").width;

React.useEffect(()=>{
    NetInfo.fetch().then(state => {
        if (state.isConnected === false) {
            alert("network error")
        }else{
            const ref = db.database()
            .ref()
            .child("Data")
            .child(props.route.params.date)
            ref
            .once("value",(snapshot)=>{
                const data = snapshot.val();
                const translateData = Object.values(data);
                if(data !== null){
                    setReport(translateData)
                }
                else{
                    setReport([])
                }
                setReport(translateData)
                
            })
             
        }
    })
   
    
},[])

    return ( 
        <View style={{flex:1,}}>
            <FlatList 
            data={report}
            renderItem={({item,index})=>(
              <TouchableOpacity style={{width:width,backgroundColor:"grey",height:60,marginTop:5,paddingHorizontal:10,}} 
              onPress={()=>props.navigation.navigate("ReportDetail",{data:item.data})}
              >
                  <Text style={{fontSize:18,marginTop:1}}>{item.name}</Text>
                  <Text style={{fontSize:18,marginTop:1}}>{item.createdAt}</Text>
  
              </TouchableOpacity>
          )}
          keyExtractor={item=>item.index}
          />
        </View>
     );
}
 
export default ReportList;
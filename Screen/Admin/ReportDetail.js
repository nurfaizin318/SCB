import React, { useEffect ,useState} from 'react';
import {View,Text,FlatList,TouchableOpacity,Dimensions} from 'react-native';
import db from "../../Config/config";
import NetInfo from "@react-native-community/netinfo";


const ReportDetail = (props) => {

const [report,setReport]= useState([]);
const width = Dimensions.get("window").width;

React.useEffect(()=>{
    const list = props.route.params.data;
    if(list !== null){
        setReport(list)
    }else{
        setReport([]);
    }
},[])

    return ( 
        <View style={{flex:1,}}>
          
            <FlatList 
            data={report}
            renderItem={({item,index})=>(
              <View style={{width:width,backgroundColor:"grey",height:250,marginTop:5,paddingHorizontal:10}} 
              >
                  <Text style={{fontSize:18,marginTop:1}}> Organitation : {item.organitation}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> Contact : {item.contact1}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> Positiion : {item.contact2}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> Action : {item.actions}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> Next Plan : {item.nextPlan}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> progress : {item.progress}%</Text>
                  <Text style={{fontSize:18,marginTop:1}}> status : {item.status}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> score : {item.score}</Text>
  
              </View>
          )}
          keyExtractor={item=>item.index}
          />
        </View>
     );
}
 
export default ReportDetail;
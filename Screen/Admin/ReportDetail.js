import React, { useEffect ,useState} from 'react';
import {View,Text,FlatList,TouchableOpacity,Dimensions,Linking, Alert} from 'react-native';
import {Dark} from "../../Utils/Color";



const ReportDetail = (props) => {

const [report,setReport]= useState([]);
const width = Dimensions.get("window").width;

const onLinking = (id) =>{

   
    let url = 'whatsapp://send?text=' + `code Verivication from SCB : ${id}` + '&phone=' + "089652849082";
    Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
       Alert.alert(
         'Please install whats app to send direct message to students via whats app'
       );
     } else {
       return Linking.openURL(url);
     }
   })
}

const onValidation = (id) =>{
    Alert.alert("Hold on!", "Are you sure you want to validation ?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress:()=> onLinking(id) }
      ]);
}


React.useEffect(()=>{
    const list = props.route.params.data;
    if(list !== null){
        setReport(list)
    }else{
        setReport([]);
    }
},[])

    return ( 
        <View style={{flex:1,backgroundColor:Dark.black20}}>
          
            <FlatList 
            data={report}
            renderItem={({item,index})=>(
              <TouchableOpacity style={{width:width,backgroundColor:"grey",height:250,marginTop:5,paddingHorizontal:10}} 
              onLongPress={()=>onValidation(item.id)}
              >
                  <Text style={{fontSize:18,marginTop:1}}> Organitation : {item.organitation}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> Contact : {item.contact1}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> Positiion : {item.contact2}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> Action : {item.actions}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> Next Plan : {item.nextPlan}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> progress : {item.progress}%</Text>
                  <Text style={{fontSize:18,marginTop:1}}> status : {item.status}</Text>
                  <Text style={{fontSize:18,marginTop:1}}> score : {item.score}</Text>
  
              </TouchableOpacity>
          )}
          keyExtractor={item=>item.index}
          />
        </View>
     );
}
 
export default ReportDetail;
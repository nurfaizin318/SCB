import React,{useEffect,useState} from 'react';
import {View,Text,FlatList,TouchableOpacity,Dimensions,ActivityIndicator,} from "react-native";
import db from "../../Config/config";
import NetInfo from "@react-native-community/netinfo";



const UserList = (props) => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    
    const width = Dimensions.get("window").width;


useEffect(()=>{

    NetInfo.fetch().then(state => {
        if(state.isConnected == false ){
            alert("network error")
        }
        else{
            db.firestore()
            .collection("users")
            .get()
            .then( (docs)=>{
                docs.forEach(async (response)=>{
                    await  setData(prevState=>[...prevState,response.data()])
                    await setLoading(false)
                })
            
            })
            
            .catch(error=>{
                alert(error.message)
            })
            
        }
      });


},[])
    return ( 
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

            {loading? 
            <ActivityIndicator />
            :
            <FlatList 
            data={data}
            renderItem={({item,index})=>(
              <TouchableOpacity style={{width:width,backgroundColor:"grey",height:60,marginTop:5,justifyContent:"space-between",paddingHorizontal:10,flexDirection:"row",}} 
              onPress={()=>props.navigation.navigate("UserProfile",{profile:data[index]})}
              >
                  <Text style={{fontSize:18,marginTop:10}}>{item.name}</Text>
                  <Text style={{fontSize:18,marginTop:10}}>{item.status}</Text>
  
              </TouchableOpacity>
          )}
          keyExtractor={item=>item.index}
          />
        }
         
        </View>
     );
}
 
export default UserList;
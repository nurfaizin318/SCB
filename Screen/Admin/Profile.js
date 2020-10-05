import React , {useEffect,useState}from 'react';
import {View,Text, Button} from "react-native";
import {Dark} from "../../Utils";
import {useSelector,useDispatch} from "react-redux";
import db from "../../Config/config";
import {TextInputs} from "../../Component"

const Profile = () => {
    const uid = useSelector(state => state.AuthReducer.uid)
    const [data,setData] = useState({})
    useEffect(()=>{
        db.firestore()
        .collection('User_data')
        .doc(`${uid}`)
        .onSnapshot( async (docs,)=>{
           setData(docs.data().profile)

        })
    },[])

    return (  
        <View style={{flex:1,backgroundColor:Dark.black20,alignItems:"center"}}>
            <View style={{width:"90%",marginTop:10}}>
                <Text style={{color:"grey",fontSize:18}}>name</Text>
                <TextInputs value={data.name}/>
                <Text style={{color:"grey",fontSize:18}}>email</Text>
                <TextInputs value={data.email}/>
                <Text style={{color:"grey",fontSize:18}}>number</Text>
                <TextInputs value={data.number}/>
                <Text style={{color:"grey",fontSize:18}}>address</Text>
                <TextInputs value={data.address}/>
                <Text style={{color:"grey",fontSize:18}}>position</Text>
                <TextInputs value={data.position} />
                <View style={{alignItems:"center",marginTop:30}} >
                    <Button title="Update"  onPress={()=>alert("this fiture not ready")}/>
                </View>
                <View style={{alignItems:"center",marginTop:30}}>
                    <Button title="reset Password"  onPress={()=>alert("this fiture not ready")}/>
                </View>
            </View>
        </View>
    );
}
 
export default Profile;

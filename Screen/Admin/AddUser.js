import React ,{useState} from 'react';
import { View, Text, Button ,Alert,ScrollView} from "react-native";
import { TextInputs } from "../../Component/";
import { Dark } from "../../Utils";
import db from "../../Config/config"

const AddUser = (props) => {

    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [repeatPassword,setRepeatPassword] = useState("");
    const [profile,setProfile] = useState({name:"",number:"",position:"",email:email,address:"",status:"user"})

    const auth = db.auth();

    const createUser = async () =>{

        if(password != repeatPassword){
            alert("password not match");

        }
        else{
            auth.createUserWithEmailAndPassword(email,password)
            .then((user)=>{
                const firebase = db.firestore();
                    firebase.collection("User_data").doc(`${user.user.uid}`).set({
                       profile
                    })
                    .then(function() {
                        alert("berhasil")
                    })
                    .catch(function(error) {
                        alert("gagal")
                    });
            })
            .catch(eror=>{
                alert(eror)
            })
            
            }
        }
      

    const alerts = () => {
        
    }
    return (
        <View style={{ flex: 1, backgroundColor: Dark.black20 }}>
            <ScrollView>
            <View style={styles.input.container}>
                <Text style={{ fontSize: 17, color: "white" }}>
                    email
            </Text>
                <TextInputs 
                onChangeText={(text)=>{setEmail(text),setProfile({...profile,email:text})}}
                />
            </View>
            <View style={styles.input.container}>
                <Text style={{ fontSize: 17, color: "white" }}>
                    password
            </Text>
                <TextInputs 
                onChangeText={(text)=>setPassword(text)}
                
                />
            </View>
            <View style={styles.input.container}>
                <Text style={{ fontSize: 17, color: "white" }}>
                   Repeat password
            </Text>
                <TextInputs 
                onChangeText={(text)=>{setRepeatPassword(text)}}
                />
            </View>
            <View style={styles.input.container}>
                <Text style={{ fontSize: 17, color: "white" }}>
                   name
            </Text>
                <TextInputs 
                onChangeText={(text)=>{setProfile({...profile,name:text})}}
                />
            </View>
            <View style={styles.input.container}>
                <Text style={{ fontSize: 17, color: "white" }}>
                   address
            </Text>
                <TextInputs 
                onChangeText={(text)=>{setProfile({...profile,address:text})}}
                
                />
            </View>
            
            <View style={styles.input.container}>
                <Text style={{ fontSize: 17, color: "white" }}>
                   position
            </Text>
                <TextInputs 
                onChangeText={(text)=>{setProfile({...profile,position:text})}}
                
                />
            </View>
            <View style={styles.input.container}>
                <Text style={{ fontSize: 17, color: "white" }}>
                   number
            </Text>
                <TextInputs 
                                onChangeText={(text)=>{setProfile({...profile,number:text})}}

                />
            </View>
         
            <View style={{width:"100%",alignItems:"center",marginTop:20,paddingBottom:20}}>
           
            <Button  title="submit" onPress={createUser}/>

            </View>
            </ScrollView>
        </View>
    );
}

const styles = {
    input:{
        container:{ 
            width: "100%",
            borderBottomWidth: 0.5,
            borderBottomColor: Dark.black30,
            marginTop:10,
            paddingHorizontal:10
        }
    }
}
export default AddUser;
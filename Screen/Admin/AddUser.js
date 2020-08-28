import React ,{useState} from 'react';
import { View, Text, Button ,Alert} from "react-native";
import { TextInputs } from "../../Component/";
import { Dark } from "../../Utils";
import db from "../../Config/config"

const AddUser = (props) => {

    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [repeatPassword,setRepeatPassword] = useState("");

    const auth = db.auth();

    const createUser = async () =>{

        if(password != repeatPassword){
            alert("password not match");

        }
        else{
            auth.createUserWithEmailAndPassword(email,password)
            .then(user=>{
                Alert.alert(
                    "",
                    "Berhasil membuat akun !",
                    [
                        
                        {
                            text: "next",
                            onPress: () => { props.navigation.navigate("AddDataUser",{uid:user.user.uid}) }
                        }
                    ]
                )
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

            <View style={styles.input.container}>
                <Text style={{ fontSize: 17, color: "white" }}>
                    email
            </Text>
                <TextInputs 
                onChangeText={(text)=>setEmail(text)}
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
            <View style={{width:"100%",alignItems:"center",marginTop:10}}>
           
            <Button  title="submit" onPress={createUser}/>

            </View>

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
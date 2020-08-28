import React from 'react';
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import app from "../../Config/config";
import { Dark } from "../../Utils";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeAdmin = (props) => {


    const dispatch = useDispatch();
    const name = useSelector(state => state.AuthReducer.name);
    const position = useSelector(state => state.AuthReducer.position);


    const onLogOut = async () => {
        await app.auth().signOut();
        await dispatch({ type: 'LOGOUT' })
        await props.navigation.replace('Login');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header.container}>
                <Text style={styles.header.textWelcome}>Welcome</Text>
                <Text style={styles.header.textName}>{name}</Text>
                <Button title="log out" onPress={onLogOut}></Button>
            </View>
            <View style={styles.buttonContainer1}>
                <TouchableOpacity style={styles.menuButton.container}
                onPress={()=>{props.navigation.navigate("AddUser")}}
                >
                     <FontAwesome5 name="user-plus" size={50} color="gray" />
                     <Text style={styles.menuButton.text}>Add User</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton.container} 
                onPress={()=>{props.navigation.navigate("UserList")}}
                >
                <FontAwesome5 name="users" size={50} color="gray" />
                     <Text style={styles.menuButton.text}>User List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton.container} 
                onPress={()=>props.navigation.navigate("Riport")}
                >
                <FontAwesome5 name="server" size={50} color="gray" />
                     <Text style={styles.menuButton.text}>report</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton.container} >

                </TouchableOpacity>
                
                
            </View>
           

        </View>
    );
}

export default HomeAdmin;

const styles = {
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: Dark.black20
    },
    header: {
        container: {
            width: "100%",
            height: "40%",
            backgroundColor: Dark.black30,
            justifyContent: "center",
            alignItems: "center"
        },
        textWelcome: {
            fontSize: 30,
            color: "white"
        },
        textName: {
            fontSize: 20,
            color: "white"
        }
    },
    buttonContainer1: {
        width: "100%",
        height: "50%",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        flexWrap:"wrap",
        marginTop:20,
    },
    menuButton: {
        container:{
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 15,
        marginTop:25,
        justifyContent:"center",
        alignItems:"center"
        },
        text:{
            color:"white",
            marginTop:30
        }
        
    }

}
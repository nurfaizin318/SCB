import React from 'react';
import { View, Text, Button, TouchableOpacity ,BackHandler,Alert} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import app from "../../Config/config";
import { Dark } from "../../Utils";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeAdmin = (props) => {


    const dispatch = useDispatch();
    const name = useSelector(state => state.AuthReducer.name);


    const onLogOut = async () => {



        await app.auth().signOut()
        await dispatch({ type: 'LOGOUT' })
        await props.navigation.replace('Login');
    }

    const Alerts = () => {
        Alert.alert(
            "",
            "Are you sure logout ?",
            [
                {
                    text: "No",
                    onPress: () => { }
                },
                {
                    text: "Yes",
                    onPress: () => { onLogOut() }
                }
            ]
        )
    }


    React.useEffect(()=>{
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to exit ?", [
              {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
              },
              { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
          };
      
          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
      
          return () => backHandler.remove();
    })
    return (
        <View style={styles.container}>
            <View style={styles.header.container}>
                <View style={{width:"100%",height:80}}>
                    <TouchableOpacity style={{width:100,height:80,justifyContent:"center",marginLeft:"70%",
                justifyContent:"center",alignItems:"center",marginTop:10}}
                onPress={Alerts}>
                        <Text style={{color:"white"}}>Log out</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:40,color:Dark.black40}}>Solusi Cipta Budaya</Text>
                <Text style={styles.header.textWelcome}>Welcome</Text>
                <Text style={styles.header.textName}>Admin</Text>
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
                     <Text style={styles.menuButton.text}>Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton.container}
                onPress={()=>props.navigation.navigate("Profile")}
                >
                <FontAwesome5 name="user-cog" size={50} color="gray" />
                     <Text style={styles.menuButton.text}>Profile</Text>
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
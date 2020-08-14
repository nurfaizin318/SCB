import React from 'react';
import { View, Text ,Button} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import app from "../../Config/config";



const HomeAdmin = (props) => {

  
    const dispatch = useDispatch();

    const name = useSelector(state => state.AuthReducer.name);
    const position = useSelector(state => state.AuthReducer.position);

    
    const onLogOut = async () =>{
        await app.auth().signOut();
        await dispatch({ type: 'LOGOUT' })
        await props.navigation.replace('Login');
    }
    return (
        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "aqua" }}>
            <Text style={{ fontSize: 20 }}>Welcome Admin</Text>
            <Text style={{ fontSize: 20 }}>{name}</Text>
            <Text style={{ fontSize: 20 }}>{position}</Text>
            <View style={{marginTop:10}}>
                <Button title="log out" onPress={onLogOut}/>

            </View>

        </View>
    );
}

export default HomeAdmin;
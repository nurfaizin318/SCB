import React ,{Fragment,useState,useEffect}from 'react';
import { View, Text, Button ,StatusBar} from 'react-native';
import { TextInputs } from '../../Component/';
import { Dark } from "../../Utils/Color";
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
           
            username:'',
            password:'',
        }
    }
render(){
    const {username,password} = this.state;

    const onLogin = async ()=>{
     if(username=='Admin' && password=='Admin'){
       await  AsyncStorage.setItem('token','isLogin')
       await this.props.navigation.navigate('Home');
     }
      
    }
    return (
        <Fragment >
            <StatusBar backgroundColor={Dark.black20} barStyle="light-content" />
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={{ height: 70 }} />
                <View>
                    <Text style={styles.box.text}>username</Text>
                    <View  style={styles.box.input}>
                        <TextInputs onChangeText={(value)=>{this.setState({username:value})}}/>
                    </View>

                </View>
                <View style={styles.spacer(30)} />
                <View>
                    <Text style={styles.box.text}>passowrd</Text>
                    <View style={styles.box.input} >
                        <TextInputs onChangeText={(value)=>{this.setState({password:value})}} />
                    </View>
                </View>
                <View style={styles.box.button}>
                    <Button title="Log in" color={Dark.lightOrange} onPress={()=>{onLogin()}}/>
                </View>
            </View>
        </View>
        </Fragment>
    )
}
}
export default Login;

const styles = {
    container: {
        flex: 1,
        backgroundColor: Dark.black20,
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        width: '80%',
        height: '60%',
        backgroundColor: Dark.black30,
        padding: 20,

        text: {
            fontSize: 14,
            color: Dark.black40
        },
        button:{
            marginTop:40
        }

    },
    spacer:(value)=>{
        return{
            height:value
        }
    }
}
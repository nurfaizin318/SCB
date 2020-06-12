import React from 'react';
import {View,Text,TouchableOpacity,Dimensions} from 'react-native';
import {Dark} from '../../../Utils'

const LibraryList = (props) =>{

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    return(
        <TouchableOpacity style={{ ...styles.container,width: width, height: 120,}}>
        <View style={{ ...styles.subContainer,width: width / 1.1,}}>
           
            <View style={styles.card.body}>

            <View style={styles.card.boxItems}>
                    <Text style={{fontSize:30}}>
                        8
                    </Text>
                    <Text>
                        Items
                    </Text>
            </View>
            <View style={{width:"65%",height:'100%',padding:10}}>
                <Text style={{color:'grey'}}>
                    {props.time}
                </Text>
                <View style={{flexDirection:"row",backgroundColor:"red"}}>
                    {/* <TouchableOpacity style={{width:80,height:30,backgroundColor:Dark.lightGreen,justifyContent:"center",alignItems:"center",borderRadius:3,marginTop:25,marginLeft:'30%'}}>
                    <Text >delete</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            </View>
            
        </View>
    </TouchableOpacity>
    )
}

export default LibraryList;
const styles ={
    container:{
        marginVertical: 3,
         justifyContent: "center", 
         alignItems: "center",
    },
    subContainer:{
        height: '90%',
         borderRadius: 10, 
         alignItems:"center" ,
         justifyContent:"flex-end",
    },
    card:{
        body:{
            width:'100%',
            height:'90%',
            backgroundColor:Dark.black30,borderRadius:10,
            flexDirection:"row",
        },
        boxItems:{
            width:"30%",
            height:'110%',
            backgroundColor:Dark.lightOrange,
            marginLeft:20
            ,borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
            top:-2,
            justifyContent:"center",
            alignItems:"center"
        }
       
    }
}

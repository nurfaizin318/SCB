import React,{Fragment,useState, useEffect} from 'react';
import {View ,Text,StyleSheet,TouchableOpacity,StatusBar,FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Dark} from '../../Utils';;
import {CardLibrary} from '../../Component';
import {useDispatch,useSelector} from 'react-redux'


 const Search = () => 
    {

        const dataFromState = useSelector(state => state.DataReducer.data);
        const dispatch= useDispatch();
        const onDelete = async (id) => {
            try {
                await dispatch({ type: "ON_DELETE", payload: id })
            } catch (e) {
                alert(e)
            }
        }
    
     return (
        <Fragment>
            <StatusBar backgroundColor={Dark.black20} tintColor="light"  />
            <View style={{flex:1,justifyContent:'center',alignItems:"center",backgroundColor:Dark.black20}}>
               <FlatList
                  
                        style={{ alignSelf: "center" }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={dataFromState}
                        renderItem={({ item, index }) =>
                                <CardLibrary 
                                organitation={item.organitation}
                                actions={item.acitem}
                                progress={item.progress}
                                contact1={item.contact1}
                                contact2={item.contact2}
                                nextPlan={item.nextPlan}
                                result={item.result}
                                id={item.id}
                                time={item.tim}
                                onDelete={()=>{onDelete(item.id)}}
                                />
                          } 
                        keyExtractor={items=>items.index}
                        key={items=>items.index}
                    />

            </View>
        </Fragment>
             )

    }

export default Search;

const styles = StyleSheet.create({

})

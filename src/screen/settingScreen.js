import React ,{useContext,useEffect,useState} from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Switch } from 'react-native';
import * as firebase from 'firebase'; 
import {StoreContext}from "../store/UserStore.js";

const setting = ({navigation}) => {

    const { isLoginState } = useContext(StoreContext);
    const [isLogin, setIsLogin] = isLoginState;
  

    const isignInsaveToAsyncStorage = () => {
        try{
            AsyncStorage.setItem(SIGN_PERSISTENCE_KEY,JSON.stringify(false));
            AsyncStorage.setItem(SIGN_HAS_SET_KEY.stringify(true));
        }catch(e){}
    };

    useEffect(()=>{
        isignInsaveToAsyncStorage();
    },[isLogin]);

    const onSignOut = async () => {
        firebase.auth().signOut();
        setIsLogin(false);
        
      };
    return (
        <View style={{backgroundColor:'#fff',height:8850}}>
            {/* headerStart-------------------------- */}
            <View style={{
                height: 88,
                backgroundColor: '#F0A202',
                flexDirection: "row",
                justifyContent: 'flex-start',

            }}>
                <View style={{
                    //backgroundColor: 'red',
                    width: 42,
                    justifyContent: "flex-end",
                }}>
                    <TouchableOpacity
                     onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../img_yu/back_white.png')}
                            style={{
                                marginBottom: 8,
                                marginLeft: 16
                            }} /></TouchableOpacity>
                </View>
                <View style={{
                    // backgroundColor: 'blue',
                    width: 291,
                    justifyContent: 'flex-end',
                    alignItems: 'center',

                }}>
                    <Text style={{ fontSize: 20, color: '#fff', marginBottom: 12 }}>聊天</Text>
                </View>
                <View style={{
                    // backgroundColor: 'green',
                    width: 42
                }}></View>
            </View>
            {/* headerEnd-------------------------- */}

            <ScrollView style={{ height: 200 }}>
                {/* chat_1Start----------------------- */}
                <View style={{
                    height: 44,
                    // backgroundColor: 'pink',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderBottomWidth: '1',
                    borderBottomColor: "#E1E1E1"
                }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                color: "#949494",
                                marginLeft: 26
                            }}>更改名稱</Text>
                    </View>
                </View>
                {/* chat_1End----------------------- */}
                {/* chat_2Start----------------------- */}
                <View style={{
                    height: 44,
                    // backgroundColor: 'pink',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderBottomWidth: '1',
                    borderBottomColor: "#E1E1E1"
                }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                color: "#949494",
                                marginLeft: 26
                            }}>更改密碼</Text>
                    </View>
                </View>
                {/* chat_2End----------------------- */}
                {/* chat_3Start----------------------- */}
                <View style={{
                    height: 44,
                    //backgroundColor: 'pink',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: '1',
                    borderBottomColor: "#E1E1E1"
                }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                color: "#949494",
                                marginLeft: 26
                            }}>允許推播</Text>
                    </View>
                    <View style={{
                       // backgroundColor:'#000',
                        flexDirection:'row',
                        justifyContent:'flex-end',
                        width:260
                        }}>
                    <Switch
                    //trackColor={{ false: "red", true: "blue" }}
                    // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#F0A202"
                    //style={{marginRight:16}}
                    // onValueChange={toggleSwitch}
                    // value={isEnabled}
                    />
                    </View>
                </View>
                {/* chat_3End----------------------- */}
                 {/* chat_4Start----------------------- */}
                 <View style={{
                    height: 44,
                    // backgroundColor: 'pink',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderBottomWidth: '1',
                    borderBottomColor: "#E1E1E1"
                }}>
                    <View>
                        <TouchableOpacity onPress={onSignOut}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: "#949494",
                                marginLeft: 26
                            }}>登出</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* chat_4End----------------------- */}

            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({

});
export default setting;
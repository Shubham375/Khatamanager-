import {View,StyleSheet, Pressable,Text, FlatList, Image, TouchableOpacity,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react';
import * as Contacts from 'expo-contacts';
import { SetDataStorage } from './GetSetData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContactFile = () =>{
    const [contactList,setContactList]=useState();
    const navigation = useNavigation();

    const SetToData = async(a,b) => {
        const value =[{
            name:a,
            num:b,
     }];
        try {
            const jsonValue = await AsyncStorage.getItem('@costumerList');
            const data=JSON.parse(jsonValue);
             if (data!=null) {
                if (data.includes(value,0)) {console.log("aleart");
                Alert.alert('This Contact is alredy a Costumer',[
                    {text:'Cancel',style:'cancel'},{text:'Ok'}
                ]
   
                )
                } else {console.log('notKnow');
                const value2 =[...data,{
                    name:a,
                    num:b,
             }];
             const jsonValue2 = JSON.stringify(value2);
             await AsyncStorage.setItem('@costumerList',jsonValue2);
             console.log("AllSetNotNull");
                }
            } else {
                const value3 =[{
                    name:a,
                    num:b,
             }];
             const jsonValue3 = JSON.stringify(value3);
             await AsyncStorage.setItem('@costumerList',jsonValue3);
             console.log("AllSetNull");
            } 
        } catch (error) {
            console.log(error);
        }
    };
    const ContactImage = () => {
        if (rawData.imageAvailable) { return(
            <View style={style.imageContainer}>
               <Image style={style.img} source={{uri:rawData.image.uri}}/>
           </View>)
        } else {
            return(
            <View style={style.imageContainer}>
                <Image style={style.img} source={require('../assets/undefiniedContactImage.png')}/>
            </View>)
        }
    };

    const GetUserContacts = async () => {
        try {
            const { status }= await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data }=await Contacts.getContactsAsync({
                    fields:[Contacts.Fields.PhoneNumbers,Contacts.Fields.Image]
                });
                const GetContact = (item) => {/* 
                    const obj = {name:item.name,num:item.phoneNumbers[0]}; */
                    const GetImage = () => {
                       if (item.imageAvailable) {
                        return {uri:item.image.uri};
                       } else {
                        const k = require('../assets/undefiniedContactImage.png');
                        return k
                       }
                    };console.log(GetImage());
                    if (Array.isArray(item.phoneNumbers)) {
                        const obj = {name:item.name,
                            num:item.phoneNumbers[0].number,
                            key:item.id,
                            imageUri:GetImage(),
                        };
                        return obj;
                    }else{}
                 };const dataArray = data.map(GetContact);
                 const fltArray = dataArray.filter((el)=>{return el != null;});
                 setContactList(fltArray);
                 
            } else {
                console.log('no permission get');
            }} catch(e){console.log(e);}
    };
    useEffect(()=>{GetUserContacts()},[]);

    return(
            <View style={style.container}>
                
                <FlatList data={contactList}
                keyExtractor={(item)=>item.key}
                maxToRenderPerBatch={10}
                  renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>{SetToData(item.name,item.num);}}>
                        <View style={style.listContainer}>
                        <View style={style.imageContainer}>
                <Image style={style.img} source={item.imageUri}/>
            </View>
                            <View style={style.listContantText}>
                                <Text style={style.listText}>{item.name}</Text>
                                <Text style={style.number}>{item.num}</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    )
                  }}/><View style={style.buttonContainer}>
            <Pressable onPress={()=>{navigation.navigate('Home');}}
            style={style.button}>
                <Text style={style.text}>OK</Text>
            </Pressable></View>
            </View>)
};
const style = StyleSheet.create({
    listContainer:{
        height:75,
        width:340,
        margin:10,
          borderRadius:25,
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'row',
    },
    imageContainer:{
        height:75,
        width:70,
        justifyContent:'center',
        alignItems:'center',
        borderBottomStartRadius:25,
        borderTopStartRadius:25,
        marginLeft:10,
    },
    img:{
        height:60,
        width:60,
        borderRadius:30,

    },
    listContant:{
        height:75,
        width:280,
        borderBottomEndRadius:25,
        borderTopEndRadius:25,
    },
    container:{
        height:720,
        width:'100%',
        margin:2,
        display:'flex',
        flexDirection:'column',
        marginTop:20,
    },
    button:{
        backgroundColor:'#1a53ff',
        borderRadius:60,
        height:60,
        width:60,
        alignItems:'center',
        justifyContent:'center',
        textTransform:'uppercase',
       borderColor:'#0033cc',
        borderWidth:5,
        
        top:550,
        left:280, 
    },
    text:{
           color:'#fff',
        fontSize:18,
         fontWeight:'bold',
        textAlign:'center',
    },
    buttonContainer:{
     position:'absolute',
     
     },
    listText:{
         marginLeft:10,
        fontSize:18,
         fontWeight:'bold',
    },
    number:{
     marginLeft:20,
     color:'#666666',
     },
     listContantText:{
        justifyContent:'center',
     }
});

export default ContactFile;
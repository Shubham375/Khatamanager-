import {Text,TextInput,View,StyleSheet,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Costumers from './CostumerList';
import React,{useState} from 'react';


const UI = () =>{
    const navigation = useNavigation();

    return(
        <>
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.text}>you will get</Text>
            </View>
            <View style={{backgroundColor:'#e6ecff',height:557,}}>
                <View style={style.neck}>
                <TextInput onChange={()=>{}}></TextInput>
                
            </View>
            <View style={style.body}>
               
               <Costumers/>
                
                </View>
               
            </View>
        </View>
         <View style={style.buttonContainer}>
         <Pressable style={style.button}  onPress={()=>{navigation.navigate("Contacts")}}>
             <Text style={style.text}>Press</Text>
         </Pressable>
         </View>
         </>
    )
}

const style = StyleSheet.create({
    container:{
        height:720,
        width:'100%',
        margin:2,
        display:'flex',
        flexDirection:'column',
        marginTop:20,
        
    },
    header:{
        height:'20%',
        width:'100%',
        backgroundColor:'#1a53ff',
        alignItems:'center',
        justifyContent:'center',
        textTransform:'uppercase',
    },
    neck:{
        height:'7%',
        width:'100%',
        borderColor:'#668cff',
        backgroundColor:'#b3c6ff',
        borderWidth:5,
       
    },
    body:{
        backgroundColor:'#EEF0F5',
        width:'100%',
        height:'100%',
    },
    text:{
        textTransform:'uppercase',
        color:'#fff',
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
    buttonContainer:{
        position:'absolute',
        
    }
});

export default UI;
import { View,Text,TextInput,Button,StyleSheet } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const AddToData = ()=>{
    const [name,setName]=useState('');
    const [amount,setAmount]=useState(0);
    const [number,setNumber]=useState('');

    const setData = async(value)=>{
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@costumerList',jsonValue);
        } catch (error) {
            console.log(error);
        }
    }
    
        return(
            <View>
                <View style={style.container}>
                    <Text style={style.text}>Name</Text>
                    <TextInput 
                    onChangeText={text=>setName(text)} 
                    value={name}
                    style={style.input}
                    ></TextInput>
                    <Text style={style.text}>amount</Text>
                    <TextInput 
                    onChangeText={text=>setAmount(text)}
                    value={amount}
                    style={style.input}
                     ></TextInput>
                    <Text style={style.text}>number</Text>
                    <TextInput 
                    onChangeText={text=>setNumber(text)}
                    value={number}
                    style={style.input}
                     ></TextInput>
                     <Button accessibilityLabel='save'
                     onPress={()=>{
                         const info = {
                             Name:name,
                             Amount:amount,
                             Number:number,
                         };
                        setData(info);
                     }}/>
                </View>
            </View>
        )
    }


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input:{
          borderBottomWidth: 2,
          borderBottomColor:'black',
          height:55,
          padding:10,
          margin:4,
        },
    text:{
        marginTop:34,
        margin:24,
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },

})

export default AddToData;
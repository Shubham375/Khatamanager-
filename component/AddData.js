import { Text,View,StyleSheet,TextInput,Button,Alert,ScrollView} from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import React,{ useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';




const AddToData = ()=>{
    const [name,setName]=useState(null);
    const [amount,setAmount]=useState(null);
    const [number,setNumber]=useState(null);
    const [realData,setRealData]=useState(null);
    const navigation = useNavigation();

    const GetData = async ()=>{
        try {
           const jsonValue = await AsyncStorage.getItem('@costumerList');
           const data=JSON.parse(jsonValue);
           
            setRealData(data)
          
          
         ;
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(()=>{GetData();},[]);

    const setData = async(value)=>{
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@costumerList',jsonValue);
            
        } catch (error) {
            console.log(error);
        }
    }

        const pressEvent =()=>{
            const info =[...realData,{
                Name:name,
                Amount:amount,
                Number:number,
            }];
           /* setData(name); */
           if(name===null|| amount===null||number===null){
             Alert.alert('Undefined','Please fill the section it`s requried',[
                 {text:'Cancel',style:'cancel',
                 onPress:()=>{navigation.navigate('Home')}
               },{text:'Ok'}
             ]

             )
           }
           else{
           
               setData(info)
               navigation.navigate('Home')
           }
        }
    
        return(
            <ScrollView>
                <View /* style={style.container} */>
                    <Text style={style.text}>Name</Text>
                    <TextInput 
                    
                    placeholder='Name'
                    keyboardType='default'
                    onChangeText={text=>setName(text)} 
                    value={name}
                    style={style.input}
                    ></TextInput>
                    <Text style={style.text}>Amount</Text>
                    <TextInput 
                    placeholder='Amount'
                    keyboardType='numeric'
                    onChangeText={text=>setAmount(text)}
                    value={amount}
                    style={style.input}
                     ></TextInput>
                    <Text style={style.text}>Number</Text>
                    <TextInput 
                    placeholder='Phone Number'
                    maxLength={10}
                    
                    keyboardType='numeric'
                    onChangeText={text=>setNumber(text)}
                    value={number}
                    style={style.input}
                     ></TextInput>
                     <Button title='Save'
                     onPress={()=>{pressEvent()}}/>
                </View>
            </ScrollView>
        )
    }

    const style = StyleSheet.create({
        
        input:{
            borderBottomWidth: 2,
            borderBottomColor:'black',
            height:55,
            padding:10,
            margin:4,
          },
        text:{
           
             fontSize:18,
              fontWeight:'bold',
             textAlign:'center',
      },
    })

    export default AddToData;
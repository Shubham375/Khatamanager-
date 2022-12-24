
import {FlatList, Text,View,StyleSheet,Image} from 'react-native';
import {React,useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


  /* #00134d
  #002080
   #0033cc
   #1a53ff
    #668cff
    #b3c6ff
     #e6ecff
  */

 
        
        
    
     

    const Costumers = ()=> {
        const [Data,setData]=useState();
        const [load,setLoad]=useState(false);
       
       
        const GetDataStorageMn = async() => {
          try {
                 const jsonValue = await AsyncStorage.removeItem('@costumerList')
                /*  const data=JSON.parse(jsonValue);
                 setData(data);  */}catch(e){
                  console.log(e);
              }
          
   };
          useEffect(()=>{GetDataStorageMn();})
        
        const showData = ({item})=>{
          
            return(
              <View style={style.listContainer}>
              <View style={style.imageContainer}>
                  <Image style={style.img} source={require('../assets/undefiniedContactImage.png')}/>
              </View>
              <View style={style.listContantText}>
                  <Text style={style.listText}>{item.name}</Text>
                  <Text style={style.number}>{item.num}</Text>
              </View>
          </View>
            )
        }
        return(<View >
            <FlatList data={Data} 
            keyExtractor={(item)=>item.num}
            renderItem={showData}
            extraData={load}
    /></View>  )
    }
   




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
    })

    export  default Costumers;
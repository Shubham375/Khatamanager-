
import {FlatList, Text,View,StyleSheet,Pressable,ScrollView} from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import {React,useState,useEffect} from 'react';



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
       
       
        const GetData =  async ()=>{
            try {
               const jsonValue = await AsyncStorage.getItem('@costumerList');
               const data=JSON.parse(jsonValue); 
               setData(...data);
              /*  console.log(Data); */
            } catch (e) {
                console.log(e);
            }
        }

        useEffect(()=>{GetData()},[])
        
        const showData = ({item})=>{
          
            return(
                
                <View style={style.container}>
                    <View >
                    <Text style={style.text}>{item.Name}</Text>
                    <Text style={style.number}>{item.Number}</Text>
                    </View>
                   
                    <Text style={style.getAmount}>{item.Amount}</Text>
                    
                </View>
            )
        }
        return(<View >
            <Pressable style={{
                    height:50,
                    width:55,
                    backgroundColor:'#fff',
                    left:300,
                    borderRadius:50,
                    alignItems:'center',
                    justifyContent:'center',
                }} onPress={()=>{setLoad(!load);}}>
                    <Text>Press</Text>
                    </Pressable>
            <FlatList data={Data} 
            keyExtractor={(item)=>item.Number}
            renderItem={showData}
            extraData={load}
    /></View>  )
    }
   




    const style = StyleSheet.create({
        container:{
            height:75,
            width:340,
            margin:10,
            display:'flex',
            flexDirection:'row',
              borderRadius:25,
            justifyContent:'space-between',
            backgroundColor:'#fff',
            alignItems:'center',
          
        },
        
        text:{
            marginLeft:20,
             fontSize:18,
              fontWeight:'bold',
             textAlign:'center',
      },
      getAmount:{
        color:'#ff0000',
        fontSize:18,
         fontWeight:'bold',
         marginRight:15,
      },
      number:{
        marginLeft:30,
        color:'#666666',
      }
    })

    export  default Costumers;
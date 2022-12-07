import {FlatList, Text,View,StyleSheet} from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const Costumers = ()=> {
    const GetData = async(value)=>{
        try {
           const jsonValue = await AsyncStorage.getItem('@costumerlist');
           return jsonValue!==null?JSON.parse(jsonValue):null; 
        } catch (e) {
            console.log(e);
        }
    }
    return(<FlatList data={GetData} 
                        renderItem={(e)=>{
                            <View style={style.container}>
                                <Text style={style.text}>{e.Item.Name}</Text>
                                <Text>{e.Item.Amount}</Text>
                                <Text>{e.Item.Number}</Text>
                            </View>
                        }}
    />)
}

const style = StyleSheet.create({
    container:{
        height:'80%',
        width:'40%',
        margin:10,
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        borderRadius:10,
    },
    text:{
        textTransform:'uppercase',
    }
})

export default Costumers;
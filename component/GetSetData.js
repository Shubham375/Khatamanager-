import AsyncStorage from "@react-native-async-storage/async-storage";

const SetDataStorage = async(name,number) =>{
              try {
                 const jsonValue = await AsyncStorage.getItem('@costumerList');
                 const data=JSON.parse(jsonValue);
                 const value =[...jsonValue,{
                    name:name,
                    num:number,
             }];
             const jsonValue2 = JSON.stringify(value);
             await AsyncStorage.setItem('@costumerList',jsonValue2);
             console.log("AllSet");
              } catch (e) {
                  console.log(e);
              }
          
};

const GetDataStorage = async() => {
       try {
              const jsonValue = await AsyncStorage.getItem('@costumerList');
              const data=JSON.parse(jsonValue);
              return data
           } catch (e) {
               console.log(e);
           }
       
};


export  {SetDataStorage,GetDataStorage};
import UI from './component/UserInterface.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddToData from './component/AddData';
import ContactFile from './component/Contacts.js';
import React from 'react';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={UI}/>
        <Stack.Screen name="AddData" component={AddToData}/>
        <Stack.Screen name="Contacts" component={ContactFile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



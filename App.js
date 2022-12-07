import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native';
import UI from './component/UserInterface.js'

export default function App() {
  return (
    <View>
     <UI/>
      <StatusBar style="auto" />
    </View>
  );
}



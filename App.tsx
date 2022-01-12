/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Data from './screens/Data'



const Stack = createNativeStackNavigator();
const App = () => {

  const colorScheme = useColorScheme();
  const [count, setcount] = useState(0);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{statusBarHidden: true, headerShown: false}}/>
          <Stack.Screen name="Data" component={Data} options={{title: "Just For You", "headerStyle": [{backgroundColor: "#ff85a1"}], "headerBlurEffect": "prominent"}} />
        </Stack.Navigator>  
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  nameInput: {
    width: '80%',
    height: 40,
    borderColor: '#FFB3D1',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 15,
    alignSelf: 'center',
    textAlign: 'center',
    minHeight: 50,
    fontSize: 20,
    fontWeight: 'bold',
    // backgroundColor: '#fff',
    color: 'black'
  },

});

export default App;

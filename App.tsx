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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const HeadingText = (props: { text: string }) => {
  let colorScheme = useColorScheme();

  return (
    <Text style={
      [
        {
          color: '#333333',
          fontSize: 30,
          alignSelf: 'center',
          marginBottom: 20,
          fontFamily: 'Beauty',
        },
      ]
    }>
      {props.text}
    </Text>
  );
};

const GetInButton = (props: { onPress: () => void }) => {

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: '#FF559D',
          padding: 10,
          borderRadius: 15,
          margin: 20,
          width: '50%',
        }
      ]}
      onPress={props.onPress}
    >
      <Text style={{ color: 'white', fontSize: 18, alignSelf: "center", fontWeight: '900' }}>
        Get In
      </Text>
    </TouchableOpacity>
  );
};



const App = () => {

  const colorScheme = useColorScheme();
  const [count, setcount] = useState(0);
  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode='cover'
        source={require('./assets/images/bg-1.png')}
      >
        <View style={styles.container}>
          <HeadingText text={'Just For Her 💖'} />
          <TextInput style={styles.nameInput} placeholder='Enter Your Name' placeholderTextColor={"grey"}>
          </TextInput>
          <GetInButton onPress={() => { }}></GetInButton>
        </View>
      </ImageBackground>
    </SafeAreaView >
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    AES
} from 'crypto-js'
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
    ToastAndroid,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { Decode, Encode } from '../helpers/decoder';

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


// for future improvement visit https://stackoverflow.com/questions/63132548/react-navigation-5-error-binding-element-navigation-implicitly-has-an-any-ty

const Home = ({ navigation }: any) => {

    const colorScheme = useColorScheme();
    const [name, setName] = useState('');

    return (
        <SafeAreaView>
            <ImageBackground
                style={{
                    width: '100%',
                    height: '100%',
                }}
                resizeMode='cover'
                source={require('../assets/images/bg-1.png')}
            >
                <View style={styles.container}>
                    <HeadingText text={'Just For Her 💖'} />
                    <TextInput style={styles.nameInput} onChangeText={setName} placeholder='Enter Your Name' placeholderTextColor={"grey"}>
                    </TextInput>
                    <GetInButton onPress={() => {
                        if (name.length > 0) {
                            if(Decode(Encode(name, name), name) === Decode("U2FsdGVkX1+iUeFJ8tv3USO7cewyWy+GHAUlmdvNZZ0=", name)){
                                ToastAndroid.show("Welcome " + name + ", This App Was Meant To Be Coded Just For You 😀", ToastAndroid.LONG);
                                navigation.navigate('Data', { name: name });
                            }else{
                                ToastAndroid.show('Sorry! This App is Not For You, It\'s Only For "Her"', ToastAndroid.SHORT);
                            }
                        }else{
                            ToastAndroid.show("Please enter your name", ToastAndroid.SHORT);
                        }
                    }}></GetInButton>
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

export default Home;

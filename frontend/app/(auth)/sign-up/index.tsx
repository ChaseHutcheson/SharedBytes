import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext';
import { Link, Redirect } from 'expo-router';
import { useFonts } from 'expo-font';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { contextSignUp, isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Redirect href="/(app)/(tabs)/" />
    }

    return (
        <SafeAreaView style={{ marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Create an Account</Text>
                <Text style={styles.underText}>Share a meal, double the hope</Text>
                <View>
                    <TextInput style={styles.textInput} placeholder='Username' onChangeText={(e) => setUsername(e)} />
                    <TextInput style={styles.textInput} placeholder='Email' onChangeText={(e) => setEmail(e)} />
                    <TextInput style={styles.textInput} placeholder='Password' onChangeText={(e) => setPassword(e)} />
                    <TouchableOpacity
                        onPress={() => {
                            console.log({
                                "email": email,
                                "username": username,
                                "password": password
                            })
                            contextSignUp(username, email, password);
                        }}
                    >
                        <View>
                            <Text>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                    <Link href="/(auth)/sign-in/">
                        <Text>Already Have an account? Sign In!</Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        fontFamily: "DmSans",
        marginVertical: 5
    },
    underText: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 90,
        color: "#4F4F4F"
    },
    image: {
        width: '50%',
        aspectRatio: 1,
    },
    button: {
        backgroundColor: 'transparent',
        padding: 20,
        width: 330,
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#31A062'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    textInput: {
        borderColor: '#828282',
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        paddingHorizontal: 10,
        marginVertical: 5
    }
});

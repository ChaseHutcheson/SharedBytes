import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext';
import { Link } from 'expo-router';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { contextSignUp } = useAuth();

    return (
        <SafeAreaView style={{marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <View>
            <Text>SignUp</Text>
            <TextInput onChangeText={(e) => setUsername(e)}/>
            <TextInput onChangeText={(e) => setEmail(e)}/>
            <TextInput onChangeText={(e) => setPassword(e)}/>
            <TouchableOpacity
                onPress={() => {
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
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
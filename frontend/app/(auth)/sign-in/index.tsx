import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext';
import { Link, Redirect } from 'expo-router';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { contextSignIn, isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Redirect href="/(app)/(tabs)/" />
    }

    return (
        <SafeAreaView style={{marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <View>
                <Text>SignIn</Text>
                <TextInput onChangeText={(e) => setEmail(e)} />
                <TextInput onChangeText={(e) => setPassword(e)} />
                <TouchableOpacity
                    onPress={() => {
                        contextSignIn(email, password);
                    }}
                >
                    <View>
                        <Text>Sign in</Text>
                    </View>
                </TouchableOpacity>
                <Link href="/(auth)/sign-up/">
                    <Text>Dont have an account? Sign Up!</Text>
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default SignIn

const styles = StyleSheet.create({})
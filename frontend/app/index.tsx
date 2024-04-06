import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { Link, Redirect } from 'expo-router'

export default function App() {
    const { isAuthenticated } = useAuth()

    if (isAuthenticated) {
        return <Redirect href="/(app)/(tabs)/two" />
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
            <Link href="/(auth)/sign-in">
                <Text>Get Started</Text>
            </Link>
        </View>
    )
}
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/components/useColorScheme';
import { useAuth } from '@/context/AuthContext';

export default function _layout() {
    const colorScheme = useColorScheme();
    const { isAuthenticated } = useAuth()

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            {isAuthenticated ? (
                    <Stack>
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    </Stack>
                ) : (
                    <Stack>
                        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    </Stack>
                )}
        </ThemeProvider>
    )
}
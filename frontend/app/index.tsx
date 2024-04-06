import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { Link, Redirect } from 'expo-router'
import Button from '@/components/button'

export default function App() {
    const { isAuthenticated } = useAuth()

    if (isAuthenticated) {
        return <Redirect href="/(app)/(tabs)/two" />
    }

    const pic = 'https://cdn.discordapp.com/attachments/1196283193821761586/1226005913492787240/noun-cookie-6515787.png?ex=662331fb&is=6610bcfb&hm=7f6469b1debe2c78ed55c6e06dae97bb9d37d9668708a504fe9bee4accafc3e7&';

    return (
      <View style={styles.container}>
        <Image source={{ uri: pic }} style={styles.image}/>
        <Text style={styles.title}>SharedBytes</Text>
        <Text style={styles.underText}>Nourishing communities one at a time.</Text>
        
        <Button text='Create Account'></Button>
        
        <TouchableOpacity style={styles.button}>
            <Link href="/(auth)/sign-in">
                <Text style={styles.buttonText}>Login</Text>
            </Link>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 34,
      fontWeight: 'bold',
      marginVertical: 5
    },
    underText: {
      fontSize: 17,
      fontWeight: '600',
      marginBottom: 90
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
  });
  
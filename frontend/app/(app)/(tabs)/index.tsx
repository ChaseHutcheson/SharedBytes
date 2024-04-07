import { StyleSheet, Image, Pressable, TouchableHighlight, Dimensions } from 'react-native';
import { Text, View } from '@/components/Themed';
import Button from '@/components/button';
import { useAuth } from '@/context/AuthContext';

export default function TabOneScreen() {
  const { user } = useAuth()

  const pic = 'https://cdn.discordapp.com/attachments/1196283193821761586/1226005913492787240/noun-cookie-6515787.png?ex=662331fb&is=6610bcfb&hm=7f6469b1debe2c78ed55c6e06dae97bb9d37d9668708a504fe9bee4accafc3e7&';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user?.username}</Text>
      <Text style={styles.underText}>Welcome!</Text>
      <TouchableHighlight
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        backgroundColor:'transparent',
        borderColor: "#31A062",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Circle Test</Text>
    </TouchableHighlight>
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

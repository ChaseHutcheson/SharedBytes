import { StyleSheet, Image, Pressable, TouchableHighlight, Dimensions } from 'react-native';
import { Text, View } from '@/components/Themed';
import Button from '@/components/button';
import { useAuth } from '@/context/AuthContext';

export default function TabOneScreen() {
  const { user } = useAuth()


  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
      <Text style={styles.title}>{user?.username}</Text>
      <Text style={styles.underText}>Welcome!</Text>
      </View>
      <View style={styles.circle}>
        <Text style={styles.underText}>Byte Tracker</Text>
        <Text style={styles.title}>1,234</Text>
        <Text style={styles.underText}>status</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>SharedBytes</Text>
        <Text style={styles.underText}>HACK YSU Foodbank</Text>
        <Text style={styles.underText}>MCCTC Foodbank</Text>
        <Text style={styles.underText}>Cincinatti Foodbank</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    top:100,
    left:-110,
    justifyContent: 'center'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  underText: {
    fontSize: 17,
    fontWeight: '600',
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
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'transparent',
    shadowColor: '#31A062',
    shadowOpacity: 1,
    shadowRadius: 15,
  },
});

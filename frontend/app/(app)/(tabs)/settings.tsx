import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useAuth } from '@/context/AuthContext';

export default function TabTwoScreen() {
  const { user } = useAuth()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user?.id}</Text>
      <Text style={styles.title}>{user?.username}</Text>
      <Text style={styles.title}>{user?.email}</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
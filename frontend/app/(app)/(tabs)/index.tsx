import { Text, View } from "@/components/Themed";
import Button from "@/components/button";
import { useAuth } from "@/context/AuthContext";
import { Center } from "native-base";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function TabOneScreen() {
  const { user } = useAuth();

  return (
    <SafeAreaView style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1}}>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
      <View style={{ left: -90, justifyContent: "center", marginBottom: "50%" }}>
        <Text style={{ fontSize: 34, fontWeight: "bold", marginVertical: 5 }}>
          {user?.username}
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>Welcome!</Text>
      </View>
      <Center>
         <View
        style={ Platform.OS === "ios" ? {
          alignItems: "center",
          justifyContent: "center",
          width: 200,
          height: 200,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: "transparent",
          shadowColor: "#31A062",
          shadowOpacity: 1,
          shadowRadius: 15,
        } : {
          alignItems: "center",
          justifyContent: "center",
          width: 200,
          height: 200,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: "transparent",
          shadowColor: "#31A062",
          shadowOpacity: 1,
          shadowRadius: 15,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "600" }}>Byte Tracker</Text>
        <Text style={{ fontSize: 34, fontWeight: "bold", marginVertical: 5 }}>
          1,234
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>status</Text>
      </View>
      </Center>
     
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 34, fontWeight: "bold", marginVertical: 5 }}>
          SharedBytes
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>
          HACK YSU Foodbank
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>MCCTC Foodbank</Text>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>
          Cincinatti Foodbank
        </Text>
      </View>
    </View>
    </SafeAreaView>
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
    fontSize: 15,
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

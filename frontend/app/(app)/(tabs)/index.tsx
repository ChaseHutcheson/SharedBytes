import { Text } from "@/components/Themed";
import Button from "@/components/button";
import { useAuth } from "@/context/AuthContext";
import { Feather } from "@expo/vector-icons";
import { Box, Center, Icon, View } from "native-base";
import { Platform, SafeAreaView, StatusBar } from "react-native";

export default function TabOneScreen() {
  const { user } = useAuth();

  return (
    <SafeAreaView style={{ marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ flexDirection: 'row', alignSelf: "baseline" }}>
          <Box
            bgColor="gray.200"
            borderRadius={90}
            width={16}
            height={16}
            style={{ marginLeft: 15, marginRight: 5 }}
          >
            <Center>
              <Icon as={Feather} name="user" size={10} my={3} />
            </Center>
          </Box>
          <View style={{ flexDirection: 'column', gap: -6 }}>
            <Text style={{ fontSize: 34, fontWeight: "bold" }}>
              {user?.username}
            </Text>
            <Text style={{ fontSize: 13, fontWeight: '400', color: 'grey', marginLeft: 3 }}>Welcome!</Text>
          </View>
        </View>
        <View style={{ alignItems: 'baseline' }}>

          <View style={{ }}>
            <Center>
              <View
                style={Platform.OS === "ios" ? {
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
      </View>
    </SafeAreaView>
  );
}

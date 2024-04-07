import { Text, View } from "@/components/Themed";
import Button from "@/components/button";
import { useAuth } from "@/context/AuthContext";

export default function TabOneScreen() {
  const { user } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ top: 100, left: -110, justifyContent: "center" }}>
        <Text style={{ fontSize: 34, fontWeight: "bold", marginVertical: 5 }}>
          {user?.username}
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>Welcome!</Text>
      </View>
      <View
        style={{
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
  );
}

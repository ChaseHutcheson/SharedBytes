import { Text } from "@/components/Themed";
import Button from "@/components/button";
import { useAuth } from "@/context/AuthContext";
import { Feather } from "@expo/vector-icons";
import { Box, Center, Flex, Icon, ScrollView, View } from "native-base";
import { FoodBankSchema, getFoodBanks } from "@/api/foodBank";
import { useAsync, useMountEffect } from "@react-hookz/web";
import { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Modal,
} from "react-native";
import BankModal from "@/components/BankModal";

export default function TabOneScreen() {
  const { user } = useAuth();
  const [foodBanksStatus, foodBanksActions] = useAsync(getFoodBanks);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFoodBank, setSelectedFoodBank] =
    useState<FoodBankSchema | null>(null);
  const handleFoodBankClick = (foodBank: FoodBankSchema): void => {
    setSelectedFoodBank(foodBank);
    setModalVisible(true);
  };

  

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", marginTop: "5%" }}>
        <View style={{ flexDirection: "row", alignSelf: "baseline" }}>
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
          <View style={{ flexDirection: "column", marginBottom: "10%" }}>
            <Text style={{ fontSize: 34, fontWeight: "bold" }}>
              {user?.username}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: "grey",
                marginLeft: 3,
              }}
            >
              Welcome!
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "baseline" }}>
          <View style={{}}>
            <Center>
              <View
                style={
                  Platform.OS === "ios"
                    ? {
                        alignItems: "center",
                        justifyContent: "center",
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: "black",
                        shadowColor: "#31A062",
                        shadowOpacity: 1,
                        shadowRadius: 30,
                      }
                    : {
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
                      }
                }
              >
                <Text style={{ fontSize: 17, fontWeight: "600" }}>
                  Byte Tracker
                </Text>
                <Text
                  style={{
                    fontSize: 34,
                    fontWeight: "bold",
                    marginVertical: 5,
                  }}
                >
                  1,234
                </Text>
              </View>
            </Center>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Flex direction="row" align="center" justify="space-between" mb={4}>
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: "bold",
                  marginVertical: "15%",
                }}
              >
                SharedBytes
              </Text>
            </Flex>
            <ScrollView>
              <Flex direction="column">
                {[
                  { name: "HACK YSU Foodbank", address: "Address 1" },
                  { name: "MCCTC Foodbank", address: "Address 2" },
                  { name: "Cincinatti Foodbank", address: "Address 3" },
                ].map((foodBank) => (
                  <TouchableOpacity
                    key={foodBank.name}
                    onPress={() =>
                      handleFoodBankClick(foodBank as FoodBankSchema)
                    }
                  >
                    <Flex direction="column" mb={2}>
                      <Flex direction="row" align="center">
                        <Icon as={Feather} name="arrow-up" size={6} mr={2} />
                        <Text style={{ fontSize: 17, fontWeight: "600" }}>
                          {foodBank.name}
                        </Text>
                      </Flex>
                      <Text
                        style={{ fontSize: 13, color: "grey", marginLeft: 3 }}
                      >
                        {foodBank.address}
                      </Text>
                    </Flex>
                  </TouchableOpacity>
                ))}
              </Flex>
            </ScrollView>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <BankModal modalVisible={modalVisible} setModalVisible={setModalVisible} selectedFoodBank={selectedFoodBank} ></BankModal>
      </Modal>
    </SafeAreaView>
  );
}

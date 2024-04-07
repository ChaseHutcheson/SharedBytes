import {
  Box,
  Center,
  FormControl,
  Icon,
  Input,
  Text,
  VStack,
  Button,
  ScrollView,
} from "native-base";
import { useAuth } from "@/context/AuthContext";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { UpdateUserSchema, updateProfile } from "@/api/auth";
import { useState } from "react";
import { useAsync } from "@react-hookz/web";

export default function TabTwoScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleEmailChange = async () => {
    if (user) {
      const update: UpdateUserSchema = { email: newEmail };
      await updateProfile(user.id, update);
    }
  };

  const handlePasswordChange = async () => {
    if (user && newPassword === confirmPassword) {
      const update: UpdateUserSchema = { password: newPassword };
      await updateProfile(user.id, update);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <ScrollView>
      <Box flex={1} alignItems="center" justifyContent="flex-start" pt={12}>
        <VStack alignItems="center" space={4}>
          <Box
            bgColor="gray.200"
            borderRadius={90}
            width={40}
            height={40}
            m={6}
          >
            <Center>
              <Icon as={Feather} name="user" size={20} my={8} />
            </Center>
          </Box>

          <Text fontSize="3xl" fontWeight="bold">
            {user?.username}
          </Text>
          <Text fontSize="lg" color="gray.500">
            {user?.email}
          </Text>
        </VStack>

        <Box w="80%" p={4} my={5} rounded="md" bg="white" shadow={1}>
          <FormControl>
            <FormControl.Label>Current Email</FormControl.Label>
            <Input
              placeholder={user?.email}
              isReadOnly
              color="gray.500"
              bg="gray.200"
            />
            <FormControl.Label>New Email</FormControl.Label>
            <Input
              placeholder="New Email"
              type="text"
              onChangeText={setNewEmail}
            />
            <Button mt={5} bgColor={"#31A062"} onPress={handleEmailChange}>
              Save Changes
            </Button>
          </FormControl>
        </Box>

        <Box w="80%" p={4} my={5} rounded="md" bg="white" shadow={1}>
          <FormControl>
            <FormControl.Label>Current Password</FormControl.Label>
            <Input
              placeholder="Current Password"
              type="password"
              color="gray.500"
            />
            <FormControl.Label>New Password</FormControl.Label>
            <Input
              placeholder="New Password"
              type="password"
              onChangeText={setNewPassword}
            />
            <FormControl.Label>Confirm New Password</FormControl.Label>
            <Input
              placeholder="Confirm New Password"
              type="password"
              onChangeText={setConfirmPassword}
            />
            <Button mt={5} bgColor={"#31A062"} onPress={handlePasswordChange}>
              Save Changes
            </Button>
          </FormControl>
        </Box>
      </Box>
    </ScrollView>
  );
}

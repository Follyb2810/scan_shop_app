import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // For now, mock API response
      // Replace this with your fetch/axios request
      if (!email || !password) {
        Alert.alert("Error", "Email and password are required");
        setLoading(false);
        return;
      }

      // Simulate API call
      const mockToken = "dummy_access_token";
      await AsyncStorage.setItem("accessToken", mockToken);

      // Redirect to tabs after login/signup
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center px-5 bg-gray-50"
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <View className="bg-white p-6 rounded-lg shadow-md">
        <Text className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Create Account"}
        </Text>

        <TextInput
          className="border border-gray-300 rounded-md px-3 py-2 mb-4"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="border border-gray-300 rounded-md px-3 py-2 mb-4"
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          className={`py-3 rounded-md ${loading ? "bg-gray-400" : "bg-blue-600"}`}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text className="text-white text-center font-semibold">
            {isLogin ? "Login" : "Create Account"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsLogin(!isLogin)} className="mt-4">
          <Text className="text-center text-blue-600">
            {isLogin
              ? "Don't have an account? Create one"
              : "Already have an account? Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

import { View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 pt-6 pb-8 px-4 rounded-b-3xl">
      <View className="flex-row justify-between items-center mb-4">
        <View>
          <Text className="text-white text-2xl font-extrabold tracking-tight">
            Verified Deals
          </Text>
          <Text className="text-emerald-100 text-sm mt-1">
            100% Authentic Products
          </Text>
        </View>
        <View className="bg-white/20 p-3 rounded-full shadow">
          <Ionicons name="shield-checkmark" size={24} color="#fff" />
        </View>
      </View>

      <View className="flex-row items-center bg-white rounded-3xl px-4 py-3 shadow">
        <Ionicons name="search" size={20} color="#6b7280" />
        <TextInput
          placeholder="Search verified products..."
          placeholderTextColor="#9ca3af"
          className="flex-1 ml-3 text-gray-800 font-medium"
        />
      </View>
    </View>
  );
}

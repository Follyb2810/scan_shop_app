import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function StoreHeader() {
  return (
    <View className="px-4 pt-4 pb-2">
      <View className="flex-row justify-between items-center mb-4">
        <View>
          <Text className="text-secondary text-2xl font-bold">
            Verified Stores
          </Text>
          <Text className="text-primary text-sm mt-1">
            Trusted sellers near you
          </Text>
        </View>
        <TouchableOpacity className="bg-emerald-100 p-3 rounded-full">
          <Ionicons name="location" size={22} color="#16A34A" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

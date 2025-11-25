import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TrustBadge() {
  return (
    <View className="mx-4 mb-6 bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
      <View className="flex-row items-center">
        <View className="bg-emerald-600 p-3 rounded-full">
          <Ionicons name="shield-checkmark" size={24} color="#fff" />
        </View>
        <View className="flex-1 ml-3">
          <Text className="text-gray-800 font-bold text-base">
            100% Authenticity Guaranteed
          </Text>
          <Text className="text-gray-600 text-xs mt-1">
            Every product is verified to prevent adulteration
          </Text>
        </View>
      </View>
    </View>
  );
}

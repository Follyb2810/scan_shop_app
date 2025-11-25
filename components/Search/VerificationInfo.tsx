import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function VerificationInfo() {
  return (
    <View className="mx-4 mb-6 bg-blue-50 p-4 rounded-2xl border border-blue-200">
      <View className="flex-row items-start">
        <View className="bg-blue-600 p-2 rounded-full">
          <Ionicons name="information" size={20} color="#fff" />
        </View>
        <View className="flex-1 ml-3">
          <Text className="text-gray-800 font-bold text-sm">
            Smart Search Tips
          </Text>
          <Text className="text-gray-600 text-xs mt-1">
            Use filters to find verified products quickly. Look for the shield
            badge for guaranteed authenticity.
          </Text>
        </View>
      </View>
    </View>
  );
}

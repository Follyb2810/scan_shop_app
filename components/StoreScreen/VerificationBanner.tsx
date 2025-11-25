import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function VerificationBanner() {
  return (
    <View className="mx-4 mb-6 bg-gradient-to-r from-success to-teal-600 p-5 rounded-2xl border-textPrimary">
      <View className="flex-row items-center">
        <View className="bg-card p-3 rounded-full">
          <Ionicons name="shield-checkmark" size={28} color="#16A34A" />
        </View>
        <View className="flex-1 ml-4">
          <Text className="text-secondary font-bold text-base">
            All Stores Verified
          </Text>
          <Text className="text-warning text-xs mt-1">
            Every store is certified to sell only authentic, non-adulterated
            products
          </Text>
        </View>
      </View>
    </View>
  );
}

import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const VerifiedBadge = () => {
  return (
    <View className="absolute top-4 left-1/2 -ml-16 bg-emerald-600 px-4 py-2 rounded-full flex-row items-center">
      <Ionicons name="shield-checkmark" size={16} color="#fff" />
      <Text className="text-white font-bold ml-1 text-sm">Verified</Text>
    </View>
  );
};

export default VerifiedBadge;

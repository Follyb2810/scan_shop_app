import { View, Text, Button } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function DealDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Deal Details</Text>
      <Text className="text-lg mb-4">Deal ID: {id}</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

import { View, Text, Button } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function DealDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  // router.push(`/deal/${item.id}`);
  // onPress={() => router.push(`/deals/details?id=${item.id}`)}
  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-2">Deal Details dynamic</Text>
      <Text className="mb-4">Deal ID: {id}</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

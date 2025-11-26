import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import SafeAreaWrapper from "../../../../components/Shared/SafeAreaWrapper";

export default function MyProductsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>MyProductsScreen {id}</Text>
    </View>
  );
}

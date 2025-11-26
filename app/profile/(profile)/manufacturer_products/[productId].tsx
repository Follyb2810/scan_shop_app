import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import SafeAreaWrapper from "../../../../components/Shared/SafeAreaWrapper";

export default function ManufactureProductId() {
  const { productId } = useLocalSearchParams();

  return (
    <SafeAreaWrapper>
      <Text>ManufactureProductId {productId}</Text>
    </SafeAreaWrapper>
  );
}

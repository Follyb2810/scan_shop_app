import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function details() {
  const { params  } = useLocalSearchParams();
  return (
    <View>
      <Text>details</Text>
    </View>
  );
}

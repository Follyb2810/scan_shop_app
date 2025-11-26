import React from "react";
import { View, Text } from "react-native";

interface Props {
  text: string;
}

const DescriptionSection: React.FC<Props> = ({ text }) => (
  <View className="mb-4">
    <Text className="text-gray-800 font-bold text-lg mb-2">Description</Text>
    <Text className="text-gray-600 leading-6">{text}</Text>
  </View>
);

export default DescriptionSection;

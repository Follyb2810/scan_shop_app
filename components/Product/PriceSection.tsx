import React from "react";
import { View, Text } from "react-native";

interface Props {
  price: string;
  originalPrice: string;
  discount: string;
}

const PriceSection: React.FC<Props> = ({ price, originalPrice, discount }) => {
  return (
    <View className="flex-row items-end mb-4">
      <Text className="text-emerald-600 text-3xl font-bold">{price}</Text>
      <Text className="text-gray-400 text-lg line-through ml-3">
        {originalPrice}
      </Text>
      <View className="bg-red-100 px-2 py-1 rounded-lg ml-2">
        <Text className="text-red-600 text-sm font-bold">{discount} OFF</Text>
      </View>
    </View>
  );
};

export default PriceSection;

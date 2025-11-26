import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  brand: string;
  name: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

const ProductHeader: React.FC<Props> = ({
  brand,
  name,
  rating,
  reviews,
  inStock,
}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-emerald-600 font-semibold">{brand}</Text>

        <View
          className={`px-3 py-1 rounded-full ${
            inStock ? "bg-emerald-100" : "bg-red-100"
          }`}
        >
          <Text
            className={`text-xs font-bold ${
              inStock ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </Text>
        </View>
      </View>

      <Text className="text-gray-800 text-2xl font-bold mb-2">{name}</Text>

      <View className="flex-row items-center mb-4">
        <Ionicons name="star" size={18} color="#fbbf24" />
        <Text className="text-gray-800 font-bold ml-1">{rating}</Text>
        <Text className="text-gray-500 ml-1">({reviews} reviews)</Text>
      </View>
    </View>
  );
};

export default ProductHeader;

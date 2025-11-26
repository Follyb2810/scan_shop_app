import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Item {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
}

interface Props {
  products: Item[];
}

const SimilarProducts: React.FC<Props> = ({ products }) => {
  return (
    <View className="mb-4">
      <Text className="text-gray-800 font-bold text-lg mb-3">
        Similar Products
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="bg-white rounded-2xl mr-3 overflow-hidden border border-gray-200"
            style={{ width: 140 }}
          >
            <Image source={{ uri: item.image }} className="w-full h-32" />

            <View className="p-3">
              <Text
                className="text-gray-800 font-bold text-sm"
                numberOfLines={2}
              >
                {item.name}
              </Text>

              <View className="flex-row items-center mt-1">
                <Ionicons name="star" size={12} color="#fbbf24" />
                <Text className="text-gray-600 text-xs ml-1">
                  {item.rating}
                </Text>
              </View>

              <Text className="text-emerald-600 font-bold mt-1">
                {item.price}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SimilarProducts;

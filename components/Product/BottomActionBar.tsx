import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BottomActionBar = () => {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex-row items-center">
      <TouchableOpacity className="bg-gray-100 p-3 rounded-xl mr-3">
        <Ionicons name="cart-outline" size={24} color="#059669" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-1 bg-emerald-600 py-4 rounded-xl flex-row items-center justify-center">
        <Ionicons name="bag-handle" size={20} color="#fff" />
        <Text className="text-white font-bold text-base ml-2">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomActionBar;

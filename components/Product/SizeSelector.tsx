import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  sizes: string[];
  selected: string;
  onSelect: (size: string) => void;
}

const SizeSelector: React.FC<Props> = ({ sizes, selected, onSelect }) => {
  return (
    <View className="mb-4">
      <Text className="text-gray-800 font-bold mb-2">Select Size</Text>

      <View className="flex-row">
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => onSelect(size)}
            className={`mr-3 px-6 py-3 rounded-xl ${
              selected === size
                ? "bg-emerald-600 border-2 border-emerald-600"
                : "bg-white border-2 border-gray-200"
            }`}
          >
            <Text
              className={`font-semibold ${
                selected === size ? "text-white" : "text-gray-700"
              }`}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SizeSelector;

import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  features: string[];
}

const FeatureList: React.FC<Props> = ({ features }) => (
  <View className="mb-4">
    <Text className="text-gray-800 font-bold text-lg mb-2">Key Features</Text>

    <View className="flex-row flex-wrap">
      {features.map((f, i) => (
        <View
          key={i}
          className="bg-emerald-50 px-3 py-2 rounded-lg mr-2 mb-2 flex-row items-center"
        >
          <Ionicons name="checkmark-circle" size={16} color="#059669" />
          <Text className="text-emerald-700 ml-1 text-sm font-semibold">
            {f}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

export default FeatureList;

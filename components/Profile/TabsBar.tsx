import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface Props {
  tabs: string[];
  activeTab: string;
  onChange: (t: string) => void;
}

const TabsBar: React.FC<Props> = ({ tabs, activeTab, onChange }) => {
  return (
    <View className="flex-row justify-around mb-4">
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          className={`px-4 py-2 rounded-full ${
            activeTab === tab ? "bg-purple-600" : "bg-gray-200"
          }`}
          onPress={() => onChange(tab)}
        >
          <Text
            className={`font-semibold ${
              activeTab === tab ? "text-white" : "text-gray-700"
            }`}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabsBar;

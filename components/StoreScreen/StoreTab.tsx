import { TouchableOpacity, Text } from "react-native";

export default function StoreTab({ tab, activeTab, onPress }: any) {
  const isActive = activeTab === tab;
  return (
    <TouchableOpacity
      onPress={() => onPress(tab)}
      className={`flex-1 py-3 rounded-xl mr-2 ${isActive ? "bg-emerald-600" : "bg-white"}`}
    >
      <Text
        className={`text-center font-bold capitalize ${isActive ? "text-white" : "text-gray-600"}`}
      >
        {tab}
      </Text>
    </TouchableOpacity>
  );
}

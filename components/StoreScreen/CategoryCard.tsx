import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CategoryCard({ category }: any) {
  return (
    <TouchableOpacity
      className="bg-white rounded-2xl p-4 mr-3 items-center"
      style={{ width: 100 }}
    >
      <View className="w-14 h-14 bg-emerald-100 rounded-full items-center justify-center mb-2">
        <Ionicons name="add" size={28} color="#059669" />
      </View>
      <Text className="text-gray-800 font-semibold text-xs text-center">
        {category.name}
      </Text>
      <Text className="text-gray-500 text-xs mt-1">
        {category.count} stores
      </Text>
    </TouchableOpacity>
  );
}

import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CategoryCard({ category }: any) {
  return (
    <TouchableOpacity
      className="w-[48%] bg-white rounded-2xl p-4 mb-3 items-center"
      style={{ borderWidth: 1, borderColor: "#f3f4f6" }}
    >
      <View
        className="w-16 h-16 rounded-full items-center justify-center mb-2"
        style={{ backgroundColor: `${category.color}20` }}
      >
        <Ionicons name="add-sharp" size={32} color={category.color} />
      </View>
      <Text className="text-gray-800 font-semibold">{category.name}</Text>
    </TouchableOpacity>
  );
}

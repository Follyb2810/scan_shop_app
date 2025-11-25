import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RecentSearchItem({ search }: any) {
  return (
    <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
      <Ionicons name="time-outline" size={20} color="#9ca3af" />
      <Text className="flex-1 ml-3 text-gray-700">{search}</Text>
      <Ionicons name="arrow-forward" size={18} color="#d1d5db" />
    </TouchableOpacity>
  );
}

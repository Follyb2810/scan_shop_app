import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function QuickActionCard({ action }: any) {
  return (
    <TouchableOpacity className="w-[48%] bg-white rounded-2xl p-4 mb-3 items-center shadow-sm">
      <View
        className="w-14 h-14 rounded-full items-center justify-center mb-2"
        style={{ backgroundColor: `${action.color}20` }}
      >
        <Ionicons name="add-circle-outline" size={28} color={action.color} />
      </View>
      <Text className="text-gray-800 font-semibold text-sm text-center">
        {action.title}
      </Text>
    </TouchableOpacity>
  );
}

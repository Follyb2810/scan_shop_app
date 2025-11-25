import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InfoBanner({
  title,
  description,
  iconColor = "purple",
}: any) {
  return (
    <View
      className={`mx-4 mb-6 bg-${iconColor}-50 p-4 rounded-2xl border border-${iconColor}-200`}
    >
      <View className="flex-row items-start">
        <View className={`bg-${iconColor}-600 p-2 rounded-full`}>
          <Ionicons name="shield-checkmark" size={20} color="#fff" />
        </View>
        <View className="flex-1 ml-3">
          <Text className="text-gray-800 font-bold text-sm">{title}</Text>
          <Text className="text-gray-600 text-xs mt-1">{description}</Text>
        </View>
      </View>
    </View>
  );
}

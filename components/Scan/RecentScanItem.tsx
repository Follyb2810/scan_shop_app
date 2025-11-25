import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RecentScanItem({ scan }: any) {
  const isVerified = scan.status === "verified";
  return (
    <TouchableOpacity className="bg-white rounded-2xl p-4 mb-3 flex-row items-center shadow-sm">
      <View
        className={`w-12 h-12 rounded-full items-center justify-center ${isVerified ? "bg-emerald-100" : "bg-amber-100"}`}
      >
        <Ionicons
          name={isVerified ? "checkmark-circle" : "warning"}
          size={24}
          color={isVerified ? "#10b981" : "#f59e0b"}
        />
      </View>
      <View className="flex-1 ml-3">
        <Text className="text-gray-800 font-bold">{scan.productName}</Text>
        <Text className="text-gray-500 text-xs">{scan.date}</Text>
      </View>
      <View className="items-end">
        <View
          className={`px-3 py-1 rounded-full ${isVerified ? "bg-emerald-100" : "bg-amber-100"}`}
        >
          <Text
            className={`text-xs font-bold ${isVerified ? "text-emerald-600" : "text-amber-600"}`}
          >
            {scan.confidence}%
          </Text>
        </View>
        <Ionicons
          name="chevron-forward"
          size={18}
          color="#d1d5db"
          style={{ marginTop: 4 }}
        />
      </View>
    </TouchableOpacity>
  );
}

import { View, Text } from "react-native";

export default function ScanHeader() {
  return (
    <View className="px-4 pt-4 pb-2">
      <Text className="text-gray-800 text-2xl font-bold">Verify Product</Text>
      <Text className="text-gray-500 text-sm mt-1">
        Scan to check authenticity
      </Text>
    </View>
  );
}

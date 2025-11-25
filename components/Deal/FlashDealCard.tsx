import { View, Text, TouchableOpacity, Image } from "react-native";

export default function FlashDealCard({ deal }: any) {
  return (
    <TouchableOpacity className="bg-white rounded-2xl mr-3 overflow-hidden shadow-lg w-44 transform active:scale-95">
      <Image source={{ uri: deal.image }} className="w-full h-36" />
      <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-lg shadow">
        <Text className="text-white text-xs font-bold">
          {deal.discount} OFF
        </Text>
      </View>
      <View className="p-3">
        <Text className="text-gray-800 font-bold text-sm">{deal.name}</Text>
        <Text className="text-emerald-600 font-bold mt-1">{deal.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

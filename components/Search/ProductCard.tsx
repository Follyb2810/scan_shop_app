import { TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductCard({ product }: any) {
  return (
    <TouchableOpacity className="w-[48%] bg-white rounded-2xl mb-3 overflow-hidden shadow-md transform active:scale-95">
      <Image
        source={{ uri: product.image }}
        className="w-full h-40 rounded-t-2xl"
        resizeMode="cover"
      />
      <View className="absolute top-2 right-2 bg-emerald-600 p-1.5 rounded-full shadow">
        <Ionicons name="shield-checkmark" size={12} color="#fff" />
      </View>

      <View className="p-3">
        <Text className="text-gray-800 font-bold text-sm" numberOfLines={2}>
          {product.name}
        </Text>
        <Text className="text-gray-500 text-xs mt-0.5">{product.brand}</Text>
        <View className="flex-row items-center mt-2">
          <Ionicons name="star" size={12} color="#fbbf24" />
          <Text className="text-gray-600 text-xs ml-1">{product.rating}</Text>
        </View>
        <Text className="text-emerald-600 font-bold text-base mt-2">
          {product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

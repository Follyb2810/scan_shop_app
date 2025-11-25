import { TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function StoreCard({ store }: any) {
  return (
    <TouchableOpacity className="bg-white rounded-2xl mb-3 overflow-hidden">
      <View className="flex-row">
        <Image
          source={{ uri: store.image }}
          className="w-28 h-28"
          resizeMode="cover"
        />
        <View className="flex-1 p-3 justify-between">
          <View>
            <View className="flex-row items-center justify-between mb-1">
              <View className="flex-row items-center">
                <Text
                  className="text-gray-800 font-bold text-base"
                  numberOfLines={1}
                >
                  {store.name}
                </Text>
                {store.verified && (
                  <View className="ml-1 bg-blue-100 p-1 rounded-full">
                    <Ionicons
                      name="checkmark-circle"
                      size={14}
                      color="#3b82f6"
                    />
                  </View>
                )}
              </View>
            </View>
            <Text className="text-gray-500 text-xs">{store.type}</Text>
            <View className="flex-row items-center mt-2">
              <View className="flex-row items-center mr-3">
                <Ionicons name="star" size={14} color="#fbbf24" />
                <Text className="text-gray-600 text-xs ml-1">
                  {store.rating}
                </Text>
                <Text className="text-gray-400 text-xs ml-1">
                  ({store.reviews})
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="location" size={12} color="#9ca3af" />
                <Text className="text-gray-500 text-xs ml-1">
                  {store.distance}
                </Text>
              </View>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <View
              className={`px-2 py-1 rounded-full ${store.isOpen ? "bg-emerald-100" : "bg-gray-100"}`}
            >
              <Text
                className={`text-xs font-semibold ${store.isOpen ? "text-emerald-600" : "text-gray-500"}`}
              >
                {store.isOpen ? "Open Now" : "Closed"}
              </Text>
            </View>
            <Text className="text-gray-500 text-xs">
              {store.products} products
            </Text>
          </View>
        </View>
      </View>

      {store.badge && (
        <View className="bg-gradient-to-r from-emerald-50 to-blue-50 px-3 py-2 border-t border-emerald-100">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Ionicons name="shield-checkmark" size={14} color="#059669" />
              <Text className="text-emerald-700 text-xs font-semibold ml-1">
                {store.badge}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#9ca3af" />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

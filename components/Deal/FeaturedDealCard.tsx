import { View, Text, TouchableOpacity, Image } from "react-native";

export default function FeaturedDealCard({ deal }: any) {
  return (
    <TouchableOpacity className="bg-card rounded-3xl mb-4 overflow-hidden shadow-lg transform active:scale-95">
      <Image
        source={{ uri: deal.image }}
        className="w-full h-44 rounded-t-3xl"
      />
      <View className="absolute top-3 left-3 bg-success px-2 py-1 rounded-full shadow">
        <Text className="text-card text-xs font-bold">Verified</Text>
      </View>
      <View className="p-4">
        <Text className="text-textSecondary font-bold text-lg mb-1">
          {deal.name}
        </Text>
        <Text className="text-textPrimary text-sm">{deal.brand}</Text>
        <View className="flex-row items-center mt-2">
          <Text className="text-success font-bold text-lg">{deal.price}</Text>
          <Text className="text-background line-through ml-2">
            {deal.originalPrice}
          </Text>
          <View className="bg-danger px-2 py-0.5 rounded ml-2">
            <Text className="text-card text-xs font-bold">{deal.discount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

import { TouchableOpacity, View, Text, Image } from "react-native";

export default function FeaturedStoreCard({ store }: any) {
  return (
    <TouchableOpacity
      className="mr-3 rounded-2xl overflow-hidden"
      style={{ width: 280 }}
    >
      <Image
        source={{ uri: store.image }}
        className="w-full h-36"
        resizeMode="cover"
      />
      <View className="absolute inset-0 bg-black/40" />
      {store.offer && (
        <View className="absolute top-3 right-3 bg-red-500 px-3 py-1.5 rounded-full">
          <Text className="text-white text-xs font-bold">{store.offer}</Text>
        </View>
      )}
      <View className="absolute bottom-0 left-0 right-0 p-4">
        <Text className="text-white font-bold text-lg">{store.name}</Text>
        <Text className="text-white/90 text-sm">{store.type}</Text>
      </View>
    </TouchableOpacity>
  );
}

import React from "react";
import { View, Text, FlatList, Image } from "react-native";

interface Product {
  id: string;
  name: string;
  image: string;
}

interface Props {
  products: Product[];
}

const MyProductsSection: React.FC<Props> = ({ products }) => {
  const renderProduct = ({ item }: { item: Product }) => (
    <View className="bg-white rounded-xl shadow-md p-3 mr-3">
      <Image
        source={{ uri: item.image }}
        className="w-32 h-32 rounded-xl mb-2"
      />
      <Text className="font-semibold text-gray-800">{item.name}</Text>
    </View>
  );

  if (products.length === 0) {
    return <Text className="text-gray-500">No products yet.</Text>;
  }

  return (
    <FlatList
      horizontal
      data={products}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default MyProductsSection;

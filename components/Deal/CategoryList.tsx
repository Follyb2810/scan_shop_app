import React, { useRef } from "react";
import { FlatList, TouchableOpacity, Text, View } from "react-native";

export default function CategoryList({
  categories,
  activeCategory,
  setActiveCategory,
}: any) {
  const listRef = useRef<FlatList>(null);

  const handlePress = (item: string, index: number) => {
    setActiveCategory(item);

    listRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0,
    });
  };

  const CatTab = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => handlePress(item, index)}
        className={`mr-3 px-5 py-2.5 rounded-full ${
          activeCategory === item
            ? "bg-success"
            : "bg-card border border-textPrimary"
        }`}
      >
        <Text
          className={`font-semibold ${
            activeCategory === item ? "text-card" : "text-textPrimary"
          }`}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="px-4 py-4">
      <FlatList
        ref={listRef}
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item}-${index}`}
        contentContainerStyle={{ paddingRight: 20 }}
        renderItem={({ item, index }) => <CatTab item={item} index={index} />}
      />
    </View>
  );
}

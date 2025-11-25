import React, { useRef } from "react";
import { FlatList, TouchableOpacity, Text, View } from "react-native";

export default function FilterBar({
  filters,
  activeFilter,
  setActiveFilter,
}: any) {
  const listRef = useRef<FlatList>(null);

  const handlePress = (item: string, index: number) => {
    setActiveFilter(item);

    listRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0,
    });
  };

  const FilterTab = ({ item, index }: any) => {
    const isActive = activeFilter === item;

    return (
      <TouchableOpacity
        onPress={() => handlePress(item, index)}
        className={`mr-2 px-4 py-2 rounded-full ${
          isActive ? "bg-success" : "bg-background"
        }`}
      >
        <Text
          className={`text-sm font-semibold ${
            isActive ? "text-white" : "text-gray-700"
          }`}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="mt-4 -mx-4 px-4">
      <FlatList
        ref={listRef}
        data={filters}
        horizontal
        keyExtractor={(item, index) => `${item}-${index}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
        renderItem={({ item, index }) => (
          <FilterTab item={item} index={index} />
        )}
      />
    </View>
  );
}

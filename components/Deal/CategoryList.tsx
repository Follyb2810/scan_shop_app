import { ScrollView, TouchableOpacity, Text } from "react-native";

export default function CategoryList({
  categories,
  activeCategory,
  setActiveCategory,
}: any) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="px-4 py-4"
    >
      {categories.map((cat: string, index: number) => (
        <TouchableOpacity
          key={`${cat}+${index}`}
          onPress={() => setActiveCategory(cat)}
          className={`mr-3 px-5 py-2.5 rounded-full ${
            activeCategory === cat
              ? "bg-success"
              : "bg-card border border-textPrimary"
          }`}
        >
          <Text
            className={`font-semibold ${activeCategory === cat ? "text-card" : "text-textPrimary"}`}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

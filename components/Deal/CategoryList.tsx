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
      {categories.map((cat: string) => (
        <TouchableOpacity
          key={cat}
          onPress={() => setActiveCategory(cat)}
          className={`mr-3 px-5 py-2.5 rounded-full ${
            activeCategory === cat
              ? "bg-emerald-600"
              : "bg-white border border-gray-200"
          }`}
        >
          <Text
            className={`font-semibold ${activeCategory === cat ? "text-white" : "text-gray-700"}`}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

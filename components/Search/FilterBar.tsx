import { ScrollView, TouchableOpacity, Text } from "react-native";

export default function FilterBar({
  filters,
  activeFilter,
  setActiveFilter,
}: any) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-4 -mx-4 px-4"
    >
      {filters.map((filter: string) => (
        <TouchableOpacity
          key={filter}
          onPress={() => setActiveFilter(filter)}
          className={`mr-2 px-4 py-2 rounded-full ${
            activeFilter === filter ? "bg-emerald-600" : "bg-gray-200"
          }`}
        >
          <Text
            className={`text-sm font-semibold ${activeFilter === filter ? "text-white" : "text-gray-700"}`}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

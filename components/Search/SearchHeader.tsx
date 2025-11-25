import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchHeader({ searchQuery, setSearchQuery }: any) {
  return (
    <View className="bg-card px-4 pt-4 pb-3">
      <Text className="text-secondary text-2xl font-bold mb-4">
        Search Products
      </Text>
      <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3">
        <Ionicons name="search" size={22} color="#6b7280" />
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search for verified products..."
          placeholderTextColor="#9ca3af"
          className="flex-1 ml-3 text-gray-800 text-base"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery("")}>
            <Ionicons name="close-circle" size={20} color="#9ca3af" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

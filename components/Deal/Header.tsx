import { View, Text, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Header() {
  const { push, navigate, back } = useRouter();
  return (
    <View className="bg-gradient-to-r from-emerald-500 via-emeraldr-600 to-emerald-700 pt-6 pb-8 px-4 rounded-b-3xl">
      <View className="flex-row justify-between items-center mb-4">
        <View>
          <Text className="text-secondary text-2xl font-extrabold tracking-tight">
            Verified Deals
          </Text>
          <Text className="text-primary  text-sm mt-1">
            100% Authentic Products
          </Text>
        </View>
        <Pressable
          className="bg-background p-3 rounded-full shadow"
          onPress={() => push("/profile/123")}
        >
          <Ionicons name="person" size={24} color="#1E40AF" />
        </Pressable>
      </View>

      <View className="flex-row items-center bg-card rounded-3xl px-4 py-3 shadow">
        <Ionicons name="search" size={20} color="#6b7280" />
        <TextInput
          placeholder="Search verified products..."
          placeholderTextColor="#9ca3af"
          className="flex-1 ml-3 text-textSecondary font-medium"
        />
      </View>
    </View>
  );
}

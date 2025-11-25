import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Verified", "New", "Popular", "On Sale"];

  const recentSearches = [
    "Organic Honey",
    "Pure Olive Oil",
    "Authentic Spices",
    "Natural Skincare",
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "Premium Basmati Rice",
      brand: "Golden Harvest",
      price: "₦5,500",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      verified: true,
      rating: 4.7,
    },
    {
      id: 2,
      name: "Pure Ghee",
      brand: "Dairy Fresh",
      price: "₦3,200",
      image:
        "https://images.unsplash.com/photo-1628288896356-f46136afc89c?w=400",
      verified: true,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Organic Coffee Beans",
      brand: "Mountain Brew",
      price: "₦4,800",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
      verified: true,
      rating: 4.8,
    },
    {
      id: 4,
      name: "Natural Honey",
      brand: "Bee Pure",
      price: "₦2,900",
      image:
        "https://images.unsplash.com/photo-1587049352846-4a222e784354?w=400",
      verified: true,
      rating: 4.6,
    },
  ];

  const categories = [
    { id: 1, name: "Food", icon: "fast-food", color: "#f59e0b" },
    { id: 2, name: "Beauty", icon: "sparkles", color: "#ec4899" },
    { id: 3, name: "Health", icon: "fitness", color: "#10b981" },
    { id: 4, name: "Home", icon: "home", color: "#3b82f6" },
  ];

  const ProductCard = ({ product }) => (
    <TouchableOpacity className="w-[48%] bg-white rounded-2xl mb-3 overflow-hidden">
      <Image
        source={{ uri: product.image }}
        className="w-full h-40"
        resizeMode="cover"
      />
      <View className="absolute top-2 right-2 bg-emerald-600 p-1.5 rounded-full">
        <Ionicons name="shield-checkmark" size={12} color="#fff" />
      </View>

      <View className="p-3">
        <Text className="text-gray-800 font-bold text-sm" numberOfLines={2}>
          {product.name}
        </Text>
        <Text className="text-gray-500 text-xs mt-0.5">{product.brand}</Text>

        <View className="flex-row items-center mt-2">
          <Ionicons name="star" size={12} color="#fbbf24" />
          <Text className="text-gray-600 text-xs ml-1">{product.rating}</Text>
        </View>

        <Text className="text-emerald-600 font-bold text-base mt-2">
          {product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView>
        {/* Header with Search */}
        <View className="bg-white px-4 pt-4 pb-3">
          <Text className="text-gray-800 text-2xl font-bold mb-4">
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

          {/* Filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-4 -mx-4 px-4"
          >
            {filters.map((filter) => (
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
        </View>

        {/* Recent Searches */}
        {searchQuery.length === 0 && (
          <View className="px-4 mt-4">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-gray-800 font-bold text-lg">
                Recent Searches
              </Text>
              <TouchableOpacity>
                <Text className="text-emerald-600 text-sm font-semibold">
                  Clear All
                </Text>
              </TouchableOpacity>
            </View>

            {recentSearches.map((search, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center py-3 border-b border-gray-100"
              >
                <Ionicons name="time-outline" size={20} color="#9ca3af" />
                <Text className="flex-1 ml-3 text-gray-700">{search}</Text>
                <Ionicons name="arrow-forward" size={18} color="#d1d5db" />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Categories */}
        {searchQuery.length === 0 && (
          <View className="px-4 mt-6">
            <Text className="text-gray-800 font-bold text-lg mb-3">
              Shop by Category
            </Text>
            <View className="flex-row flex-wrap justify-between">
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  className="w-[48%] bg-white rounded-2xl p-4 mb-3 items-center"
                  style={{ borderWidth: 1, borderColor: "#f3f4f6" }}
                >
                  <View
                    className="w-16 h-16 rounded-full items-center justify-center mb-2"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Ionicons
                      name={"add-sharp"}
                      size={32}
                      color={category.color}
                    />
                  </View>
                  <Text className="text-gray-800 font-semibold">
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Trending Products */}
        <View className="px-4 mt-6 mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <View>
              <Text className="text-gray-800 font-bold text-lg">
                Trending Now
              </Text>
              <Text className="text-gray-500 text-sm">
                Most searched products
              </Text>
            </View>
            <TouchableOpacity>
              <Text className="text-emerald-600 font-semibold">View All</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap justify-between">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </View>
        </View>

        {/* Verification Info */}
        <View className="mx-4 mb-6 bg-blue-50 p-4 rounded-2xl border border-blue-200">
          <View className="flex-row items-start">
            <View className="bg-blue-600 p-2 rounded-full">
              <Ionicons name="information" size={20} color="#fff" />
            </View>
            <View className="flex-1 ml-3">
              <Text className="text-gray-800 font-bold text-sm">
                Smart Search Tips
              </Text>
              <Text className="text-gray-600 text-xs mt-1">
                Use filters to find verified products quickly. Look for the
                shield badge for guaranteed authenticity.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
// import {
//   View,
//   Text,
//   Pressable,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import React from "react";
// import { Link } from "expo-router";

// export default function index() {
//   return (
//     <ScrollView
//       contentContainerStyle={{
//         gap: 16,
//         padding: 16,
//       }}
//     >
//       <View>
//         <Link href={{ pathname: "/", params: { name: 123 } }}>Home</Link>
//         <Text>index</Text>
//         <Pressable onPress={() => console.log("press")}>Press</Pressable>
//         <Image source={{ uri: "" }} />
//         <TouchableOpacity onPress={() => console.log("press")}>
//           Click
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

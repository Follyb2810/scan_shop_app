import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const DealsScreen = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Food",
    "Beauty",
    "Home",
  ];

  const featuredDeals = [
    {
      id: 1,
      name: "Organic Honey",
      brand: "Pure Nature",
      price: "₦2,500",
      originalPrice: "₦3,500",
      discount: "28%",
      image:
        "https://images.unsplash.com/photo-1587049352846-4a222e784354?w=400",
      verified: true,
      rating: 4.8,
      timeLeft: "2h 15m",
    },
    {
      id: 2,
      name: "Premium Olive Oil",
      brand: "Mediterranean Gold",
      price: "₦4,200",
      originalPrice: "₦6,000",
      discount: "30%",
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      verified: true,
      rating: 4.9,
      timeLeft: "5h 45m",
    },
  ];

  const flashDeals = [
    {
      id: 4,
      name: "Pure Coconut Oil",
      price: "₦1,800",
      originalPrice: "₦2,800",
      discount: "35%",
      image:
        "https://images.unsplash.com/photo-1524493571280-9e4b6bb5d5cd?w=400",
    },
    {
      id: 5,
      name: "Organic Tea",
      price: "₦2,200",
      originalPrice: "₦3,000",
      discount: "26%",
      image:
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView>
        {/* Header */}
        <View className="bg-emerald-600 pt-4 pb-6 px-4 rounded-b-3xl">
          <View className="flex-row justify-between items-center mb-4">
            <View>
              <Text className="text-white text-2xl font-bold">
                Verified Deals
              </Text>
              <Text className="text-emerald-100 text-sm mt-1">
                100% Authentic Products
              </Text>
            </View>
            <View className="bg-white/20 p-3 rounded-full">
              <Ionicons name="shield-checkmark" size={24} color="#fff" />
            </View>
          </View>

          <View className="flex-row items-center bg-white rounded-2xl px-4 py-3">
            <Ionicons name="search" size={20} color="#6b7280" />
            <TextInput
              placeholder="Search verified products..."
              placeholderTextColor="#9ca3af"
              className="flex-1 ml-3 text-gray-800"
            />
          </View>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-4 py-4"
        >
          {categories.map((cat) => (
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

        {/* Featured Deals */}
        <View className="px-4 mb-4">
          <View className="flex-row justify-between items-center mb-3">
            <View>
              <Text className="text-xl font-bold text-gray-800">
                Featured Deals
              </Text>
              <Text className="text-gray-500 text-sm">Limited time offers</Text>
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-emerald-600 font-semibold">See All</Text>
              <Ionicons name="chevron-forward" size={18} color="#059669" />
            </TouchableOpacity>
          </View>

          {featuredDeals.map((deal) => (
            <TouchableOpacity
              key={deal.id}
              className="bg-white rounded-2xl mb-3 overflow-hidden"
            >
              <View className="flex-row">
                <Image source={{ uri: deal.image }} className="w-32 h-32" />
                <View className="flex-1 p-3 justify-between">
                  <View>
                    <View className="flex-row items-center mb-1">
                      <Ionicons
                        name="shield-checkmark"
                        size={14}
                        color="#059669"
                      />
                      <Text className="text-emerald-600 text-xs font-semibold ml-1">
                        Verified
                      </Text>
                    </View>
                    <Text
                      className="text-gray-800 font-bold text-base"
                      numberOfLines={1}
                    >
                      {deal.name}
                    </Text>
                    <Text className="text-gray-500 text-xs">{deal.brand}</Text>
                  </View>

                  <View>
                    <View className="flex-row items-center mb-1">
                      <Ionicons name="star" size={14} color="#fbbf24" />
                      <Text className="text-gray-600 text-xs ml-1">
                        {deal.rating}
                      </Text>
                    </View>
                    <View className="flex-row items-end">
                      <Text className="text-emerald-600 font-bold text-lg">
                        {deal.price}
                      </Text>
                      <Text className="text-gray-400 text-xs line-through ml-2">
                        {deal.originalPrice}
                      </Text>
                      <View className="bg-red-100 px-2 py-0.5 rounded ml-2">
                        <Text className="text-red-600 text-xs font-bold">
                          {deal.discount}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="bg-amber-50 px-3 py-2 flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Ionicons name="time" size={14} color="#f59e0b" />
                  <Text className="text-amber-700 text-xs font-semibold ml-1">
                    Ends in {deal.timeLeft}
                  </Text>
                </View>
                <Ionicons name="trending-up" size={14} color="#059669" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Flash Deals */}
        <View className="px-4 mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-3">
            Flash Deals
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {flashDeals.map((deal) => (
              <TouchableOpacity
                key={deal.id}
                className="bg-white rounded-2xl mr-3 overflow-hidden"
                style={{ width: 160 }}
              >
                <Image source={{ uri: deal.image }} className="w-full h-40" />
                <View className="absolute top-2 right-2 bg-emerald-600 p-1.5 rounded-full">
                  <Ionicons name="shield-checkmark" size={12} color="#fff" />
                </View>
                <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-lg">
                  <Text className="text-white text-xs font-bold">
                    {deal.discount} OFF
                  </Text>
                </View>
                <View className="p-3">
                  <Text
                    className="text-gray-800 font-bold text-sm"
                    numberOfLines={2}
                  >
                    {deal.name}
                  </Text>
                  <View className="flex-row items-end mt-2">
                    <Text className="text-emerald-600 font-bold text-base">
                      {deal.price}
                    </Text>
                    <Text className="text-gray-400 text-xs line-through ml-1">
                      {deal.originalPrice}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Trust Badge */}
        <View className="mx-4 mb-6 bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
          <View className="flex-row items-center">
            <View className="bg-emerald-600 p-3 rounded-full">
              <Ionicons name="shield-checkmark" size={24} color="#fff" />
            </View>
            <View className="flex-1 ml-3">
              <Text className="text-gray-800 font-bold text-base">
                100% Authenticity Guaranteed
              </Text>
              <Text className="text-gray-600 text-xs mt-1">
                Every product is verified to prevent adulteration
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DealsScreen;

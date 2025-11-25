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

const StoreScreen = () => {
  const [activeTab, setActiveTab] = useState("nearby");

  const tabs = ["nearby", "popular", "new"];

  const stores = [
    {
      id: 1,
      name: "Pure Market",
      type: "Organic Store",
      rating: 4.8,
      reviews: 324,
      distance: "1.2 km",
      image:
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400",
      verified: true,
      isOpen: true,
      products: 250,
      badge: "Certified Partner",
    },
    {
      id: 2,
      name: "Fresh & Natural",
      type: "Health Store",
      rating: 4.9,
      reviews: 567,
      distance: "2.5 km",
      image:
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400",
      verified: true,
      isOpen: true,
      products: 420,
      badge: "Top Rated",
    },
    {
      id: 3,
      name: "Authentic Goods",
      type: "General Store",
      rating: 4.7,
      reviews: 198,
      distance: "3.8 km",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400",
      verified: true,
      isOpen: false,
      products: 180,
      badge: "Verified",
    },
  ];

  const categories = [
    { id: 1, name: "Grocery", icon: "basket", count: 45 },
    { id: 2, name: "Pharmacy", icon: "medkit", count: 23 },
    { id: 3, name: "Beauty", icon: "sparkles", count: 34 },
    { id: 4, name: "Electronics", icon: "phone-portrait", count: 12 },
  ];

  const featuredStores = [
    {
      id: 5,
      name: "Natural Choice",
      image:
        "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400",
      offer: "20% OFF",
      type: "Organic Foods",
    },
    {
      id: 6,
      name: "Green Basket",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400",
      offer: "Free Delivery",
      type: "Fresh Produce",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView>
        {/* Header */}
        <View className="px-4 pt-4 pb-2">
          <View className="flex-row justify-between items-center mb-4">
            <View>
              <Text className="text-gray-800 text-2xl font-bold">
                Verified Stores
              </Text>
              <Text className="text-gray-500 text-sm mt-1">
                Trusted sellers near you
              </Text>
            </View>
            <TouchableOpacity className="bg-emerald-100 p-3 rounded-full">
              <Ionicons name="location" size={22} color="#059669" />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 shadow-sm">
            <Ionicons name="search" size={20} color="#6b7280" />
            <TextInput
              placeholder="Search stores or products..."
              placeholderTextColor="#9ca3af"
              className="flex-1 ml-3 text-gray-800"
            />
            <TouchableOpacity className="bg-emerald-600 p-2 rounded-lg">
              <Ionicons name="options" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row px-4 mt-4 mb-2">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 py-3 rounded-xl mr-2 ${
                activeTab === tab ? "bg-emerald-600" : "bg-white"
              }`}
            >
              <Text
                className={`text-center font-bold capitalize ${
                  activeTab === tab ? "text-white" : "text-gray-600"
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Categories */}
        <View className="px-4 mt-4">
          <Text className="text-gray-800 font-bold text-lg mb-3">
            Shop by Category
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                className="bg-white rounded-2xl p-4 mr-3 items-center"
                style={{ width: 100 }}
              >
                <View className="w-14 h-14 bg-emerald-100 rounded-full items-center justify-center mb-2">
                  <Ionicons name={"add"} size={28} color="#059669" />
                </View>
                <Text className="text-gray-800 font-semibold text-xs text-center">
                  {category.name}
                </Text>
                <Text className="text-gray-500 text-xs mt-1">
                  {category.count} stores
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Stores */}
        <View className="px-4 mt-6">
          <Text className="text-gray-800 font-bold text-lg mb-3">
            Featured This Week
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredStores.map((store) => (
              <TouchableOpacity
                key={store.id}
                className="mr-3 rounded-2xl overflow-hidden"
                style={{ width: 280 }}
              >
                <Image
                  source={{ uri: store.image }}
                  className="w-full h-36"
                  resizeMode="cover"
                />
                <View className="absolute inset-0 bg-black/40" />
                <View className="absolute top-3 right-3 bg-red-500 px-3 py-1.5 rounded-full">
                  <Text className="text-white text-xs font-bold">
                    {store.offer}
                  </Text>
                </View>
                <View className="absolute bottom-0 left-0 right-0 p-4">
                  <Text className="text-white font-bold text-lg">
                    {store.name}
                  </Text>
                  <Text className="text-white/90 text-sm">{store.type}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Store List */}
        <View className="px-4 mt-6 mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-gray-800 font-bold text-lg">All Stores</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-emerald-600 font-semibold mr-1">
                Filter
              </Text>
              <Ionicons name="funnel" size={16} color="#059669" />
            </TouchableOpacity>
          </View>

          {stores.map((store) => (
            <TouchableOpacity
              key={store.id}
              className="bg-white rounded-2xl mb-3 overflow-hidden"
            >
              <View className="flex-row">
                <Image
                  source={{ uri: store.image }}
                  className="w-28 h-28"
                  resizeMode="cover"
                />
                <View className="flex-1 p-3 justify-between">
                  <View>
                    <View className="flex-row items-center justify-between mb-1">
                      <View className="flex-row items-center">
                        <Text
                          className="text-gray-800 font-bold text-base"
                          numberOfLines={1}
                        >
                          {store.name}
                        </Text>
                        {store.verified && (
                          <View className="ml-1 bg-blue-100 p-1 rounded-full">
                            <Ionicons
                              name="checkmark-circle"
                              size={14}
                              color="#3b82f6"
                            />
                          </View>
                        )}
                      </View>
                    </View>
                    <Text className="text-gray-500 text-xs">{store.type}</Text>

                    <View className="flex-row items-center mt-2">
                      <View className="flex-row items-center mr-3">
                        <Ionicons name="star" size={14} color="#fbbf24" />
                        <Text className="text-gray-600 text-xs ml-1">
                          {store.rating}
                        </Text>
                        <Text className="text-gray-400 text-xs ml-1">
                          ({store.reviews})
                        </Text>
                      </View>
                      <View className="flex-row items-center">
                        <Ionicons name="location" size={12} color="#9ca3af" />
                        <Text className="text-gray-500 text-xs ml-1">
                          {store.distance}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View className="flex-row items-center justify-between">
                    <View
                      className={`px-2 py-1 rounded-full ${
                        store.isOpen ? "bg-emerald-100" : "bg-gray-100"
                      }`}
                    >
                      <Text
                        className={`text-xs font-semibold ${
                          store.isOpen ? "text-emerald-600" : "text-gray-500"
                        }`}
                      >
                        {store.isOpen ? "Open Now" : "Closed"}
                      </Text>
                    </View>
                    <Text className="text-gray-500 text-xs">
                      {store.products} products
                    </Text>
                  </View>
                </View>
              </View>

              {store.badge && (
                <View className="bg-gradient-to-r from-emerald-50 to-blue-50 px-3 py-2 border-t border-emerald-100">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                      <Ionicons
                        name="shield-checkmark"
                        size={14}
                        color="#059669"
                      />
                      <Text className="text-emerald-700 text-xs font-semibold ml-1">
                        {store.badge}
                      </Text>
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color="#9ca3af"
                    />
                  </View>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Verification Banner */}
        <View className="mx-4 mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 p-5 rounded-2xl">
          <View className="flex-row items-center">
            <View className="bg-white/20 p-3 rounded-full">
              <Ionicons name="shield-checkmark" size={28} color="#fff" />
            </View>
            <View className="flex-1 ml-4">
              <Text className="text-white font-bold text-base">
                All Stores Verified
              </Text>
              <Text className="text-white/90 text-xs mt-1">
                Every store is certified to sell only authentic, non-adulterated
                products
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreScreen;

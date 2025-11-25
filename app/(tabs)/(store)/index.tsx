import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  ScrollViewProps,
} from "react-native";
import StoreTab from "../../../components/StoreScreen/StoreTab";
import CategoryCard from "../../../components/StoreScreen/CategoryCard";
import FeaturedStoreCard from "../../../components/StoreScreen/FeaturedStoreCard";
import StoreCard from "../../../components/StoreScreen/StoreCard";
import VerificationBanner from "../../../components/StoreScreen/VerificationBanner";
import StoreHeader from "../../../components/StoreScreen/StoreHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const StoreScreen = () => {
  const [activeTab, setActiveTab] = useState("nearby");

  const tabs = ["nearby", "popular", "new"];

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

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView>
        <StoreHeader />

        {/* Tabs */}
        <View className="flex-row px-4 mt-4 mb-2">
          {tabs.map((tab) => (
            <StoreTab
              key={tab}
              tab={tab}
              activeTab={activeTab}
              onPress={setActiveTab}
            />
          ))}
        </View>

        {/* Categories */}
        <View className="px-4 mt-4">
          <Text className="text-gray-800 font-bold text-lg mb-3">
            Shop by Category
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
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
              <FeaturedStoreCard key={store.id} store={store} />
            ))}
          </ScrollView>
        </View>

        {/* Store List */}
        <View className="px-4 mt-6 mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-gray-800 font-bold text-lg">All Stores</Text>
          </View>
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </View>

        <VerificationBanner />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreScreen;

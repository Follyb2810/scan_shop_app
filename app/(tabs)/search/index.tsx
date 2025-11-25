import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import SearchHeader from "../../../components/Search/SearchHeader";
import FilterBar from "../../../components/Search/FilterBar";
import RecentSearchItem from "../../../components/Search/RecentSearchItem";
import CategoryCard from "../../../components/Search/CategoryCard";
import ProductCard from "../../../components/Search/ProductCard";
import VerificationInfo from "../../../components/Search/VerificationInfo";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeAreaWrapper from "../../../components/Shared/SafeAreaWrapper";

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
  const categories = [
    { id: 4, name: "Home", color: "#3b82f6" },
    { id: 3, name: "Health", color: "#8b5cf6" },
    { id: 2, name: "Beauty", color: "#ec4899" },
    { id: 1, name: "Food", color: "#f59e0b" },
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

  return (
    <SafeAreaWrapper>
      <ScrollView>
        <SearchHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <FilterBar
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

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
            {recentSearches.map((search, i) => (
              <RecentSearchItem key={i} search={search} />
            ))}
          </View>
        )}

        {searchQuery.length === 0 && (
          <View className="px-4 mt-6">
            <Text className="text-gray-800 font-bold text-lg mb-3">
              Shop by Category
            </Text>
            <View className="flex-row flex-wrap justify-between">
              {categories.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
            </View>
          </View>
        )}

        <View className="px-4 mt-6 mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-gray-800 font-bold text-lg">
              Trending Now
            </Text>
            <TouchableOpacity>
              <Text className="text-emerald-600 font-semibold">View All</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap justify-between">
            {trendingProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </View>
        </View>

        <VerificationInfo />
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default SearchScreen;

import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import StoreHeader from "../../../components/StoreScreen/StoreHeader";
import StoreTab from "../../../components/StoreScreen/StoreTab";
import CategoryCard from "../../../components/StoreScreen/CategoryCard";
import FeaturedStoreCard from "../../../components/StoreScreen/FeaturedStoreCard";
import StoreCard from "../../../components/StoreScreen/StoreCard";
import VerificationBanner from "../../../components/StoreScreen/VerificationBanner";
import SafeAreaWrapper from "../../../components/Shared/SafeAreaWrapper";

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
    <SafeAreaWrapper>
      <FlatList
        data={stores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <StoreCard store={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <StoreHeader />
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
            <View className="px-4 mt-4">
              <Text className="text-gray-800 font-bold text-lg mb-3">
                Shop by Category
              </Text>

              <FlatList
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View className="mr-3">
                    <CategoryCard category={item} />
                  </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>

            {/* Featured */}
            <View className="px-4 mt-6">
              <Text className="text-gray-800 font-bold text-lg mb-3">
                Featured This Week
              </Text>

              <FlatList
                data={featuredStores}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View className="mr-3">
                    <FeaturedStoreCard store={item} />
                  </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>

            <View className="px-4 mt-6 mb-3">
              <Text className="text-gray-800 font-bold text-lg">
                All Stores
              </Text>
            </View>
          </>
        }
        ListFooterComponent={<VerificationBanner />}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </SafeAreaWrapper>
  );
};

export default StoreScreen;

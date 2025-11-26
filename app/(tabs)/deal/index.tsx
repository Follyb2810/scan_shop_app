import React, { useState } from "react";
import { ScrollView } from "react-native";
import FlashDealCard from "../../../components/Deal/FlashDealCard";
import Header from "../../../components/Deal/Header";
import CategoryList from "../../../components/Deal/CategoryList";
import FeaturedDealCard from "../../../components/Deal/FeaturedDealCard";
import TrustBadge from "../../../components/Deal/TrustBadge";
import SafeAreaWrapper from "../../../components/Shared/SafeAreaWrapper";

const DealsScreen = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Food",
    "Beauty",
    "Home",
    "Medicine",
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
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400",
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
    <SafeAreaWrapper>
      <ScrollView>
        <Header />
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ScrollView className="px-4 mb-4">
          {featuredDeals.map((deal) => (
            <FeaturedDealCard key={deal.id} deal={deal} />
          ))}
        </ScrollView>
        <ScrollView
          className="px-4 mb-6"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {flashDeals.map((deal) => (
            <FlashDealCard key={deal.id} deal={deal} />
          ))}
        </ScrollView>
        <TrustBadge />
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default DealsScreen;

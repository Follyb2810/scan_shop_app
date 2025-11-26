import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "expo-router";
import SafeAreaWrapper from "../../../../components/Shared/SafeAreaWrapper";
import VerifiedBadge from "../../../../components/Product/VerifiedBadge";
import ProductHeader from "../../../../components/Product/ProductHeader";
import PriceSection from "../../../../components/Product/PriceSection";
import SizeSelector from "../../../../components/Product/SizeSelector";
import DescriptionSection from "../../../../components/Product/DescriptionSection";
import FeatureList from "../../../../components/Product/FeatureList";
import VerificationDetails from "../../../../components/Product/VerificationDetails";
import SimilarProducts from "../../../../components/Product/SimilarProducts";
import BottomActionBar from "../../../../components/Product/BottomActionBar";
import ImageCarousel from "../../../../components/Product/ImageCarousel";
import HeaderActions from "../../../../components/Product/HeaderActions";

const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState("500g");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const product = {
    id: 1,
    name: "Organic Pure Honey",
    brand: "Pure Nature",
    price: "₦2,500",
    originalPrice: "₦3,500",
    discount: "28%",
    rating: 4.8,
    reviews: 234,
    verified: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784354?w=800",
      "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=800",
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=800",
    ],
    description:
      "Premium organic honey sourced from certified bee farms. 100% pure, raw and unfiltered with no additives or preservatives. Rich in antioxidants and natural enzymes.",
    sizes: ["250g", "500g", "1kg"],
    features: [
      "100% Pure & Natural",
      "No Additives",
      "Lab Tested",
      "Organic Certified",
      "Non-GMO",
      "Raw & Unfiltered",
    ],
    verificationDetails: {
      batchNumber: "BN2024-5678",
      manufacturingDate: "10 Nov 2024",
      expiryDate: "10 Nov 2026",
      certificateNumber: "ORG-2024-1234",
      manufacturer: "Pure Nature Farms Ltd.",
      location: "Lagos, Nigeria",
    },
  };

  const similarProducts = [
    {
      id: 2,
      name: "Raw Honey",
      price: "₦2,200",
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Forest Honey",
      price: "₦3,000",
      image:
        "https://images.unsplash.com/photo-1587049352846-4a222e784354?w=400",
      rating: 4.9,
    },
  ];
  return (
    <SafeAreaWrapper>
      <ScrollView>
        <ImageCarousel
          images={product.images}
          selected={selectedImage}
          onChange={setSelectedImage}
        />

        <HeaderActions
          navigation={navigation}
          favorite={isFavorite}
          toggleFavorite={() => setIsFavorite(!isFavorite)}
        />

        <VerifiedBadge />

        <View className="px-4 py-4">
          <ProductHeader
            brand={product.brand}
            name={product.name}
            rating={product.rating}
            reviews={product.reviews}
            inStock={product.inStock}
          />

          <PriceSection
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
          />

          <SizeSelector
            sizes={product.sizes}
            selected={selectedSize}
            onSelect={setSelectedSize}
          />

          <DescriptionSection text={product.description} />

          <FeatureList features={product.features} />

          <VerificationDetails details={product.verificationDetails} />

          <SimilarProducts products={similarProducts} />
        </View>
      </ScrollView>

      <BottomActionBar />
    </SafeAreaWrapper>
  );
};

export default ProductDetailScreen;

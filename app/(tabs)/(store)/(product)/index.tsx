import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const ProductDetailScreen = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState("500g");
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  // Sample product data - in real app, this would come from route.params
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
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {/* Image Carousel */}
        <View className="relative">
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const offset = e.nativeEvent.contentOffset.x;
              const index = Math.round(offset / width);
              setSelectedImage(index);
            }}
          >
            {product.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={{ width, height: width }}
                resizeMode="cover"
              />
            ))}
          </ScrollView>

          {/* Image Indicators */}
          <View className="absolute bottom-4 left-0 right-0 flex-row justify-center">
            {product.images.map((_, index) => (
              <View
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  selectedImage === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </View>

          {/* Top Actions */}
          <View className="absolute top-4 left-0 right-0 flex-row justify-between px-4">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="bg-white/90 backdrop-blur-sm p-2 rounded-full"
            >
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsFavorite(!isFavorite)}
              className="bg-white/90 backdrop-blur-sm p-2 rounded-full"
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={24}
                color={isFavorite ? "#ef4444" : "#000"}
              />
            </TouchableOpacity>
          </View>

          {/* Verification Badge */}
          <View className="absolute top-4 left-1/2 -ml-16 bg-emerald-600 px-4 py-2 rounded-full flex-row items-center">
            <Ionicons name="shield-checkmark" size={16} color="#fff" />
            <Text className="text-white font-bold ml-1 text-sm">Verified</Text>
          </View>
        </View>

        {/* Product Info */}
        <View className="px-4 py-4">
          {/* Brand and Stock */}
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-emerald-600 font-semibold">
              {product.brand}
            </Text>
            <View
              className={`px-3 py-1 rounded-full ${
                product.inStock ? "bg-emerald-100" : "bg-red-100"
              }`}
            >
              <Text
                className={`text-xs font-bold ${
                  product.inStock ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Text>
            </View>
          </View>

          {/* Product Name */}
          <Text className="text-gray-800 text-2xl font-bold mb-2">
            {product.name}
          </Text>

          {/* Rating */}
          <View className="flex-row items-center mb-4">
            <View className="flex-row items-center">
              <Ionicons name="star" size={18} color="#fbbf24" />
              <Text className="text-gray-800 font-bold ml-1">
                {product.rating}
              </Text>
              <Text className="text-gray-500 ml-1">
                ({product.reviews} reviews)
              </Text>
            </View>
          </View>

          {/* Price */}
          <View className="flex-row items-end mb-4">
            <Text className="text-emerald-600 text-3xl font-bold">
              {product.price}
            </Text>
            <Text className="text-gray-400 text-lg line-through ml-3">
              {product.originalPrice}
            </Text>
            <View className="bg-red-100 px-2 py-1 rounded-lg ml-2">
              <Text className="text-red-600 text-sm font-bold">
                {product.discount} OFF
              </Text>
            </View>
          </View>

          {/* Size Selection */}
          <View className="mb-4">
            <Text className="text-gray-800 font-bold mb-2">Select Size</Text>
            <View className="flex-row">
              {product.sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() => setSelectedSize(size)}
                  className={`mr-3 px-6 py-3 rounded-xl ${
                    selectedSize === size
                      ? "bg-emerald-600 border-2 border-emerald-600"
                      : "bg-white border-2 border-gray-200"
                  }`}
                >
                  <Text
                    className={`font-semibold ${
                      selectedSize === size ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Description */}
          <View className="mb-4">
            <Text className="text-gray-800 font-bold text-lg mb-2">
              Description
            </Text>
            <Text className="text-gray-600 leading-6">
              {product.description}
            </Text>
          </View>

          {/* Features */}
          <View className="mb-4">
            <Text className="text-gray-800 font-bold text-lg mb-2">
              Key Features
            </Text>
            <View className="flex-row flex-wrap">
              {product.features.map((feature, index) => (
                <View
                  key={index}
                  className="bg-emerald-50 px-3 py-2 rounded-lg mr-2 mb-2 flex-row items-center"
                >
                  <Ionicons name="checkmark-circle" size={16} color="#059669" />
                  <Text className="text-emerald-700 ml-1 text-sm font-semibold">
                    {feature}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Verification Details */}
          <View className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-4 mb-4">
            <View className="flex-row items-center mb-3">
              <View className="bg-emerald-600 p-2 rounded-full">
                <Ionicons name="shield-checkmark" size={20} color="#fff" />
              </View>
              <Text className="text-gray-800 font-bold text-lg ml-2">
                Verification Details
              </Text>
            </View>

            <View className="space-y-2">
              <View className="flex-row justify-between py-2 border-b border-gray-200">
                <Text className="text-gray-600">Batch Number</Text>
                <Text className="text-gray-800 font-semibold">
                  {product.verificationDetails.batchNumber}
                </Text>
              </View>
              <View className="flex-row justify-between py-2 border-b border-gray-200">
                <Text className="text-gray-600">Manufacturing Date</Text>
                <Text className="text-gray-800 font-semibold">
                  {product.verificationDetails.manufacturingDate}
                </Text>
              </View>
              <View className="flex-row justify-between py-2 border-b border-gray-200">
                <Text className="text-gray-600">Expiry Date</Text>
                <Text className="text-gray-800 font-semibold">
                  {product.verificationDetails.expiryDate}
                </Text>
              </View>
              <View className="flex-row justify-between py-2 border-b border-gray-200">
                <Text className="text-gray-600">Certificate No.</Text>
                <Text className="text-gray-800 font-semibold">
                  {product.verificationDetails.certificateNumber}
                </Text>
              </View>
              <View className="flex-row justify-between py-2">
                <Text className="text-gray-600">Manufacturer</Text>
                <Text className="text-gray-800 font-semibold">
                  {product.verificationDetails.manufacturer}
                </Text>
              </View>
            </View>

            <TouchableOpacity className="mt-3 bg-emerald-600 py-3 rounded-xl flex-row items-center justify-center">
              <Ionicons name="qr-code" size={18} color="#fff" />
              <Text className="text-white font-bold ml-2">
                View Full Certificate
              </Text>
            </TouchableOpacity>
          </View>

          {/* Similar Products */}
          <View className="mb-4">
            <Text className="text-gray-800 font-bold text-lg mb-3">
              Similar Products
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {similarProducts.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  className="bg-white rounded-2xl mr-3 overflow-hidden border border-gray-200"
                  style={{ width: 140 }}
                >
                  <Image source={{ uri: item.image }} className="w-full h-32" />
                  <View className="p-3">
                    <Text
                      className="text-gray-800 font-bold text-sm"
                      numberOfLines={2}
                    >
                      {item.name}
                    </Text>
                    <View className="flex-row items-center mt-1">
                      <Ionicons name="star" size={12} color="#fbbf24" />
                      <Text className="text-gray-600 text-xs ml-1">
                        {item.rating}
                      </Text>
                    </View>
                    <Text className="text-emerald-600 font-bold mt-1">
                      {item.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex-row items-center">
        <TouchableOpacity className="bg-gray-100 p-3 rounded-xl mr-3">
          <Ionicons name="cart-outline" size={24} color="#059669" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-emerald-600 py-4 rounded-xl flex-row items-center justify-center">
          <Ionicons name="bag-handle" size={20} color="#fff" />
          <Text className="text-white font-bold text-base ml-2">
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

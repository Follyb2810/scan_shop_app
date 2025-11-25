import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import SafeAreaWrapper from "../../components/Shared/SafeAreaWrapper";
import { useLocalSearchParams } from "expo-router";

const user = {
  id: "user-123",
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  isManufacturer: true,
};

const manufacturer = {
  companyName: "Pure Market Ltd.",
  companyEmail: "info@puremarket.com",
  companyPhone: "+2348012345678",
  address: "123 Market Street",
  city: "Lagos",
  state: "Lagos",
  country: "Nigeria",
  licenseNumber: "LIC-123456",
  verificationStatus: "APPROVED",
  isVerified: true,
};

const products = [
  {
    name: "Organic Honey",
    sku: "HONEY-001",
    batchNumber: "BATCH-123",
    isAuthentic: true,
    reportedCount: 0,
    unitsSold: 120,
  },
  {
    name: "Fresh Juice",
    sku: "JUICE-001",
    batchNumber: "BATCH-234",
    isAuthentic: false,
    reportedCount: 3,
    unitsSold: 50,
  },
];

export default function ProfileDetails() {
  const { id } = useLocalSearchParams();

  const renderProduct = ({ item }) => (
    <View className="bg-white p-4 rounded-xl mb-3 shadow-md">
      <View className="flex-row justify-between items-center mb-1">
        <Text className="font-bold text-gray-800">{item.name}</Text>
        <Text
          className={`font-semibold text-sm ${
            item.isAuthentic ? "text-green-600" : "text-red-600"
          }`}
        >
          {item.isAuthentic ? "Authentic" : "Adulterated"}
        </Text>
      </View>
      <Text className="text-gray-500 text-sm">SKU: {item.sku}</Text>
      <Text className="text-gray-500 text-sm">Batch: {item.batchNumber}</Text>
      <Text className="text-gray-500 text-sm">
        Units Sold: {item.unitsSold} | Reports: {item.reportedCount}
      </Text>
    </View>
  );

  return (
    <SafeAreaWrapper className="bg-gray-50 flex-1">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 16 }}
      >
        {/* User Info */}
        <View className="bg-white p-6 rounded-2xl shadow-md mt-4">
          <Text className="text-xl font-bold text-gray-800 mb-2">
            {user.firstName} {user.lastName}
          </Text>
          <Text className="text-gray-600 mb-1">Email: {user.email}</Text>
        </View>

        {/* Manufacturer Section */}
        {user.isManufacturer ? (
          <>
            <View className="bg-white p-6 rounded-2xl shadow-md mt-6">
              <Text className="text-xl font-bold text-gray-800 mb-2">
                {manufacturer.companyName}
              </Text>
              <Text className="text-gray-600 mb-1">
                Email: {manufacturer.companyEmail}
              </Text>
              <Text className="text-gray-600 mb-1">
                Phone: {manufacturer.companyPhone}
              </Text>
              <Text className="text-gray-600 mb-1">
                Address: {manufacturer.address}, {manufacturer.city},{" "}
                {manufacturer.state}, {manufacturer.country}
              </Text>
              <Text className="text-gray-600 mb-1">
                License: {manufacturer.licenseNumber}
              </Text>
              <Text
                className={`mt-2 font-semibold ${
                  manufacturer.isVerified ? "text-green-600" : "text-red-600"
                }`}
              >
                Verification Status: {manufacturer.verificationStatus}
              </Text>
            </View>

            {/* Products */}
            <View className="mt-6 mb-4">
              <Text className="text-lg font-bold text-gray-800 mb-3">
                Products
              </Text>
              <FlatList
                data={products}
                keyExtractor={(item) => item.sku}
                renderItem={renderProduct}
                scrollEnabled={false}
              />
            </View>

            {/* Actions */}
            <View className="flex-row justify-around mt-6 mb-8">
              <TouchableOpacity className="flex-1 mx-2 bg-purple-600 py-3 rounded-xl items-center">
                <Text className="text-white font-semibold">Verify Product</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 mx-2 border border-gray-300 py-3 rounded-xl items-center">
                <Text className="text-gray-800 font-semibold">
                  View Audit Logs
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          // Apply as Manufacturer CTA
          <View className="mt-6 p-6 bg-white rounded-2xl shadow-md items-center">
            <Text className="text-gray-800 font-bold text-lg mb-4">
              Become a Verified Manufacturer
            </Text>
            <Text className="text-gray-500 mb-4 text-center">
              Apply to register as a manufacturer to track and sell authentic
              products.
            </Text>
            <TouchableOpacity className="bg-purple-600 py-3 px-8 rounded-xl">
              <Text className="text-white font-semibold">Apply Now</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaWrapper>
  );
}

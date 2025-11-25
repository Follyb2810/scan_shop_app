import React from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function LandingPage() {
  return (
    <ScrollView className="flex-1 bg-red-500">
      <View className="bg-blue-600 py-16 px-6 items-center justify-center">
        <Text className="text-4xl font-bold text-white text-center mb-4">
          Track & Verify Products
        </Text>
        <Text className="text-lg text-blue-100 text-center mb-6">
          Reduce adulterated goods with our platform. Scan, verify, and trust.
        </Text>
        <TouchableOpacity className="bg-white px-6 py-3 rounded-full shadow-md">
          <Text className="text-blue-600 font-semibold text-center">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>

      <View className="px-6 py-12 space-y-10">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          How It Works
        </Text>

        <View className="bg-white rounded-lg p-6 shadow-md space-y-2">
          <Text className="text-lg font-semibold text-gray-800">
            1. Manufacturers Onboard
          </Text>
          <Text className="text-gray-600">
            We help manufacturers register their products on the platform so
            every item can be tracked.
          </Text>
        </View>

        <View className="bg-white rounded-lg p-6 shadow-md space-y-2">
          <Text className="text-lg font-semibold text-gray-800">
            2. Scan Products
          </Text>
          <Text className="text-gray-600">
            Users can scan a product QR code and instantly view its verified
            details.
          </Text>
        </View>

        <View className="bg-white rounded-lg p-6 shadow-md space-y-2">
          <Text className="text-lg font-semibold text-gray-800">
            3. Reduce Adulteration
          </Text>
          <Text className="text-gray-600">
            With transparency, adulterated or counterfeit products are
            minimized, ensuring trust and safety.
          </Text>
        </View>

        <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-full shadow-md mt-6">
          <Text className="text-white font-semibold text-center text-lg">
            Join Now
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className="bg-gray-200 py-6 px-6 items-center">
        <Text className="text-gray-700 text-sm text-center">
          © 2025 ShopScan. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

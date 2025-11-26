import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import SafeAreaWrapper from "../../components/Shared/SafeAreaWrapper";
import { Link } from "expo-router";

interface Product {
  id: string;
  name: string;
  image: string;
}

interface ProfileProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    isManufacturer: boolean;
    manufacturer?: {
      companyName: string;
      verificationStatus: "APPROVED" | "PENDING" | "REJECTED";
    };
    isAdmin?: boolean;
  };
  products: Product[];
  pendingApplications?: any[];
}

const tabs = ["Profile", "My Products", "Applications"];

const ProfileScreen: React.FC<ProfileProps> = ({
  user,
  products,
  pendingApplications,
}) => {
  const [activeTab, setActiveTab] = useState("Profile");

  const handleApplyManufacturer = () => {
    console.log("Navigate to apply manufacturer screen");
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View className="bg-white rounded-xl shadow-md p-3 mr-3">
      <Image
        source={{ uri: item.image }}
        className="w-32 h-32 rounded-xl mb-2"
      />
      <Text className="font-semibold text-gray-800">{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaWrapper>
      <View className="px-4 flex-1">
        {/* Tabs */}
        <View className="flex-row justify-around mb-4">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab ? "bg-purple-600" : "bg-gray-200"
              }`}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                className={`font-semibold ${activeTab === tab ? "text-white" : "text-gray-700"}`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView>
          {activeTab === "Profile" && (
            <View>
              {/* User Info */}
              <View className="flex-row items-center mb-6">
                <View className="w-20 h-20 bg-gray-200 rounded-full items-center justify-center mr-4">
                  <Ionicons name="person" size={40} color="#6B7280" />
                </View>
                <View>
                  <Text className="text-xl font-bold text-gray-800">
                    {user.firstName} {user.lastName}
                  </Text>
                  <Text className="text-gray-500">{user.email}</Text>
                  {user.phoneNumber && (
                    <Text className="text-gray-500">{user.phoneNumber}</Text>
                  )}
                </View>
              </View>

              {/* Manufacturer Info / Apply */}
              {user.isManufacturer && user.manufacturer ? (
                <View className="bg-white p-4 rounded-xl shadow-md mb-6">
                  <Text className="text-gray-800 font-bold text-lg mb-1">
                    Manufacturer: {user.manufacturer.companyName}
                  </Text>
                  <Text className="text-gray-500 mb-2">
                    Verification Status:{" "}
                    <Text
                      className={`font-semibold ${
                        user.manufacturer.verificationStatus === "APPROVED"
                          ? "text-green-600"
                          : user.manufacturer.verificationStatus === "PENDING"
                            ? "text-yellow-500"
                            : "text-red-500"
                      }`}
                    >
                      {user.manufacturer.verificationStatus}
                    </Text>
                  </Text>
                  <TouchableOpacity className="bg-success px-4 py-2 rounded-xl">
                    <Link href="/profile/manufacrure_products" asChild>
                      <Text className="text-white font-semibold text-center">
                        Manage Products
                      </Text>
                    </Link>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  className="bg-purple-600 px-4 py-3 rounded-xl mb-6"
                  onPress={handleApplyManufacturer}
                >
                  <Text className="text-white font-bold text-center">
                    Apply as Manufacturer
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}

          {activeTab === "My Products" && user.isManufacturer && (
            <View>
              {products.length === 0 ? (
                <Text className="text-gray-500">No products yet.</Text>
              ) : (
                <FlatList
                  horizontal
                  data={products}
                  renderItem={renderProduct}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              )}
            </View>
          )}

          {activeTab === "Applications" && user.isAdmin && (
            <View>
              {pendingApplications && pendingApplications.length > 0 ? (
                pendingApplications.map((app) => (
                  <View
                    key={app.id}
                    className="bg-white p-4 rounded-xl shadow-md mb-3"
                  >
                    <Text className="font-bold text-gray-800">
                      {app.companyName}
                    </Text>
                    <Text className="text-gray-500">{app.email}</Text>
                    <Text className="text-gray-500">
                      Status:{" "}
                      <Text className="font-semibold">
                        {app.verificationStatus}
                      </Text>
                    </Text>
                    <View className="flex-row mt-2">
                      <TouchableOpacity className="bg-green-600 px-3 py-1 rounded mr-2">
                        <Text className="text-white font-semibold">
                          Approve
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="bg-red-600 px-3 py-1 rounded">
                        <Text className="text-white font-semibold">Reject</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))
              ) : (
                <Text className="text-gray-500">No pending applications.</Text>
              )}
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;

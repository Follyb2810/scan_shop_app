import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import SafeAreaWrapper from "../../components/Shared/SafeAreaWrapper";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

const dummyProducts = [
  {
    id: "1",
    name: "Organic Milk",
    image: "https://images.unsplash.com/photo-1585238342024-78d2f847fae8?w=400",
  },
  {
    id: "2",
    name: "Herbal Soap",
    image: "https://images.unsplash.com/photo-1592861953063-f91a0f78d99d?w=400",
  },
];

interface ProfileProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    isManufacturer: boolean;
    manufacturer?: {
      companyName: string;
      verificationStatus: string;
    };
  };
}
export const UserDummy = {
  firstName: "David",
  lastName: "Johnson",
  email: "david@example.com",
  phoneNumber: "+234 800 000 0000",
  isManufacturer: false,
  manufacturer: {
    companyName: "Pure Harvest Foods",
    verificationStatus: "APPROVED",
  },
};

const ProfileScreen: React.FC<ProfileProps> = ({ user = UserDummy }) => {
  const [isManufacturer, setIsManufacturer] = useState(user.isManufacturer);
  const { id } = useLocalSearchParams();
  const { push } = useRouter();

  const renderProduct = ({ item }: any) => (
    <Link
      // href={`/profile/(profile)/manufacturer_products`}
      href={`/profile/(profile)/manufacturer_products?id=${item.id}`}
      asChild
    >
      <TouchableOpacity className="bg-white rounded-2xl shadow-md mr-4 p-3 w-40">
        <Image
          source={{ uri: item.image }}
          className="w-full h-32 rounded-xl mb-3"
          resizeMode="cover"
        />

        <Text className="font-semibold text-gray-800 text-sm" numberOfLines={1}>
          {item.name}
        </Text>

        <View className="flex-row items-center mt-1">
          <Ionicons name="chevron-forward" size={14} color="#6B7280" />
          <Text className="text-gray-500 text-xs ml-1">View details</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View>
      <View className="px-4">
        <Text>ProfileDetails {id} in us</Text>
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

        {isManufacturer && user.manufacturer ? (
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
              <Link href={"/profile/manufacturer_products"} asChild>
                <Text className="text-white font-semibold text-center">
                  Manage Products
                </Text>
              </Link>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity className="bg-purple-600 px-4 py-3 rounded-xl mb-6">
            <Link href={"/profile/apply"} asChild>
              <Text className="text-white font-bold text-center">
                Apply as Manufacturer
              </Text>
            </Link>
          </TouchableOpacity>
        )}

        {/* Products List */}
        {isManufacturer && (
          <View>
            <Text className="text-gray-800 font-bold text-lg mb-3">
              Your Products
            </Text>
            {dummyProducts.length === 0 ? (
              <Text className="text-gray-500">No products yet.</Text>
            ) : (
              <FlatList
                horizontal
                data={dummyProducts}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;

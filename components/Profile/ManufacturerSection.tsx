import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

interface Props {
  isManufacturer: boolean;
  manufacturer?: {
    companyName: string;
    verificationStatus: "APPROVED" | "PENDING" | "REJECTED";
  };
  onApply: () => void;
}

const ManufacturerSection: React.FC<Props> = ({
  isManufacturer,
  manufacturer,
  onApply,
}) => {
  if (isManufacturer && manufacturer) {
    return (
      <View className="bg-white p-4 rounded-xl shadow-md mb-6">
        <Text className="text-gray-800 font-bold text-lg mb-1">
          Manufacturer: {manufacturer.companyName}
        </Text>
        <Text className="text-gray-500 mb-2">
          Verification Status:
          <Text
            className={`font-semibold ${
              manufacturer.verificationStatus === "APPROVED"
                ? "text-green-600"
                : manufacturer.verificationStatus === "PENDING"
                  ? "text-yellow-500"
                  : "text-red-500"
            }`}
          >
            {manufacturer.verificationStatus}
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
    );
  }

  return (
    <TouchableOpacity
      className="bg-purple-600 px-4 py-3 rounded-xl mb-6"
      onPress={onApply}
    >
      <Text className="text-white font-bold text-center">
        Apply as Manufacturer
      </Text>
    </TouchableOpacity>
  );
};

export default ManufacturerSection;

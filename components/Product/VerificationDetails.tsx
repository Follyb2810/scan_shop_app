import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Verification {
  batchNumber: string;
  manufacturingDate: string;
  expiryDate: string;
  certificateNumber: string;
  manufacturer: string;
}

interface Props {
  details: Verification;
}

const VerificationDetails: React.FC<Props> = ({ details }) => {
  return (
    <View className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-4 mb-4">
      <View className="flex-row items-center mb-3">
        <View className="bg-emerald-600 p-2 rounded-full">
          <Ionicons name="shield-checkmark" size={20} color="#fff" />
        </View>
        <Text className="text-gray-800 font-bold text-lg ml-2">
          Verification Details
        </Text>
      </View>

      {/* Rows */}
      {Object.entries(details).map(([key, value]) => (
        <View
          key={key}
          className="flex-row justify-between py-2 border-b border-gray-200"
        >
          <Text className="text-gray-600">
            {key.replace(/([A-Z])/g, " $1")}
          </Text>
          <Text className="text-gray-800 font-semibold">{value}</Text>
        </View>
      ))}

      <TouchableOpacity className="mt-3 bg-emerald-600 py-3 rounded-xl flex-row items-center justify-center">
        <Ionicons name="qr-code" size={18} color="#fff" />
        <Text className="text-white font-bold ml-2">View Full Certificate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationDetails;

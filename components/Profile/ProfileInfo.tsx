import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
  };
}

const ProfileInfo: React.FC<Props> = ({ user }) => {
  return (
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
  );
};

export default ProfileInfo;

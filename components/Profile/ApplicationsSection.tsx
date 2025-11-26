import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Application {
  id: string;
  companyName: string;
  email: string;
  verificationStatus: string;
}

interface Props {
  applications: Application[];
}

const ApplicationsSection: React.FC<Props> = ({ applications }) => {
  if (!applications || applications.length === 0) {
    return <Text className="text-gray-500">No pending applications.</Text>;
  }

  return (
    <>
      {applications.map((app) => (
        <View key={app.id} className="bg-white p-4 rounded-xl shadow-md mb-3">
          <Text className="font-bold text-gray-800">{app.companyName}</Text>
          <Text className="text-gray-500">{app.email}</Text>
          <Text className="text-gray-500">
            Status:
            <Text className="font-semibold">{app.verificationStatus}</Text>
          </Text>

          <View className="flex-row mt-2">
            <TouchableOpacity className="bg-green-600 px-3 py-1 rounded mr-2">
              <Text className="text-white font-semibold">Approve</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-red-600 px-3 py-1 rounded">
              <Text className="text-white font-semibold">Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};

export default ApplicationsSection;

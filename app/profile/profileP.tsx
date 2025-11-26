import { View, Text } from "react-native";
import React from "react";

export default function ProfileScreen() {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
}

// // navigation/ProfileStack.tsx
// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ProfileScreen from "../screens/Profile/ProfileScreen";
// import MyProductsScreen from "../screens/Profile/MyProductsScreen";
// import ApplicationsScreen from "../screens/Profile/ApplicationsScreen";
// import ApplyManufacturerScreen from "../screens/Profile/ApplyManufacturerScreen";

// export type ProfileStackParamList = {
//   Profile: undefined;
//   MyProducts: undefined;
//   Applications: undefined;
//   ApplyManufacturer: undefined;
// };

// const Stack = createNativeStackNavigator<ProfileStackParamList>();

// export default function ProfileStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: true }}>
//       <Stack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ title: "Profile" }}
//       />
//       <Stack.Screen
//         name="MyProducts"
//         component={MyProductsScreen}
//         options={{ title: "My Products" }}
//       />
//       <Stack.Screen
//         name="Applications"
//         component={ApplicationsScreen}
//         options={{ title: "Applications" }}
//       />
//       <Stack.Screen
//         name="ApplyManufacturer"
//         component={ApplyManufacturerScreen}
//         options={{ title: "Apply as Manufacturer" }}
//       />
//     </Stack.Navigator>
//   );
// }

// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import SafeAreaWrapper from "../../components/Shared/SafeAreaWrapper";
// import { useNavigation } from "@react-navigation/native";
// import { ProfileStackParamList } from "../../navigation/ProfileStack";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// type ProfileNavProp = NativeStackNavigationProp<
//   ProfileStackParamList,
//   "Profile"
// >;

// export default function ProfileScreen() {
//   const navigation = useNavigation<ProfileNavProp>();

//   return (
//     <SafeAreaWrapper>
//       <View className="px-4 flex-1">
//         <Text className="text-2xl font-bold mb-6">Your Profile</Text>

//         <TouchableOpacity
//           className="bg-purple-600 py-3 px-4 rounded-xl mb-4"
//           onPress={() => navigation.navigate("MyProducts")}
//         >
//           <Text className="text-white font-semibold text-center">
//             My Products
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           className="bg-purple-600 py-3 px-4 rounded-xl mb-4"
//           onPress={() => navigation.navigate("Applications")}
//         >
//           <Text className="text-white font-semibold text-center">
//             Applications
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           className="bg-green-600 py-3 px-4 rounded-xl mt-4"
//           onPress={() => navigation.navigate("ApplyManufacturer")}
//         >
//           <Text className="text-white font-semibold text-center">
//             Apply as Manufacturer
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaWrapper>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList } from "react-native";
// import SafeAreaWrapper from "../../components/Shared/SafeAreaWrapper";

// export default function MyProductsScreen() {
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     // Fetch products via API
//     setProducts([
//       { id: "1", name: "Organic Honey" },
//       { id: "2", name: "Natural Soap" },
//     ]);
//   }, []);

//   return (
//     <SafeAreaWrapper>
//       <View className="px-4 flex-1">
//         <Text className="text-2xl font-bold mb-4">My Products</Text>
//         <FlatList
//           data={products}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View className="bg-white p-4 rounded-xl mb-2 shadow">
//               <Text className="text-gray-800 font-semibold">{item.name}</Text>
//             </View>
//           )}
//           ListEmptyComponent={<Text>No products found.</Text>}
//         />
//       </View>
//     </SafeAreaWrapper>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList } from "react-native";
// import SafeAreaWrapper from "../../components/Shared/SafeAreaWrapper";

// export default function ApplicationsScreen() {
//   const [applications, setApplications] = useState<any[]>([]);

//   useEffect(() => {
//     // Fetch manufacturer applications via API
//     setApplications([
//       { id: "1", companyName: "Natural Foods Co.", status: "PENDING" },
//       { id: "2", companyName: "Green Harvest Ltd.", status: "APPROVED" },
//     ]);
//   }, []);

//   return (
//     <SafeAreaWrapper>
//       <View className="px-4 flex-1">
//         <Text className="text-2xl font-bold mb-4">Applications</Text>
//         <FlatList
//           data={applications}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View className="bg-white p-4 rounded-xl mb-2 shadow flex-row justify-between">
//               <Text className="text-gray-800 font-semibold">{item.companyName}</Text>
//               <Text className="text-gray-500 font-medium">{item.status}</Text>
//             </View>
//           )}
//           ListEmptyComponent={<Text>No applications found.</Text>}
//         />
//       </View>
//     </SafeAreaWrapper>
//   );
// }

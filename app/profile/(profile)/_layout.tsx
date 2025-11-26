import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#9333EA",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },

        tabBarActiveTintColor: "#9333EA",
        tabBarInactiveTintColor: "#6B7280",
        tabBarActiveBackgroundColor: "rgba(147, 51, 234, 0.12)",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          elevation: 10,
          shadowOpacity: 0.1,
          borderTopWidth: 0,
          // paddingHorizontal: 10,
        },
      }}
    >
      <Tabs.Screen
        name="applications"
        options={{
          headerShown: false,
          title: "Applications",
          tabBarIcon: ({ color }) => (
            <Feather name="tag" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="manufacturer_products"
        options={{
          headerShown: false,
          title: "My Products",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

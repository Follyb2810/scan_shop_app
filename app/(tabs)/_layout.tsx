import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

export const unstable_settings = {
  initialRouteName: "deal/index",
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#6366F1",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#9333EA",
        tabBarInactiveTintColor: "# f4511e",
        tabBarActiveBackgroundColor: "#6366F1",
        tabBarStyle: {
          backgroundColor: "#6366F1",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingHorizontal: 10,
        },
      }}
    >
      <Tabs.Screen
        name="deal"
        options={{
          headerShown: false,
          title: "Deals",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Feather name="tag" size={24} color="white" />
            ) : (
              <Feather name="tag" size={24} color={color} />
            ),
        }}
      />

      <Tabs.Screen
        name="search/index"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Feather name="search" size={24} color="white" />
            ) : (
              <Feather name="search" size={24} color={color} />
            ),
        }}
      />

      <Tabs.Screen
        name="index"
        // options={{
        //   headerShown: false,
        //   title: "Scan",
        //   tabBarIcon: ({ color, focused }) =>
        //     focused ? (
        //       <Feather name="camera" size={24} color="white" />
        //     ) : (
        //       <Feather name="camera" size={24} color={color} />
        //     ),
        // }}
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="scan/index"
        options={{
          headerShown: false,
          title: "Scan",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Feather name="shopping-bag" size={24} color="white" />
            ) : (
              <Feather name="shopping-bag" size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="(store)"
        options={{
          headerShown: false,
          title: "Store",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Feather name="shopping-bag" size={24} color="white" />
            ) : (
              <Feather name="shopping-bag" size={24} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}

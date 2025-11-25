import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#9333EA",
        tabBarInactiveTintColor: "# f4511e",
        tabBarActiveBackgroundColor: "#f4511e",
        tabBarStyle: {
          backgroundColor: "#f4511e",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="deal/index"
        options={{
          headerShown: false,
          title: "Deal",
          headerBackButtonDisplayMode: "minimal",
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Feather name="home" size={24} color="black" />
            ) : (
              <AntDesign name="area-chart" size={24} color={color ?? "black"} />
            ),
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          headerShown: false,
          title: "Search",
          headerBackButtonDisplayMode: "minimal",
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Feather name="home" size={24} color="black" />
            ) : (
              <AntDesign name="area-chart" size={24} color={color ?? "black"} />
            ),
        }}
      />
      <Tabs.Screen
        name="scan/index"
        options={{
          headerShown: false,
          title: "Scan",
          headerBackButtonDisplayMode: "minimal",
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Feather name="home" size={24} color="black" />
            ) : (
              <AntDesign name="area-chart" size={24} color={color ?? "black"} />
            ),
        }}
      />
      <Tabs.Screen
        name="store/index"
        options={{
          headerShown: false,
          title: "Store",
          headerBackButtonDisplayMode: "minimal",
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Feather name="home" size={24} color="black" />
            ) : (
              <AntDesign name="area-chart" size={24} color={color ?? "black"} />
            ),
        }}
      />
      {/* <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          headerBackButtonDisplayMode: "minimal",
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Feather name="home" size={24} color="black" />
            ) : (
              <AntDesign name="area-chart" size={24} color={color ?? "black"} />
            ),
        }}
      /> */}
      {/* <Tabs.Screen
        name="login"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <MaterialIcons
                name="leave-bags-at-home"
                size={24}
                color="black"
              />
            ) : (
              <FontAwesome5 name="home" size={24} color={color ?? "black"} />
            ),
        }}
        // options={{ headerShown: false, presentation: "modal",sheetAllowedDetents:[0.5] }}
      /> */}
    </Tabs>
  );
}

import { Stack } from "expo-router";
import React from "react";

export default function Productlayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerBackVisible: false,
          headerBackButtonDisplayMode: "generic",
          headerShown: false,
        }}
      />
    </Stack>
  );
}

import { Stack } from "expo-router";

export default function ManufacturerLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
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
          headerBackVisible: true,
          headerBackButtonDisplayMode: "generic",
          headerShown: true,
          headerBackTitle: "Go Back",
        }}
      />
    </Stack>
  );
}

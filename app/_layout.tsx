import "./../global.css";
// import AuthProvider from "@/context/AuthProvider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import AuthProvider from "../context/AuthProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SpaceMono: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    //  <AuthProvider>
    <Stack
      screenOptions={{
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
          headerShown: false,
          title: "Home",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <Stack.Screen
        name="more/index"
        options={{
          headerShown: false,
          presentation: "formSheet",
          sheetAllowedDetents: [0.2, 0.4, 0.5],
          sheetGrabberVisible: true,
        }}
        // options={{ headerShown: false, presentation: "modal",sheetAllowedDetents:[0.5] }}
      />
      <Stack.Screen
        name="auth"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
    // </AuthProvider>
  );
}

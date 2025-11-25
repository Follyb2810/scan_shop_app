import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { push, replace } = useRouter();
  const isLoggin = false;
  useEffect(() => {
    if (!isLoggin) {
      replace("/auth");
    }
  });
  return <View>{children}</View>;
}

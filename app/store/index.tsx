import { Link, useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
export default function index() {
  const router = useRouter();
  return (
    <View>
      <Text>Hello</Text>
      <Link href={"/"} push>
        Home
      </Link>
    </View>
  );
}

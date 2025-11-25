import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 16,
        padding: 16,
      }}
    >
      <View>
        <Link href={{ pathname: "/", params: { name: 123 } }}>Home</Link>
        <Text>index</Text>
        <Pressable onPress={() => console.log("press")}>Press</Pressable>
        <Image source={{ uri: "" }} />
        <TouchableOpacity onPress={() => console.log("press")}>
          Click
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

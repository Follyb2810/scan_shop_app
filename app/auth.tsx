import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import React from "react";

export default function auth() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "android" ? "padding" : "height"}
    >
      <View>
        <Text>Create Account</Text>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          defaultValue="follyb@gmail"
          placeholder="follyb@gmail.com"
        />
        <TextInput
          onChangeText={() => {}}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
        />
      </View>
    </KeyboardAvoidingView>
  );
}

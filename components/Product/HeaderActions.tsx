import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
  favorite: boolean;
  toggleFavorite: () => void;
}

const HeaderActions: React.FC<Props> = ({
  navigation,
  favorite,
  toggleFavorite,
}) => {
  return (
    <View className="absolute top-4 left-0 right-0 flex-row justify-between px-4">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-white/90 backdrop-blur-sm p-2 rounded-full"
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={toggleFavorite}
        className="bg-white/90 backdrop-blur-sm p-2 rounded-full"
      >
        <Ionicons
          name={favorite ? "heart" : "heart-outline"}
          size={24}
          color={favorite ? "#ef4444" : "#000"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderActions;

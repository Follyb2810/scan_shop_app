import React from "react";
import { View, ScrollView, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface Props {
  images: string[];
  selected: number;
  onChange: (index: number) => void;
}

const ImageCarousel: React.FC<Props> = ({ images, selected, onChange }) => {
  return (
    <View className="relative">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const offset = e.nativeEvent.contentOffset.x;
          onChange(Math.round(offset / width));
        }}
      >
        {images.map((img, i) => (
          <Image
            key={i}
            source={{ uri: img }}
            style={{ width, height: width }}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      <View className="absolute bottom-4 left-0 right-0 flex-row justify-center">
        {images.map((_, i) => (
          <View
            key={i}
            className={`w-2 h-2 rounded-full mx-1 ${
              selected === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;

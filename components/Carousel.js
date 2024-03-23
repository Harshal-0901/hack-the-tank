import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://img.freepik.com/premium-vector/american-food-banner-template_23-2148751800.jpg?w=996",
    "https://img.freepik.com/free-psd/american-food-voucher-template-concept_23-2148474724.jpg?w=1380&t=st=1711214225~exp=1711214825~hmac=9d6698c70fdc53a0c991078ddba61c332e6333c14a1326ffcfd7d42c4f05d90a",
    "https://img.freepik.com/premium-psd/fast-food-banner_1004676-805.jpg?w=1380",
  ];

  return (
    <View className="mt-3">
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});

import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CategoryCard = ({ img, name }) => {
  return (
    <View>
      <TouchableOpacity className="relative mx-1 content-center items-center ">
        <Image source={{ uri: img }} className=" h-16 w-16 rounded-full " />
        <Text className="text-center font-bold text-md text-gray-800 pt-1 w-20">
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;

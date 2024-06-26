import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { data } from "../../data/Data";
import FeatureCard from "./FeatureCard";
import Icon from "react-native-vector-icons/Ionicons";

const Feature = () => {
  return (
    <View className="mt-3">
      <View className="px-3 pt-3 pb-2">
        <View className="flex-row justify-between align-center">
          <Text className="font-bold text-2xl text-gray-800">Featured</Text>
          <Icon name="md-arrow-forward-sharp" size={25} color="#00CCBB" />
        </View>
        <Text className="text-gray-600">Why not save your money today ?</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
          paddingHorizontal: 7,
        }}
      >
        {data.map((offer) => {
          return (
            <View>
              <FeatureCard
                key={offer.id}
                id={offer.id}
                img={offer.image}
                name={offer.name}
                cat={offer.category}
                price={offer.price}
                location={offer.location}
                des={offer.desc}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Feature;

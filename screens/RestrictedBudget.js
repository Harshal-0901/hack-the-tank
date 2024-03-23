import { View, Text } from "react-native";
import React from "react";
import FeatureCard from "../components/Home/FeatureCard";
import { data } from "../data/Data";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native";

const RestrictedBudget = () => {
  return (
    <View className="mt-3">
      <View className="px-3 pt-3 pb-2">
        <View className="flex-row justify-between align-center">
          <Text className="font-bold text-2xl text-gray-800">Budget Items</Text>
        </View>
        <Text className="text-gray-600">Why not save your money today ?</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
          paddingHorizontal: 7,
        }}
      >
        {data.map((offer) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View style={{ marginBottom: 40, width: 350 }}>
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
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RestrictedBudget;

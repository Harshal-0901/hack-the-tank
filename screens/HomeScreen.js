import React, { Component, useLayoutEffect } from "react";
import { Image, StatusBar, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as Icon from "react-native-feather";

// import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Entypo";
import { ScrollView } from "react-native";

import Category from "../components/Home/Category";
import Offer from "../components/Home/Offer";
import Feature from "../components/Home/Feature";
import Discount from "../components/Home/Discount";

import zorko_logo from "../assets/images/zorko_logo.jpg";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";

/* import QuickFood from "../components/QuickFood"; */
import Carousel from "../components/Carousel";
import Footer from "../components/footer";
import ContactSection from "../components/ContactSection";

const HomeScreen = () => {
  return (
    // <SafeAreaView className=" bg-white">
    //   {/* Header */}
    //   <View className=" flex-row justify-between mt-2 mx-3 pb-4">
    //     <View className=" flex-row space-x-2 items-center ">
    //       {/* <Image
    //         src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fzorko.in%2F&psig=AOvVaw0QdRBnHNJuWARnZqymTcwE&    ust=1711287052383000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMD4kpm_ioUDFQAAAAAdAAAAABAD"
    //         className=" h-9 w-9 rounded-full"
    //       /> */}
    //       <Image source={zorko_logo} className=" h-9 w-9 rounded-full" />
    //       <View>
    //         <Text className=" text-sm text-gray-500">Deliver Now</Text>
    //         <Text className=" font-bold text-xl">
    //           Current Location <Icon name="down" size={20} color="#00CCBB" />
    //         </Text>
    //       </View>
    //     </View>
    //     <Icon2 name="user-circle-o" size={33} color="#00CCBB" />
    //   </View>

    //   {/* Search */}
    //   <View className="flex-row items-center mx-3 pb-4 space-x-2">
    //     <View className=" flex-row flex-auto space-x-2 py-1 px-2 items-center bg-gray-200">
    //       <Icon name="search1" size={18} />
    //       <TextInput
    //         placeholder="Resturents and cuisines"
    //         keyboardType="default"
    //         className=" text-sm"
    //       />
    //     </View>
    //     <Icon3 name="sound-mix" size={28} color="#00CCBB" />
    //   </View>

    //   {/* Body */}
    //   <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-100">
    //     {/* categories */}
    //     <Category />
    //     {/* Offer near you */}
    //     <Offer />
    //     {/* Feature */}
    //     <Feature />
    //     {/* Tasty Discount */}
    //     <Discount />
    //   </ScrollView>
    // </SafeAreaView>
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 pt-5">
        <Image source={zorko_logo} className=" h-9 w-9 rounded-full" />
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Outlets" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">India</Text>
          </View>
        </View>
        <View className="p-3 rounded-full bg-gray-300">
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories
        <Categories /> */}

        <Text className="font-bold text-lg text-gray-800 ml-3 mt-2">
          Categories
        </Text>
        {/* categories */}
        <Category />

        <Text className="font-bold text-2xl text-gray-800 ml-3 mt-2">
          Offers
        </Text>
        {/* Image slider Component */}
        <Carousel />

        {/* Quick Food Component
        <QuickFood /> */}

        {/* Feature */}
        <Feature />

        {/* Tasty Discount */}
        <Discount />

        {/* Featured
        <View className="mt-5">
            {
                [featured, featured, featured].map((item, index)=>{
                    return (
                        <FeaturedRow key={index} title={item.title} outlets={item.outlets} description={item.description} />
                    )
                })
            }
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

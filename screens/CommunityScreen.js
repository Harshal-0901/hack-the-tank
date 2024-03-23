import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { UserData } from "../data/UserData";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScrollView } from "react-native";

const CommunityScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView className="bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ marginTop: 2 }}>
          {UserData.map((item) => {
            return (
              <View key={item.id} style={{ marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 25,
                    marginBottom: 8,
                  }}
                >
                  <Image
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      paddingHorizontal: 10,
                    }}
                    source={item.profile}
                  />
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontSize: 16,
                      fontWeight: "600",
                      color: "black",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{
                      height: 280,
                      width: screenWidth * 0.9,
                    }}
                    source={item.post.image}
                  />
                </View>
                <View
                  style={{
                    paddingHorizontal: 13,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 15,
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      style={{ height: 24, width: 28 }}
                      source={require("../assets/Like.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{ height: 24, width: 24, marginLeft: 15 }}
                      source={require("../assets/Comment.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{ height: 24, width: 28, marginLeft: 15 }}
                      source={require("../assets/Messanger.png")}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    marginLeft: 13,
                    marginTop: 10,
                    fontSize: 16,
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  {item.post.like} likes
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 13,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 16, fontWeight: "500" }}
                  >
                    {item.name}{" "}
                  </Text>
                  <Text style={{ color: "black" }}>{item.post.caption}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityScreen;

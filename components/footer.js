/* import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ContactSection = () => {
  const socialMediaHandles = {
    facebook: "https://www.facebook.com/zorko",
    twitter: "https://twitter.com/zorko",
    instagram: "https://www.instagram.com/zorko",
    linkedin: "https://www.linkedin.com/company/zorko",
  };

  const handleSocialMediaClick = (url) => {
    // Open the social media URL in browser
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect with ZORKO</Text>
      <View style={styles.socialIconsContainer}>
        {Object.keys(socialMediaHandles).map((platform, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconContainer}
            onPress={() => handleSocialMediaClick(socialMediaHandles[platform])}
          >
            <FontAwesome name={platform} size={30} color="#555" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  iconContainer: {
    padding: 10,
    marginBottom: 30,
  },
});

export default ContactSection;
 */
import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

function Footer() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        height: 60,
        alignItems: "center",
        marginBottom: 50,
      }}
    >
      <TouchableOpacity>
        <Image
          style={{ height: 37, width: 35 }}
          source={require("../assets/footer/homeButton.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{ height: 37, width: 35 }}
          source={require("../assets/footer/search.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{ height: 37, width: 35 }}
          source={require("../assets/footer/addPost.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{ height: 35, width: 36 }}
          source={require("../assets/footer/reel.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{ height: 37, width: 35 }}
          source={require("../assets/footer/user.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
export default Footer;

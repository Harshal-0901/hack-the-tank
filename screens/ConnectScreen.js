// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";

// const ConnectScreen = () => {
//   const socialMediaHandles = {
//     facebook: "https://www.facebook.com/zorko",
//     twitter: "https://twitter.com/zorko",
//     instagram: "https://www.instagram.com/zorko",
//     linkedin: "https://www.linkedin.com/company/zorko",
//   };

//   const handleSocialMediaClick = (url) => {
//     // Open the social media URL in browser
//     Linking.openURL(url);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Connect with ZORKO</Text>
//       <View style={styles.socialIconsContainer}>
//         {Object.keys(socialMediaHandles).map((platform, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.iconContainer}
//             onPress={() => handleSocialMediaClick(socialMediaHandles[platform])}
//           >
//             <FontAwesome name={platform} size={30} color="#555" />
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 20,
//     paddingHorizontal: 20,
//     marginBottom: 70,
//     marginTop: 30,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   socialIconsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   iconContainer: {
//     padding: 10,
//   },
// });

// export default ConnectScreen;

import Anand_Nahar from "../assets/images/Anand_Nahar.jpg";

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ConnectScreen = () => {
  const socialMediaHandles = {
    facebook: "https://www.facebook.com/ZorkoBrand/",
    twitter: "https://twitter.com/zorko",
    instagram: "https://www.instagram.com/zorkobrand/?hl=en",
    linkedin: "https://www.linkedin.com/company/zorko/?originalSubdomain=in",
  };

  const handleSocialMediaClick = (url) => {
    // Open the social media URL in browser
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Connect with ZORKO</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>About ZORKO</Text>
        <Text>
          ZORKO Pvt Ltd. is a DIPP recognised Startup by Government of India as
          a young manufacturing company with a zeal to make a difference in
          society and environmental sustainability and public health improvement
          by advocating for reduced meat consumption and supporting animal
          welfare. We are driven by a deep philosophy of Ethics & Trust, backed
          by experienced people in diverse sectors and advised by a committed
          team of professionals. Our company’s vision is to popularize the
          vegetarian menu globally, aiming to add 1000+ new vegetarian
          restaurants in the next 1000 days..
        </Text>
        <View style={styles.founderContainer}>
          <Image source={Anand_Nahar} style={styles.founderImage} />
          <Text style={styles.founderName}>Anand Nahar</Text>
          <Text style={styles.founderName}>(Founder of Zorko)</Text>
          <View style={styles.socialIconsContainer}>
            {Object.keys(socialMediaHandles).map((platform, index) => (
              <TouchableOpacity
                key={index}
                style={styles.iconContainer}
                onPress={() =>
                  handleSocialMediaClick(socialMediaHandles[platform])
                }
              >
                <FontAwesome name={platform} size={30} color="#555" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconContainer: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "space-evenly",
  },
  founderContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  founderImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  founderName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ConnectScreen;

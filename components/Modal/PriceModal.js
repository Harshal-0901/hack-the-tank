import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  Dimensions,
  TextInput,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";

function PriceModal({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(true);
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [value, onChangeText] = React.useState("");

  return (
    <View style={{ flex: 1 }}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}

      <Modal isVisible={isModalVisible} style={{ height: 300 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            gap: 40,
          }}
        >
          <Button title="What is your budget ?" />
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            maxLength={5}
          />
          <Button
            title="Search"
            onPress={() => {
              navigation.navigate("RestrictedBudget", { budget: value });
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 80,
  },
});

export default PriceModal;

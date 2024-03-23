import React, { useState } from "react";
import { Button, Text, View, Dimensions } from "react-native";
import Modal from "react-native-modal";

function ModalScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(true);
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
          <Button
            title="Restricted Budget"
            onPress={() => {
              navigation.navigate("RestrictedBudget");
            }}
          />
          <Button
            title="Normal View"
            onPress={() => {
              navigation.navigate("MyTab");
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

export default ModalScreen;

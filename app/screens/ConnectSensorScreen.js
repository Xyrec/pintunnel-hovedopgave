import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import AppDialogContainer from "../components/AppDialogContainer";
import AppDialogButton from "../components/AppDialogButton";

// TODO: Needs to somehow check if user has connected the right pins, before letting them click the connect button (Consult the PinTunnel devs)
// TODO: Needs a JSON database of where certain pins should be connected (Consult with PinTunnel devs)

function ConnectSensorScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/polygons.jpg")}
      blurRadius={3}
    >
      <AppDialogContainer>
        <Text style={styles.connectTitle}>Connect the following pins!</Text>
        <View style={styles.instructions}>
          <Text style={styles.connectText}>Sensor GND → Pin #4</Text>
          <Text style={styles.connectText}>Sensor VCC → Pin #7</Text>
          <Text style={styles.connectText}>Sensor D0 → Pin #1</Text>
        </View>
        <AppDialogButton onPress={() => navigation.navigate("MainMenuScreen")}>
          Add new sensor →
        </AppDialogButton>
      </AppDialogContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  connectTitle: {
    fontSize: 24,
    fontFamily: 'Rubik_400Regular',
    textAlign: "center",
    color: "#680f94",
  },
  connectText: {
    fontSize: 24,
    fontFamily: 'Rubik_300Light'
  },
  instructions: {
    justifyContent: "center",
    padding: "2%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#eee",
    marginVertical: 10,
    backgroundColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default ConnectSensorScreen;

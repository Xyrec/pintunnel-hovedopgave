import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";

import AppDialogContainer from "../components/AppDialogContainer";
import AppDialogButton from "../components/AppDialogButton";

// TODO: Add PinTunnel handshake and connection (Need help with hardware code, etc.)

function StartScreen({ navigation }) {
  return (
    <ImageBackground style={styles.background} source={require("../assets/polygons.jpg")} blurRadius={3} >
      <Text style={styles.splashTitle}>PinTunnel</Text>
      <AppDialogContainer>
        <Text style={styles.connectTitle}>Welcome to PinTunnel!</Text>
        <Text style={styles.connectText}>Establishing connection...</Text>
        <AppDialogButton onPress={() => navigation.push("AddPinTunnel")}>
          Add new PinTunnel →
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
  splashTitle: {
    position: "absolute",
    top: "17%",
    color: "#eee",
    fontSize: 50,
    fontFamily: 'PTMono_400Regular'
  },
  connectTitle: {
    fontSize: 24,
    textAlign: "center",
    color: "#680f94",
    fontFamily: 'Rubik_700Bold'
  },
  connectText: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 20,
    fontFamily: 'Rubik_400Regular'
  },
});

export default StartScreen;

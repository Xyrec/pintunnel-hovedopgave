import React from "react";
import { ImageBackground, View, StyleSheet, Text } from "react-native";

import AppDialogContainer from "../components/AppDialogContainer";
import AppDialogButton from "../components/AppDialogButton";
import ListWiFiContainer from "../components/ListWiFiContainer";

// Needs to only let the user connect if a PinTunnel is selected (needs handshake and connection with PinTunnel - need to consult PinTunnel devs!)

function AddPinTunnelScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/polygons.jpg")}
      blurRadius={3}
    >
      <Text style={styles.splashTitle}>PinTunnel</Text>
      <AppDialogContainer>
        <Text style={styles.connectTitle}>Please select your PinTunnel!</Text>
        <View style={styles.connectList}>
          <ListWiFiContainer />
        </View>
        <AppDialogButton onPress={() => navigation.navigate("MainMenuScreen")}>
          Connect →
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
    top: "12%",
    color: "#eee",
    fontSize: 50,
    fontFamily: 'PTMono_400Regular'
  },
  connectTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#680f94",
    fontFamily: 'Rubik_700Bold'
  },
  connectList: {
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
  connectText: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default AddPinTunnelScreen;

import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListAvailableSensorContainer from "../components/ListAvailableSensorContainer";

// TODO: Implement better/different data about sensors (I'm not an expert! Will need to talk to PinTunnel devs.)
// Implement a search function
// Implement a help button, if the user doesn't know what module they have (Will need to ask how this would work in practice)

function AddSensorScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.mainMenuContainer}
      source={require("../assets/polygons.jpg")}
      blurRadius={3}
    >
      <StatusBar animated={true} backgroundColor={"#680f94"} />
      <View style={styles.topBarContainer}>
        <Text style={styles.topBarText}>Add Sensor</Text>
        <View style={styles.topBarButtonsContainer}>
          <TouchableOpacity style={styles.topBarButton}>
            <MaterialCommunityIcons name="magnify" color="#eee" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBarButton}>
            <MaterialCommunityIcons name="help-circle-outline" color="#eee" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBarButton}>
            <MaterialCommunityIcons name="dots-vertical" color="#eee" size={32} />
          </TouchableOpacity>
        </View>
      </View>
      <ListAvailableSensorContainer navigation={navigation} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainMenuContainer: {
    flex: 1,
  },
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 64,
    backgroundColor: "#680f94",
  },
  topBarText: {
    fontSize: 32,
    color: "#eee",
    marginLeft: 20,
    fontFamily: 'PTMono_400Regular'
  },
  topBarButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 8,
  },
  topBarButton: {
    width: 32,
    height: 32,
    marginLeft: 12,
  }
});

export default AddSensorScreen;

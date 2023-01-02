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

import ListSensorContainer from "../components/ListSensorContainer";

// TODO: Needs actual data from selected PinTunnel and its corresponding firebase (needs hardware code, etc.)
// TODO: Let users search and remove connected sensors as well as remove data from firebase.
// TODO: Add settings to three dots? (If needed? Will need to talk to PinTunnel devs)
// TODO: Needs to update sensor data as it comes in - needs connection to PinTunnel and updating UI elements with React states.

function MainMenuScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.mainMenuContainer}
      source={require("../assets/polygons.jpg")}
      blurRadius={3}
    >
      <StatusBar animated={true} backgroundColor={"#680f94"} />
      <View style={styles.topBarContainer}>
        <Text style={styles.topBarText}>PinTunnel</Text>
        <View style={styles.topBarButtonsContainer}>
          <TouchableOpacity style={styles.topBarButton}>
            <MaterialCommunityIcons name="magnify" color="#eee" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBarButton}>
            <MaterialCommunityIcons name="delete" color="#eee" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBarButton}>
            <MaterialCommunityIcons name="dots-vertical" color="#eee" size={32} />
          </TouchableOpacity>
        </View>
      </View>
      <ListSensorContainer navigation={navigation} />
      <TouchableOpacity style={styles.addNewButton}>
        <MaterialCommunityIcons name="plus" color="#eee" size={75} onPress={() => navigation.navigate("AddSensorScreen")} />
      </TouchableOpacity>
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
  },
  addNewButton: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: "#16e07c",
    position: "absolute",
    top: "86%",
    alignSelf: "center",
  },
});

export default MainMenuScreen;

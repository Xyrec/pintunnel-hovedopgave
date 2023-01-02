import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

function ListSensor({
  title,
  sensor,
  status,
  readValue,
  readValueUnit,
  readValueCondition,
  onPress,
}) {
  return (
    <TouchableHighlight underlayColor={"none"} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>{title}</Text>
          <Text style={styles.infoSensor}>{sensor}</Text>
          <Text
            style={
              status === "Online"
                ? styles.infoStatusOnline
                : styles.infoStatusOffline
            }
          >
            {status}
          </Text>
        </View>
        <View style={styles.value}>
          <Text
            style={
              status === "Online" && readValueCondition === "Good"
                ? styles.valueTextGood
                : styles.valueTextBad
            }
          >
            {readValue}
            {readValueUnit}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "white",
    padding: "2%",
    margin: "2%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  info: {
    marginLeft: 10,
  },
  infoTitle: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 18,
  },
  infoSensor: {
    fontFamily: 'Rubik_300Light',
  },
  infoStatusOnline: {
    marginTop: 5,
    fontFamily: 'Rubik_300Light',
    color: "#07944e",
  },
  infoStatusOffline: {
    marginTop: 5,
    fontFamily: 'Rubik_300Light',
    color: "#e0990d",
  },
  value: {
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  valueTextGood: {
    fontSize: 32,
    color: "#07944e",
    fontFamily: 'Rubik_400Regular'
  },
  valueTextBad: {
    fontSize: 32,
    color: "#e0990d",
    fontFamily: 'Rubik_400Regular',
  },
});

export default ListSensor;

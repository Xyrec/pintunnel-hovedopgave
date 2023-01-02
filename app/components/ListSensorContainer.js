import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListSensor from "../components/ListSensor";

const sampleData = [
  {
    id: 1,
    title: "Fugtighed i blomsterbed",
    sensor: "Fugtighedssensor",
    status: "Online",
    readValue: "65",
    readValueUnit: "%",
    readValueCondition: "Good",
  },
  {
    id: 2,
    title: "Temperatur nær blomsterbed",
    sensor: "Temperatursensor",
    status: "Online",
    readValue: "18",
    readValueUnit: "C",
    readValueCondition: "Bad",
  },
  {
    id: 3,
    title: "Lysstyrke i drivhus",
    sensor: "Lysstyrkesensor",
    status: "Offline",
    readValue: "N/A",
    readValueUnit: "",
    readValueCondition: "Bad",
  },
];

function ListSensorContainer({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={sampleData}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ListSensor
            title={item.title}
            sensor={item.sensor}
            status={item.status}
            readValue={item.readValue}
            readValueUnit={item.readValueUnit}
            readValueCondition={item.readValueCondition}
            onPress={() => {
              navigation.navigate("ViewSensorScreen", { item });
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "2%",
  },
});

export default ListSensorContainer;

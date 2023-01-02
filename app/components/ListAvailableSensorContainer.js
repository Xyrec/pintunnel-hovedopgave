import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListAvailableSensor from "../components/ListAvailableSensor";

const sampleData = [
  {
    id: 1,
    title: "MQ135",
    sensortype: "Air quality sensor",
    datatype: "PPM",
    power: "5V",
  },
  {
    id: 2,
    title: "MQ2",
    sensortype: "Gas sensor",
    datatype: "PPM",
    power: "5V",
  },
  {
    id: 3,
    title: "DHT11",
    sensortype: "Temperature & humidity",
    datatype: "C, RH",
    power: "3.3 - 5.5V",
  },
  {
    id: 4,
    title: "KY-018",
    sensortype: "Photoresistor",
    datatype: "kΩ",
    power: "3.3 - 5V",
  },
];

function ListAvailableSensorContainer({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={sampleData}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ListAvailableSensor
            title={item.title}
            sensortype={item.sensortype}
            datatype={item.datatype}
            power={item.power}
            onPress={() => navigation.navigate("ConnectSensorScreen")}
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

export default ListAvailableSensorContainer;

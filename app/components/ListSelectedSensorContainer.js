import React from "react";
import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

import ListSelectedSensor from "../components/ListSelectedSensor";
import ConditionDialogContainer from "./ConditionDialogContainer";

// TODO: Add sensor data and user-set conditions from firebase
// TODO: Let user set conditions and save to cloud

const conditionData = [
  {
    id: 1,
    condition: "If % is below 50",
  },
  {
    id: 2,
    condition: "If % is above 70",
  },
];

const MyLineChart = () => {
  return (
    <>
      <LineChart
        data={{
          labels: ["5 hrs", "4 hrs", "3 hrs", "2 hrs", "1 hr", "Now"],
          datasets: [
            {
              data: [58, 60, 61, 61, 62, 65],
              strokeWidth: 1,
            },
            {
              data: [20], // min
              withDots: false,
            },
            {
              data: [90], // max
              withDots: false,
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={300}
        yAxisSuffix="%"
        chartConfig={{
          backgroundColor: "#eee",
          backgroundGradientFrom: "#eee",
          backgroundGradientTo: "#eee",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
        }}
        style={{
          borderRadius: 10,
          margin: 8,
        }}
      />
    </>
  );
};

function ListSelectedSensorContainer({ data }) {
  const sensorData = data.route.params.item;

  return (
    <View style={styles.container}>
      <ListSelectedSensor
        title={sensorData.title}
        sensor={sensorData.sensor}
        status={sensorData.status}
        readValue={sensorData.readValue}
        readValueUnit={sensorData.readValueUnit}
        readValueCondition={sensorData.readValueCondition}
        onPress={() => console.log("Sensor selected", sensorData)}
      />
      <MyLineChart />
      <ConditionDialogContainer>
        <Text style={styles.conditionTitle}>
          Current notification conditions:
        </Text>
        <FlatList
          data={conditionData}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <ConditionDialogContainer>
              <Text style={styles.conditionText}>{item.condition}, send notification</Text>
            </ConditionDialogContainer>
          )}
        />
      </ConditionDialogContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "2%",
  },
  conditionTitle: {
    fontSize: 18,
    fontFamily: 'Rubik_700Bold',
    color: "#680f94",
  },
  conditionText: {
    fontSize: 16,
    fontFamily: 'Rubik_300Light',
  }
});

export default ListSelectedSensorContainer;

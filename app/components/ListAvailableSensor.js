import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

function ListAvailableSensor({ title, sensortype, datatype, power, onPress }) {
    return (
        <TouchableHighlight
            underlayColor={"none"}
            onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>{title}</Text>
                    <Text style={styles.infoSensor}>Type: {sensortype}</Text>
                    <Text style={styles.infoSensorExtra}>Power: {power}</Text>
                </View>
                <View style={styles.value}>
                    <Text style={styles.dataType}>{datatype}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    infoSensorExtra: {
        marginTop: 5,
        fontFamily: 'Rubik_300Light',
    },
    value: {
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dataType: {
        fontSize: 32,
        color: "#07944e",
        fontFamily: 'Rubik_400Regular'
    }
})

export default ListAvailableSensor;
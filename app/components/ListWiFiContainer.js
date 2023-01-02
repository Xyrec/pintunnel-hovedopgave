import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListWiFi from './ListWiFi';

const sampleData = [
    {
        id: 1,
        ssid: "HomeBox",
    },
    {
        id: 2,
        ssid: "HUAWEI",
    },
    {
        id: 3,
        ssid: "PinTunnel #19DE66F",
    },
    {
        id: 4,
        ssid: "Xiaomi",
    },
    {
        id: 5,
        ssid: "Samsung",
    },
    {
        id: 6,
        ssid: "PinTunnel #8DE68FA",
    },
    {
        id: 7,
        ssid: "Internettet",
    },
    {
        id: 8,
        ssid: "TDC-841DEF",
    },
]

function ListWiFiContainer(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={sampleData}
                keyExtractor={data => data.id.toString()}
                renderItem={({ item }) =>
                    <ListWiFi
                        ssid={item.ssid}
                        onPress={() => console.log("Sensor selected", item)}
                    />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: "1%",
        height: 300,
    }
})

export default ListWiFiContainer;
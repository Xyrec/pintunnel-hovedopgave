import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

function ListWiFi({ ssid, onPress }) {
    return (
        <TouchableHighlight
            underlayColor={"none"}
            onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.infoSSID}>{ssid}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: "white",
        padding: "2%",
        paddingVertical: "4%",
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
    infoSSID: {
        fontSize: 18,
        fontFamily: 'Rubik_400Regular'
    }
})

export default ListWiFi;
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppDialogButton({ children, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        backgroundColor: "#07944e",
        paddingVertical: "3%",
        paddingHorizontal: "4%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    text: {
        color: "white",
        textShadowRadius: 6,
        textShadowColor: "black",
        fontSize: 16,
        fontFamily: 'Rubik_400Regular'
    }
})

export default AppDialogButton;
import React from 'react';
import { View, StyleSheet } from 'react-native'

function AppDialogContainer({ children }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        maxHeight: "50%",
        padding: "2%",
        backgroundColor: "#e2e2e2",
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
    content: {
        margin: "2%",
    },
})

export default AppDialogContainer;
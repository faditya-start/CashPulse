import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AddTransactionButton({onPress}: {onPress: ()=> void}) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text} >+ Tambah</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#3b82f6", // blue-500
        padding: 16,
        borderRadius: 999,
        position: "absolute",
        bottom: 24,
        right: 24,
        elevation: 4, // for Android shadow
        shadowColor: "#000", // for iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    }
})
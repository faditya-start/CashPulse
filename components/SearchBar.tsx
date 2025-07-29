import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
    value: string;
    onChange: (text: string) => void;
}

export default function SearchBar({value, onChange}: Props){
    return (
        <View style={styles.container}>
        <Feather name="search" size={18} color="#9ca3af" />
        <TextInput
            style={styles.input}
            placeholder="Cari transaksi..."
            value={value}
            onChangeText={onChange}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#f3f4f6",
        borderRadius: 12,
        padding: 10,
        alignItems: "center",
        marginBottom: 12,
    },
    input: {
         marginLeft: 8,
        fontSize: 14,
        flex: 1,
    },
});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BalanceCard({balance}:{balance: number}) {
    return(
        <View style={styles.card}>
            <Text style={styles.label}>Total Saldo</Text>
            <Text style={styles.balance}>Rp {balance.toLocaleString('id-ID')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    label: {
        fontSize: 14,
        color: "#6b7280"
    },
    balance: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#111827",
        marginTop: 4,
    }
})
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const dummyData = [
    { id: 't1', title: 'Gaji', amount: 4000000, type: 'income', date: '2024-06-01' },
    { id: 't2', title: 'Makan Siang', amount: 50000, type: 'expense', date: '2024-06-02' },
    { id: 't3', title: 'Transport', amount: 20000, type: 'expense', date: '2024-06-02' },
    { id: 't4', title: 'Belanja', amount: 100000, type: 'expense', date: '2024-06-03' },
    { id: 't5', title: 'Bonus', amount: 500000, type: 'income', date: '2024-06-04' },
] as const;

export default function transactionDetail() {
    const {id} = useLocalSearchParams<{ id: string }>();

    const transaction = dummyData.find(t => t.id === id);

    if (!transaction) {
        return (
            <SafeAreaView style={styles.container} >
                <Text>Transaksi tidak ditemukan</Text>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{transaction.title}</Text>
            <Text style={styles.label}>Tanggal: <Text style={styles.value}>{transaction.date}</Text></Text>
            <Text style={styles.label}>Jumlah: <Text style={[styles.value, transaction.type === "income" ? styles.income : styles.expense]}>
                {transaction.type === "income" ? "+" : "-"} Rp {transaction.amount.toLocaleString("id-ID")}
            </Text></Text>
            <Text style={styles.label}>Tipe: <Text style={styles.value}>{transaction.type}</Text></Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 24,
        backgroundColor: "#f9fafb",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 12,
        color: "#111827",
    },
    label: {
        fontSize: 16,
        marginVertical: 4,
        color: "#374151",
    },
    value: {
        fontWeight: "600",
    },
    income: {
        color: "#16a34a",
    },
    expense: {
        color: "#dc2626",
    },
}); 

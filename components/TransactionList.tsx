import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: "income" | "expense";
  date: string;
};

export default function TransactionList({ transactions }: { transactions: Transaction[] }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Transaksi Terbaru</Text>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
            <Text style={[
              styles.amount,
              item.type === "income" ? styles.income : styles.expense
            ]}>
              {item.type === "income" ? "+" : "-"} Rp {item.amount.toLocaleString('id-ID')}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Tidak ada transaksi</Text>}
      />
    </View>
  );
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
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151", // gray-700
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6", // gray-100
  },
  itemTitle: {
    color: "#1f2937", // gray-800
    fontSize: 16,
  },
  itemDate: {
    fontSize: 12,
    color: "#6b7280", // gray-500
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  income: {
    color: "#16a34a", // green-600
  },
  expense: {
    color: "#dc2626", // red-600
  },
  empty: {
    textAlign: "center",
    color: "#6b7280",
    marginTop: 8,
  },
});
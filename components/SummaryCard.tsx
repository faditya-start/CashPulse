import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  income: number;
  expense: number;
};

export default function SummaryCard({ income, expense }: Props) {
  return (
    <View style={styles.row}>
      <View style={[styles.card, styles.income]}>
        <Text style={styles.incomeLabel}>Pemasukan</Text>
        <Text style={styles.incomeValue}>Rp {income.toLocaleString('id-ID')}</Text>
      </View>
      <View style={[styles.card, styles.expense]}>
        <Text style={styles.expenseLabel}>Pengeluaran</Text>
        <Text style={styles.expenseValue}>Rp {expense.toLocaleString('id-ID')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
  },
  income: {
    backgroundColor: "#bbf7d0", // green-100
    marginRight: 8,
  },
  expense: {
    backgroundColor: "#fecaca", // red-100
    marginLeft: 8,
  },
  incomeLabel: {
    color: "#15803d", // green-700
    fontSize: 12,
  },
  incomeValue: {
    color: "#166534", // green-900
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
  expenseLabel: {
    color: "#b91c1c", // red-700
    fontSize: 12,
  },
  expenseValue: {
    color: "#7f1d1d", // red-900
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
});
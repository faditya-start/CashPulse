import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import BalanceCard from "@/components/BalanceCard";
import SummaryCard from "@/components/SummaryCard";
import ExpenseChart from "@/components/ExpenseChart";
import TransactionList from "@/components/TransactionList";
import AddTransactionButton from "@/components/AddTransactionButton";

export default function HomeScreen() {
  const [balance] = useState(2500000);
  const [income] = useState(4000000);
  const [expense] = useState(1500000);
  const [categories] = useState([
    {
      name: "Makan",
      amount: 500000,
      color: "#f87171",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Transport",
      amount: 300000,
      color: "#60a5fa",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Belanja",
      amount: 400000,
      color: "#fbbf24",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Lainnya",
      amount: 300000,
      color: "#34d399",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
  ]);

  const transactions = [
    { id: 't1', title: 'Gaji', amount: 4000000, type: 'income', date: '2024-06-01' },
    { id: 't2', title: 'Makan Siang', amount: 50000, type: 'expense', date: '2024-06-02' },
    { id: 't3', title: 'Transport', amount: 20000, type: 'expense', date: '2024-06-02' },
    { id: 't4', title: 'Belanja', amount: 100000, type: 'expense', date: '2024-06-03' },
    { id: 't5', title: 'Bonus', amount: 500000, type: 'income', date: '2024-06-04' },
  ] as const;

  const handleAddTransaction = () => {
    alert('Tambah Transaksi belum diimplementasikan.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <BalanceCard balance={balance} />
        <SummaryCard income={income} expense={expense} />
        <ExpenseChart data={categories} />
        <TransactionList transactions={transactions.slice(0, 5)} />
      </ScrollView>

      <AddTransactionButton onPress={handleAddTransaction} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 120,
  },
});

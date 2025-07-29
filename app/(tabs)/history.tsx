import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import TransactionList from "@/components/TransactionList";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";

const transactions = [
  { id: 't1', title: 'Gaji', amount: 4000000, type: 'income', date: '2024-06-01' },
  { id: 't2', title: 'Makan Siang', amount: 50000, type: 'expense', date: '2024-06-02' },
  { id: 't3', title: 'Transport', amount: 20000, type: 'expense', date: '2024-06-02' },
  { id: 't4', title: 'Belanja', amount: 100000, type: 'expense', date: '2024-06-03' },
  { id: 't5', title: 'Bonus', amount: 500000, type: 'income', date: '2024-06-04' },
] as const;

export default function HistoryScreen() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");

  const filteredTransactions = transactions.filter((tx) => {
    const matchSearch = tx.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "Semua" ? true : tx.type === filter.toLowerCase();
    return matchSearch && matchFilter;
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar activeFilter={filter} onChange={setFilter} />
        <TransactionList transactions={filteredTransactions} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
});

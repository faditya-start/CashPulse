import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  activeFilter: string;
  onChange: (filter: string) => void;
};

const filters = ["Semua", "Income", "Expense"];

export default function FilterBar({ activeFilter, onChange }: Props) {
  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <TouchableOpacity key={filter} onPress={() => onChange(filter)}>
          <Text style={[styles.filter, activeFilter === filter && styles.active]}>
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 12,
    justifyContent: "space-around",
  },
  filter: {
    fontSize: 14,
    padding: 8,
    color: "#6b7280",
    borderRadius: 8,
  },
  active: {
    backgroundColor: "#e5e7eb",
    color: "#111827",
    fontWeight: "bold",
  },
});

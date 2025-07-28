import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";

type Category = {
  name: string;
  amount: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
};

export default function ExpenseChart({ data }: { data: Category[] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengeluaran per Kategori</Text>
      <PieChart
        data={data}
        width={Dimensions.get("window").width - 32}
        height={220}
        chartConfig={{
          color: () => `#000`,
          labelColor: () => "#000",
        }}
        accessor={"amount"}
        backgroundColor={"transparent"}
        paddingLeft={"10"}
        center={[0, 0]}
        absolute
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111827", // gray-900
  },
});

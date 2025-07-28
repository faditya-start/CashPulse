import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={[styles.text, styles.active]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Transaksi</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Profil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  text: {
    color: "#6b7280", // gray-500
    fontSize: 16,
  },
  active: {
    color: "#3b82f6", // blue-500
    fontWeight: "bold",
  },
});

export default BottomNav;
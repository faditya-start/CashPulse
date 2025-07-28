import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={[styles.text, pathname === '/' && styles.active]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/(tabs)/history')}>
        <Text style={[styles.text, pathname === '/history' && styles.active]}>Riwayat</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[styles.text, pathname === '/profile' && styles.active]}>Profil</Text>
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
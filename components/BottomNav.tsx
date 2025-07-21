import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const BottomNav = () => {
  return (
    <View className="flex-row justify-between items-center px-6 py-3 bg-white border-t border-gray-200">
      <TouchableOpacity>
        <Text className="text-blue-500">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-gray-500">Transaksi</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-gray-500">Profil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav; 
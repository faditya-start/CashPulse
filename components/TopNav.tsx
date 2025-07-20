import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const TopNav: React.FC = () => {
  return (
    <View className="flex-row justify-between items-center px-6 py-4 bg-white">
      <Text className="text-lg font-bold">Halo, Daffa</Text>
      <TouchableOpacity>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          className="w-10 h-10 rounded-full border-2 border-blue-500"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopNav; 
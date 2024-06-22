import React from 'react';
import { View, TextInput } from 'react-native';

export default function SearchBox() {
  return (
    <View className="w-full p-2">
      <TextInput
        className="border rounded-lg p-2 bg-white"
        placeholder="Search..."
      />
    </View>
  );
}

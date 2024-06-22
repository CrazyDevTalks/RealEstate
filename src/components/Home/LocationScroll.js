import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';

const data = [
  { id: '1', title: 'Curitiba', image: 'https://picsum.photos/200' },
  { id: '2', title: 'Bal. Camboriú', image: 'https://picsum.photos/200' },
  { id: '3', title: 'Bal. Camboriú', image: 'https://picsum.photos/200' },
  { id: '4', title: 'Bal. Camboriú', image: 'https://picsum.photos/200' },
  // Add more locations here
];

export default function LocationScroll() {
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => (
        <View className="flex-row p-2 items-center m-2 bg-gray-100 rounded-full overflow-hidden shadow">
          <Image source={{ uri: item.image }} className="w-16 h-16 rounded-full mr-2" />
          <Text className="text-center text-sm">{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      className="bg-white"
    />
  );
}

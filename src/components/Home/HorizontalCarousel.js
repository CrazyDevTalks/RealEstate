import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, View, Image, Text } from 'react-native';

const data = [
  { id: '1', title: 'RS 6.500,00', subtitle: 'Condomínio: R$350,00', location: 'Ecoville', image: 'https://picsum.photos/200/300', bathrooms: 2, bedrooms: 3, isFavorite: false},
  { id: '2', title: 'RS 4.500,00', subtitle: 'Condomínio: R$250,00', location: 'Ecoville', image: 'https://picsum.photos/200/300', bathrooms: 3, bedrooms: 1, isFavorite: true },
  // Add more items here
];

export default function HorizontalCarousel() {
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => (
        <View className="m-2 w-64 h-64 bg-white rounded-lg overflow-hidden shadow relative">
          <Image source={{ uri: item.image }} className="w-full h-full" />
          <View className="p-2 absolute bottom-0 ">
            <Text className="text-lg font-bold text-white">{item.title}</Text>
            <Text className="text-sm text-white">{item.subtitle}</Text>
            <Text className="text-lg text-gray-500 text-white font-bold">{item.location}</Text>
            <View className="flex-row justify-between w-full items-center">
                <View className="flex-row gap-4">
                    <View className="bathroom flex-row gap-1 justify-center items-center">
                        <MaterialCommunityIcons name="bathtub" size={24} color="white" />
                        <Text className="text-white">{item.bathrooms}</Text>
                    </View>
                    <View className="bedroom flex-row gap-1 justify-center items-center">
                        <MaterialCommunityIcons name="bed" size={24} color="white" />
                        <Text className="text-white">{item.bedrooms}</Text>
                    </View>
                </View>
                {
                    item.isFavorite ? (
                        <View className="flex-row justify-center items-center bg-pink-600 rounded-full p-1">
                            <MaterialCommunityIcons name="heart" size={16} color="white" />
                        </View>
                    ): (
                        <MaterialCommunityIcons name="heart-outline" size={24} color="white" />
                    )
                }
                
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
}

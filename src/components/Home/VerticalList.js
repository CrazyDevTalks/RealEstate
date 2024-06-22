import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, View, Image, Text } from 'react-native';

const data = [
    { id: '1', title: 'R$ 6.500,00', subtitle: 'R$350,00 / Condomínio', location: 'Ecoville Condominio Fechado', image: 'https://picsum.photos/200', bathroooms: 2, bedrooms: 3, isFavorite: false },
    { id: '2', title: 'R$ 4.500,00', subtitle: 'R$350,00 / Condomínio', location: 'Ecoville Condominio Fechado', image: 'https://picsum.photos/200', bathroooms: 4, bedrooms: 2, isFavorite: true },
    // Add more items here
];

export default function VerticalList() {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View className="bg-gray-100 flex-row p-2 rounded-2xl w-full my-4">
                    <Image source={{ uri: item.image }} className="w-32 h-40 rounded-3xl" />
                    <View className="p-2 flex-1">
                        <Text className="text-lg font-gray-600 font-bold">{item.title}</Text>
                        <Text className="text-sm text-gray-500">{item.location}</Text>
                        <Text className="text-sm">{item.subtitle}</Text>
                        <View className="flex-row justify-between items-center">
                            <View className="flex-row gap-2">
                                <View className="flex-row gap-1">
                                    <MaterialCommunityIcons name="bathtub-outline" size={24} color="grey" />
                                    <Text>{item.bathroooms}</Text>
                                </View>
                                <View className="flex-row gap-1">
                                    <MaterialCommunityIcons name="bed-outline" size={24} color="grey" />
                                    <Text>{item.bedrooms}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {
                        item.isFavorite ? (
                            <View className="flex-row justify-center items-center bg-pink-600 rounded-full p-1 h-6">
                                <MaterialCommunityIcons name="heart" size={16} color="white" />
                            </View>
                        ) : (
                            <View className="flex-row justify-center items-center bg-white rounded-full p-1 h-6">
                                <MaterialCommunityIcons name="heart-outline" size={16} color="black" />
                            </View>
                        )

                    }
                </View>
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
        />
    );
}

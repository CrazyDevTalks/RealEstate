import {ScrollView, Text, View } from "react-native";
import SearchBox from "../components/Home/SearchBox";
import HorizontalCarousel from "../components/Home/HorizontalCarousel";
import LocationScroll from "../components/Home/LocationScroll";
import VerticalList from "../components/Home/VerticalList";

export default function HomeScreen() {
    return (
        <ScrollView className="flex-1 py-4 bg-blue-500">
            <SearchBox />
            <View className="flex-col bg-white rounded-tr-2xl rounded-tl-2xl px-4">
                <Text className="text-xl font-bold my-4 text-gray-600">Propriedades em destaque</Text>
                <HorizontalCarousel />
                <View className="flex-row justify-between items-center my-4">
                    <Text className="text-xl font-bold text-gray-600">Principais locais</Text>
                    <Text className="text-blue-500">Explorar</Text>
                </View>
                <LocationScroll />
                <Text className="text-xl font-bold my-4 text-gray-600">Explorar propriedades próximas</Text>
                <VerticalList />
            </View>
        </ScrollView>
    );
}
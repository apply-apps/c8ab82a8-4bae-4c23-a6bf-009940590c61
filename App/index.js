// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const cars = [
    { id: '1', image: 'https://picsum.photos/400/200', title: 'Car 1' },
    { id: '2', image: 'https://picsum.photos/400/200', title: 'Car 2' },
    { id: '3', image: 'https://picsum.photos/400/200', title: 'Car 3' },
    { id: '4', image: 'https://picsum.photos/400/200', title: 'Car 4' },
    { id: '5', image: 'https://picsum.photos/400/200', title: 'Car 5' },
];

const CarCards = () => {
    const renderItem = ({ item }) => (
        <View style={carStyles.cardContainer}>
            <Image source={{ uri: item.image }} style={carStyles.image} />
            <View style={carStyles.textOverlay}>
                <Text style={carStyles.cardTitle}>{item.title}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={cars}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={carStyles.list}
        />
    );
};

const carStyles = StyleSheet.create({
    list: {
        paddingVertical: 20,
    },
    cardContainer: {
        width: width * 0.8,
        height: width * 0.5,
        marginHorizontal: 10,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textOverlay: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        padding: 10,
    },
    cardTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default function App() {
    return (
        <SafeAreaView style={appStyles.container}>
            <ScrollView contentContainerStyle={appStyles.scrollContainer}>
                <Text style={appStyles.title}>My Car Community</Text>
                <Text style={appStyles.subtitle}>Explore featured garages</Text>
                <CarCards />
            </ScrollView>
        </SafeAreaView>
    );
}

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContainer: {
        padding: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
});
// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>My Car Community Garage</Text>
                <Text style={styles.subtitle}>Share and showcase your garage</Text>
                <Garage />
            </ScrollView>
        </SafeAreaView>
    );
};

const Garage = () => {
    const [carImages, setCarImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const pickImage = async () => {
        // Request permission to access the media library
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        setIsLoading(true);

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!pickerResult.cancelled) {
            setCarImages([...carImages, pickerResult.uri]);
        }

        setIsLoading(false);
    };

    const renderItem = ({ item }) => (
        <View style={garageStyles.imageContainer}>
            <Image source={{ uri: item }} style={garageStyles.image} />
        </View>
    );

    return (
        <View style={garageStyles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <View style={garageStyles.buttonContainer}>
                    <Button title="Upload Car Image" onPress={pickImage} />
                </View>
            )}
            <FlatList
                data={carImages}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={garageStyles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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

const garageStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    buttonContainer: {
        marginBottom: 20,
    },
    list: {
        alignItems: 'center',
        width: '100%',
    },
    imageContainer: {
        margin: 10,
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 10,
    },
});

export default App;
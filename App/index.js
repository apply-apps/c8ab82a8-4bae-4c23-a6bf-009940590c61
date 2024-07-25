// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, ImageBackground, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ArticleDetail = () => {
    const featuredImage = 'https://picsum.photos/800/400';
    const articleText = `This is an example of a detailed article. 
    The purpose of this text is to provide you with a creative description, as if it was dynamically loaded content. 
    Similar to what you'd see for an artist's profile on Spotify, this article presents a captivating visual 
    experience with a featured image at the top and textual content flowing below it. 
    You can expand the content as needed.`;

    return (
        <View>
            <ImageBackground source={{ uri: featuredImage }} style={styles.featuredImage}>
                <View style={styles.textOverlay}>
                    <Text style={styles.title}>Article Title</Text>
                    <Text style={styles.subtitle}>Subtitle or byline goes here</Text>
                </View>
            </ImageBackground>
            <View style={styles.articleContainer}>
                <Text style={styles.articleText}>{articleText}</Text>
            </View>
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
    featuredImage: {
        width: width,
        height: width * 0.5,
        justifyContent: 'flex-end',
    },
    textOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    articleContainer: {
        padding: 20,
    },
    articleText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333333',
    },
});

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ArticleDetail />
            </ScrollView>
        </SafeAreaView>
    );
}
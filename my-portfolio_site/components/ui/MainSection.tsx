import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function MainSection() {
    return (
        <ImageBackground
            source={{ uri: 'my-portfolio_site/assets/images/PI.jpg' }}
            style={styles.hero}
        >
            <Text style={styles.title}>Hi, I'm Som Takalkar</Text>
            <Text style={styles.subtitle}>A Cybersecurity Enthusiast and Final-Year PG Student</Text>
            <TouchableOpacity style={styles.ctaButton}>
                <Text style={styles.ctaText}>View My Work</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    hero: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        padding: 20,
    },
    title: {
        color: '#cc1a1a',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        color: '#f51313',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    ctaButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    ctaText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

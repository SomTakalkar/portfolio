import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import React Navigation hook

export default function Header() {
    const navigation = useNavigation(); // Hook to access navigation

    return (
        <View style={styles.header}>
            <Text style={styles.logo}>My Portfolio</Text>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.navItem}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Text style={styles.navItem}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
                    <Text style={styles.navItem}>Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Skills')}>
                    <Text style={styles.navItem}>Skills</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                    <Text style={styles.navItem}>Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#343a40',
    },
    logo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    nav: {
        flexDirection: 'row',
    },
    navItem: {
        color: '#fff',
        marginHorizontal: 10,
        fontSize: 16,
    },
});

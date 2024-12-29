import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/ui/Header';
import MainSection from '../../components/ui/MainSection';


export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <MainSection />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
});

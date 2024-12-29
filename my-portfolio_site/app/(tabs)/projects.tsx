import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';

const projects = [
    {
        name: 'Instagram Clone',
        description: 'Showcasing skills in React.js, Vite.js, Firebase, and Chakra UI.',
        techStack: 'React.js, Vite.js, Firebase, Chakra UI',
        githubLink: 'https://github.com/SomTakalkar/instagram_clone.git',
    },
    {
        name: 'Calculator',
        description: 'Demonstrating skills in React.js.',
        techStack: 'React.js',
        githubLink: 'https://github.com/SomTakalkar/calculator-app.git',
    },
    {
        name: 'Tic Tac Toe with AI',
        description: 'Game with AI integration using Minimax algorithm, React, Node.js, and Socket.IO.',
        techStack: 'React, Node.js, Socket.IO',
        githubLink: 'https://github.com/SomTakalkar/tic-tac-toe-ai.git',
    },
    {
        name: 'To-Do App',
        description: 'Showcasing skills in JavaScript, CSS, and HTML.',
        techStack: 'JavaScript, CSS, HTML',
        githubLink: 'https://github.com/SomTakalkar/To-Do-List.git',
    },
];

export default function Projects() {
    const openLink = (url: string) => {
        Linking.openURL(url);
    };

    const renderProject = ({ item }: { item: typeof projects[0] }) => (
        <View style={styles.card}>
            <Text style={styles.projectName}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.techStack}>Tech Stack: {item.techStack}</Text>
            <TouchableOpacity onPress={() => openLink(item.githubLink)} style={styles.linkButton}>
                <Text style={styles.linkText}>View on GitHub</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Projects</Text>
            <FlatList
                data={projects}
                keyExtractor={(item) => item.name}
                renderItem={renderProject}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    list: {
        paddingBottom: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    projectName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#6c757d',
        marginBottom: 8,
    },
    techStack: {
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 8,
    },
    linkButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    linkText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

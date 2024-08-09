import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function Runcreen() {
    const [distance, setDistance] = useState(0.25);

    const increaseDistance = () => {
        setDistance((prev) => parseFloat((prev + 0.25).toFixed(2)));
    };

    const decreaseDistance = () => {
        setDistance((prev) => (prev > 0.25 ? parseFloat((prev - 0.25).toFixed(2)) : 0.25));
    };

    const startExercise = () => {
        console.log('Início do exercício');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exercícios e Atividade Física</Text>
            <Text style={styles.subtitle}>Cronometre seu tempo praticando e veja seu desempenho total.</Text>
            <View style={styles.imagePlaceholder}>

                <Image
                    source={require('../../assets/WhatsApp Image 2024-08-08 at 07.24.03.jpeg')}
                    style={styles.image}
                />

            </View>
            <Text style={styles.label}>Seu objetivo</Text>
            <View style={styles.controls}>
                <TouchableOpacity style={styles.button} onPress={decreaseDistance}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.distanceText}>{distance} km</Text>
                <TouchableOpacity style={styles.button} onPress={increaseDistance}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>Exercício</Text>
            <TouchableOpacity style={styles.startButton} onPress={startExercise}>
                <Text style={styles.startButtonText}>Iniciar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
        right: 40,
        ontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 50,
        right: 50,
        
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 25,
        marginHorizontal: 20,
    },
    buttonText: {
        fontSize: 24,
        color: '#333',
    },
    distanceText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    startButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        marginTop: 0,
        width: 120,
        height: 64,
    },
    startButtonText: {
        fontSize: 35,
        color: '#fff',
    },
    image: {
        width: 400,
        height: 310,
    },
});
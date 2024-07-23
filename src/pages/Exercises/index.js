import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, increaseDistance, decreaseDistance } from 'react-native';


export default function Exercises() {
  const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIcontando] = useState(false);

    useEffect(() => {
      let interval;

      if (isCounting) {
        interval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 3);
        }, 30000); // Alterei para 30000 ms (30 segundo)
      } else {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }, [isCounting]);

    return (
      <View>
        <Text>Tempo: {seconds} segundos</Text>
      </View>
    ); 
  };

  const distance = () => {
    const [distance, setDistance] = useState(0); // Inicializa a distância como 0 km
  
    const increaseDistance = () => {
      // Aumenta a distância em 200 metros (0.2 km)
      setDistance(prevDistance => prevDistance + 0.2);
    };
  
    const decreaseDistance = () => {
      // Diminui a distância em 200 metros (0.2 km), mas não abaixo de 0 km
      if (distance >= 0.2) {
        setDistance(prevDistance => prevDistance - 0.2);
      }
    };
  };
  
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}> Exercícios e Atividade Física </Text>
    <Text style={styles.subtitulo}>Cronometre seu tempo praticando e veja seu desemprenho total.
    </Text>
       
    <TouchableOpacity
    style={styles.botao}
    onPress={() => console.log('Iniciar exercício')}>
    <Text style={styles.buttonText}>Iniciar</Text>
    </TouchableOpacity>

    <View>
      <TouchableOpacity 
      style={styles.button1}
       onPress={() =>increaseDistance}>
        <Text style={styles.buttonText1}> + </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.button2}
      onPress={() =>decreaseDistance}>
        <Text style={styles.buttonText2}> - </Text>
      </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      backgroundColor: '#ffffff',
      justifyContent: 'space-between',
    },
    titulo: {
      fontWeight: 'bold',
      fontSize: 40,
      marginTop: 70,
      paddingHorizontal: 10,
      marginHorizontal: 20,
      marginBottom: 20,
      textAlign:   'left',
    },
    subtitulo: {
      fontSize: 16,
      paddingHorizontal: 10,
      marginHorizontal: 17,
      marginBottom: 20,
      marginTop: -70,
    },
    botao: {
      backgroundColor: '#7DCD9A',
      paddingVertical: 10,
      paddingHorizontal: 0,
      borderRadius: 15,
      height: 64,
      width: 150,
      alignItems: 'center',
      alignSelf: 'center', 
      margin: 40,
      marginTop: 300,
    },
    buttonText : {
        backgroundColor: '#7DCD9A',
        paddingVertical: 10,
        paddingHorizontal: 0,
        borderRadius: 15,
        height: 64,
        width: 150,
        alignItems: 'center',
        alignSelf: 'center', 
        margin: 40,
        marginTop: 300,
    },
    buttonText1:{
        margin: 40,
        marginTop: 300,

    },
    button2: {
        backgroundColor: '#7DCD9A',
        paddingVertical: 10,
        paddingHorizontal: 0,
        borderRadius: 15,
        height: 64,
        width: 150,
        alignItems: 'center',
        alignSelf: 'center', 
        margin: 30,
        marginTop: 300, 
    },
    buttonText2: {
        margin: 40,
        marginTop: 40,
    },
  });


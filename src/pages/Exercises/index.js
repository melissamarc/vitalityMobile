import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, toggleUnit, unit} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';


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

  const [distance, setDistance] = useState(0.00);

  const increaseDistance = () => {
    // Aumenta a distância em 200 metros (0.2 km)
    setDistance(prevDistance => prevDistance + 0.4)
  };

  const decreaseDistance = () => {
    // Diminui a distância em 200 metros (0.1 km), mas não abaixo de 0 km
    if (distance >=  0.4) {
      setDistance(prevDistance => prevDistance - 0.4);

      const UnitButton = () => {
        const [unit, setUnit] = useState('Km'); // Inicialmente, a unidade é "Km"
      
        const toggleUnit = () => {
          // Alterna entre "Km" e "Kcal"
          setUnit(unit === 'Km' ? 'Kcal' : 'Km');
        };
      }
    }
  };
  
  
  return (
  <View style={styles.container}>
  <Text style={styles.titulo}> Exercícios e Atividade Física </Text>
  <Text style={styles.subtitulo}>Cronometre seu tempo praticando e veja seu desemprenho total.
  </Text>
       
  <View style={styles.buttonprincipal}>  
  <TouchableOpacity
  style={styles.button}
  onPress={() => console.log('Iniciar exercício')}>
  <Text style={styles.buttonText}>Iniciar</Text>
  </TouchableOpacity> 
  </View>
  <View style={styles.kmcontainer}>
  <View style={styles.kmtext}>
  <Text>{distance.toFixed(2)} km</Text>
  </View>
  </View>

  <View style={styles.buttoncontainer}>
  <TouchableOpacity
  style={styles.button1}
  onPress={() => increaseDistance()}>
  <Text style={styles.buttonText1}> + </Text>
  </TouchableOpacity>

  <TouchableOpacity
  style={styles.button2}
  onPress={() => decreaseDistance()}>
  <Text style={styles.buttonText2}> - </Text>
  </TouchableOpacity>
  </View>

  <View style={styles.buttonsopcoes}>
      <TouchableOpacity onPress={toggleUnit} style={styles.buttonopcao}>
        <Text style={styles.buttontextopcao}>{unit}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleUnit} style={styles.buttonopcao2}>
        <Text style={styles.buttontextopcao2}>{unit}</Text>
      </TouchableOpacity> 
      </View>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexDirection: 'column',
    marginTop: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 42,
    marginTop: 70,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 35,
    left: -20,
  },
  subtitulo: {
    color: 'black',
    fontSize: 14,
    paddingHorizontal: 10,
    marginHorizontal: 17,
    marginTop: -50,
    left: -15,
  },
  buttonprincipal: {
    flexDirection: 'column',
    alignItems: 'center',
    top: 405,
  },
  button: {
    backgroundColor: '#7DCD9A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 64,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  buttoncontainer: {
    flexDirection: 'row',
    marginBottom: 100,
    bottom: 70,
    alignSelf: 'center',
    position: 'relative',
  },
  button1: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    height: 60,
    width: 'auto',
    left: -90,
    right: 20,
  },
  buttonText1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    left: 0,
  },
  button2: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 'auto',
    left: 90,
    height: 60,
    right: 20,
  },
  buttonText2: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    left: 0,
  },
   buttonsopcoes:{
    flexDirection: 'row',
    alignItems: 'center',
    top: 0,
   },
   buttonopcao: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    width: 85,
    left: 5,
    height: 64,
    right: 25,
    margin: 20,
  },
  buttontextopcao: {
    fontSize: 70,
    color: 'black',
    paddingHorizontal: 10,
    marginHorizontal: 17,
    marginBottom: 20,
    marginTop: 150,
    alignItems: 'center',
  },
  buttonopcao2: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    width: 85,
    left: 135,
    height: 64,
    right: 25,
    margin: 20,
  },
  buttontextopcao2: {
    fontSize: 70,
    color: 'black',
    paddingHorizontal: 10,
    marginHorizontal: 17,
    marginBottom: 20,
    marginTop: 150,
    alignItems: 'center',
  }
});




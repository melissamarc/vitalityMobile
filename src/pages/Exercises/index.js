import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  fixed,
  unit,
  Image,
  StyleSheet, 
  TouchableOpacity, 
  selectedActivity,
  setShowOptions, 
  showOptions, 
 } from 'react-native';


const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval;

    if (isCounting) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 30); // Incrementa 30 segundos
      }, 36000); // 30 segundos
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isCounting]);

  return (
    <View style={styles.timercontainer}>
    <Text style={styles.timetext}>
       {seconds.toFixed(1)} {unit}
    </Text>
  </View>
  );
};

export default function Exercises() {
  const [distance, setDistance] = useState(0.00);
  const [unit, setUnit] = useState('Km'); // Inicialmente, a unidade é "Km"
  const [selectedActivity, setSelectedActivity] = useState('');
  const [showOptions, setShowOptions] = useState(false); // Estado para mostrar/ocultar as opções

  // Função para aumentar a distância
  const increaseDistance = () => {
    setDistance(prevDistance => prevDistance + 0.2);
  };

  // Função para diminuir a distância
  const decreaseDistance = () => {
    if (distance >= 0.2) {
      setDistance(prevDistance => prevDistance - 0.2);
    }
  };

   // Função para alternar a unidade entre Km e Kcal
   const toggleUnit = () => {
    setUnit(unit === 'Km' ? 'Kcal' : 'Km');
  };

  // Função para selecionar uma atividade
  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
    setShowOptions(false); // Ocultar opções após a seleção
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercícios e Atividade Física</Text>
      <Text style={styles.subtitulo}>
        Cronometre seu tempo praticando e veja seu desempenho total.
      </Text>
      
      <View style={styles.containerinicial}>  
        <TouchableOpacity
          style={styles.buttoninicial}
          onPress={() => console.log('')}
        >
          <Text style={styles.buttonTextinicial}>Iniciar</Text>
        </TouchableOpacity> 
      </View>

      <Timer />

   <View style={styles.unitContainer}>
        <TouchableOpacity onPress={toggleUnit} style={styles.unitButton}>
          <Image source={require('../../assets/cronometro.png')} style={styles.iconImage} />
          <Text style={styles.unitText}>{unit}</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.distanceContainer}>
        <Text style={styles.distanceText}>
           {distance.toFixed(1)} {unit}
        </Text>
      </View>

      <View style={styles.controlContainer}>
        <TouchableOpacity style={styles.increaseButton} onPress={increaseDistance}>
          <Image source={require('../../assets/mais.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.decreaseButton} onPress={decreaseDistance}>
          <Image source={require('../../assets/sinal-de-menos.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>


      <View style={styles.containerexercicios}>
      <TouchableOpacity
        style={styles.activityButton}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={styles.activityButtonText}>
          {selectedActivity ? selectedActivity : 'Exercicios'}
        </Text>
      </TouchableOpacity>
      </View>

      
      {showOptions && (
        <View style={styles.optionsContainer}>
          {['Caminhada', 'Corrida', 'Musculação', 'Personalizado'].map(activity => (
            <TouchableOpacity
              key={activity}
              style={styles.optionButton}
              onPress={() => handleActivitySelect(activity)}
            >
              <Text style={styles.optionButtonText}>{activity}</Text>
            </TouchableOpacity>
            
          ))}
          
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 0,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    
  },
  titulo: {
    position: 'static',
    fontWeight: 'bold',
    fontSize: 42,
    marginTop: 70,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 35,
  },
  subtitulo: {
    position: 'static',
    color: 'black',
    fontSize: 14,
    paddingHorizontal: 10,
    marginHorizontal: 17,
    marginTop: -60,
  },
  Textinicial: {
    color: 'black',
    fontSize: 0,
    fontWeight: 'bold',
  },
  containerinicial: {
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 200,
  },
  buttoninicial: {
    backgroundColor: '#7DCD9A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    left: -55,
    height: 64,
    width: 155,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -262,
  },
  buttonTextinicial: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  timercontainer: {

  },
  timetext: {
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
   bottom: 80,
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    bottom: 100,
  },
  increaseButton: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginTop: -100,
    width: 70,
    height: 70,
    right: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decreaseButton: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginTop: -100,
    width: 70,
    height: 70,
    left: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  distanceContainer:{
    
  },
  distanceText:{
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
   bottom: 80,
  },

  unitContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -135,
    margin: 0,
  },
  unitButton: {
    flexDirection: 'row', // Coloca ícone e texto lado a lado
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    left: 82,
    width: 95,
    height: 64,
    justifyContent: 'center',
  },
  unitText: {
    fontSize: 20,
    color: 'black',
    marginLeft: 0, // Espaço entre ícone e texto
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  activityButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    bottom: 100,
    width: 260,
    height: 64,
    alignItems: 'center',
    alignSelf: 'center',
  },
  activityButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    flexDirection: 'column',
    
  },
  optionsContainer: {
    alignItems: 'center',
    flexDirection: 'colum',
    
  },
  optionButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    bottom: 100,
    width: 260,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
  },
  optionButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});





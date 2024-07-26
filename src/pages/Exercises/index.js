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
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval;

    if (isCounting) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 30); // Incrementa 30 segundos
      }, 30000); // 30 segundos
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isCounting]);

  return (
    <View style={styles.Textinicial}>
      <Text>Tempo: {seconds} segundos</Text>
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

      <View style={styles.controlecontainer}>
        <TouchableOpacity style={styles.buttonaumentar} onPress={increaseDistance}>
        <Image source={require('../../assets/mais.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttondiminuir} onPress={decreaseDistance}>
        <Image source={require('../../assets/sinal-de-menos.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerkm}>
        <TouchableOpacity onPress={toggleUnit} style={styles.buttonkm}>
          <Image source={require('../../assets/cronometro.png')} style={styles.iconImage} />
          <Text style={styles.buttontextopcao}>{unit}</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.containerexercicios}>
      <TouchableOpacity
        style={styles.activityButton}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={styles.activityButtonText}>
          {selectedActivity ? selectedActivity : 'Escolha a atividade'}
        </Text>
      </TouchableOpacity>
      </View>

      {/* Menu de opções */}
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
    left: -45,
    height: 64,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -253,
  },
  buttonTextinicial: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  controlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    bottom: 100,
  },
  buttonaumentar: {
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
  buttondiminuir: {
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
  containerkm:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -65,
    margin: 0,
  },
  buttonkm: {
    flexDirection: 'row', // Coloca ícone e texto lado a lado
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    left: 85,
    width: 95,
    height: 64,
    justifyContent: 'center',
  },
  buttontextopcao: {
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
    flexDirection: 'column',
    
  },
  optionsContainer: {
    alignItems: 'center',
    flexDirection: 'colum',
  },
  optionButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
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
    fontSize: 16,
    color: 'black',
  },
});





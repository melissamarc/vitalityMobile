import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const WaterTracker = () => {
  const [waterDrank, setWaterDrank] = useState(0);
  const [cupsState, setCupsState] = useState(Array(10).fill(false));

  const toggleCup = (index) => {
    const newCupsState = [...cupsState];
    newCupsState[index] = !newCupsState[index];

    if (newCupsState[index]) {
      setWaterDrank(waterDrank + 200); // Adiciona 200ml de água
    } else {
      setWaterDrank(waterDrank - 200); // Remove 200ml de água
    }

    setCupsState(newCupsState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}> 
         <View style={styles.textContainer}>
        <Text style={styles.text}>Água</Text>
        <Text style={styles.text}>{waterDrank} ml</Text>
      </View>

        <View style={styles.row}>
          {cupsState.map((filled, index) => (
            <TouchableOpacity key={index} onPress={() => toggleCup(index)} style={styles.iconContainer}>
              <MaterialIcons name="local-drink" size={50} color={filled ? '#72BBFF' : 'gray'} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // para Android
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconContainer: {
    margin: 5,
  },
 
    textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginEnd: 10
  },
});

export default WaterTracker;

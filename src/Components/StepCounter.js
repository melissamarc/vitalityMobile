import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Pedometer } from "expo-sensors";
import ProgressBar from "react-native-progress/Bar";

const StepCounter = () => {
  const [stepCount, setStepCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const goalSteps = 100; // Definindo a meta de passos

  useEffect(() => {
    const subscription = Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
      const newProgress = result.steps / goalSteps;
      setProgress(newProgress > 1 ? 1 : newProgress); // Limitando o máximo de 1 para ProgressBar
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Exercícios</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Passos: {stepCount}</Text>
          <Text style={styles.text}>Meta: {goalSteps}</Text>
        </View>

        <View style={styles.progressBar}>
          <ProgressBar
          progress={progress}
          width={340} // Largura suficiente para exibir a barra de progresso completa
          height={20} // Altura da barra de progresso
          color="#53C189" // Cor da linha de progresso
          backgroundColor="#d9d9d9" // Cor de fundo da barra de progresso
           />
        </View>

         <View style={styles.textContainer1}>
          <Text style={styles.text}>Caminhada: {stepCount}</Text>
          <Text style={styles.text}>Meta: {goalSteps}m</Text>
        </View>

        <View style={styles.progressBar}>
        <ProgressBar
          progress={progress}
          width={340} // Largura suficiente para exibir a barra de progresso completa
          height={20} // Altura da barra de progresso
          color="#53C189" // Cor da linha de progresso
          backgroundColor="#d9d9d9" // Cor de fundo da barra de progresso
        />
      </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  title: {
fontSize: 15,
fontWeight: 'bold',
marginBottom: 10,
marginTop: 1
  },

  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 2,
    marginEnd: 2,
  },
   textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
     marginTop: 5,
   },   

   textContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
   },

   progressBar: {
    width: '80%',
    height: 20, // Altura mínima para a barra de progresso
    marginBottom: 10
  },

  box: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // para Android
  },
});

export default StepCounter;

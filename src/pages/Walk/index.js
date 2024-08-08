import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native';

const WalkScreen = () => {
  const progress = 0.89; // 89%

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backText}>{'< voltar'}</Text>
      </View>
      
     

      <View style={styles.progressContainer}>
        <Text style={styles.title}>Corrida</Text>
        {Platform.OS === 'android' ? (
          <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={progress} color="#00FF00" />
        ) : (
          <ProgressViewIOS progress={progress} />
        )}
        <Text style={styles.progressText}>89% de 1,5 km</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>passos</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>1:20</Text>
          <Text style={styles.statLabel}>duração</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>bpm</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>1,2</Text>
          <Text style={styles.statLabel}>km</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>kcal</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>ritmo</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.finishButton]}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.pauseButton]}>
          <Text style={styles.buttonText}>Pausar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: '#000',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  progressText: {
    marginTop: 10,
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  stat: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  finishButton: {
    backgroundColor: '#00FF00',
  },
  pauseButton: {
    backgroundColor: '#FF0000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WalkScreen;

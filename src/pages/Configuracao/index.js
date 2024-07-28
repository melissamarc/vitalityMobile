import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profilePicture}>
          <View style={styles.cameraIcon} />
        </View>
        <View style={styles.buttonsContainer}>
          {['Conta', 'Dados Pessoais', 'Privacidade e Segurança', 'Notificações', 'Aparência', 'Ajuda e Suporte', 'Convide amigos'].map((label) => (
            <TouchableOpacity key={label} style={styles.button}>
              <Text>{label}</Text>
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
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#333',
  },
  menuIcon: {
    color: '#fff',
    fontSize: 24,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  profileSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cameraIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  buttonsContainer: {
    width: '80%',
  },
  button: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
 
});


export default App

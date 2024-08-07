import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,button } from 'react-native';
import Icon from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const DadosConta = () => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados da Conta</Text>
      <Text style={styles.subtitle}>
        Essas informações ficam visíveis somente a você. Você pode alterá-las quando quiser.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome de Usuário</Text>
        <TextInput style={styles.input} />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>País</Text>
        <TextInput style={styles.input} />
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar conta</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Apagar todos os dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Apagar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 42,
    marginTop: 35,
    right: 45,
    paddingHorizontal: 10,
    marginHorizontal: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  input: {
    borderWidth: 0,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#EBEAEA',
  },
  addButton: {
    backgroundColor: '#EBEAEA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: '#4CAF50',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#EBEAEA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  deleteButtonText: {
    color: '#f00',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#EBEAEA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  logoutButtonText: {
    color: '#000',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#4CAF50',
    marginTop: 'auto',
  },
  footerIcon: {
    fontSize: 24,
  },
});

export default DadosConta;

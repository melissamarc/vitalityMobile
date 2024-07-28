import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const DadosPessoaisScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dados Pessoais</Text>
      <Text style={styles.subtitle}>
        Essas informações ficam visíveis somente a você. Você pode alterá-las
        quando quiser.
      </Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Altura</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Peso</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Metas</Text>
      <TextInput style={styles.input} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default DadosPessoaisScreen;
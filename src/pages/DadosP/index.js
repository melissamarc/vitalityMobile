import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const DadosPessoaisScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.containerb}>
      <Text style={styles.title}>Dados Pessoais</Text>
      <Text style={styles.subtitle}>
        Essas informações ficam visíveis somente a você. Você pode alterá-las
        quando quiser.
      </Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Altura</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Peso</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Metas</Text>
        <TextInput style={styles.input} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerb: {
    display: 'flex',
    flex: 1, 
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 70,
    bottom: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 42,
    marginTop: 15,
    right: 45,
    paddingHorizontal: 10,
    marginHorizontal: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 12,
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
});

export default DadosPessoaisScreen;

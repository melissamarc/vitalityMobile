import React, { useState } from 'react';
import {useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { 
StyleSheet,
Text, 
View,
Image,
Button, 
TextInput,
TouchableOpacity} from 'react-native';


export default function SignUp() {
const navigation = useNavigation();


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }}

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Cadastro</Text>
    <TextInput
      style={styles.input}
      placeholder="Nome"
      value={name}
      onChangeText={setName}
    />
    <TextInput
      style={styles.input}
      placeholder="Telefone"
      value={phone}
      onChangeText={setPhone}
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      autoCapitalize="none"
    />
    <TextInput
      style={styles.input}
      placeholder="Senha"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
    />
    <TextInput
      style={styles.input}
      placeholder="Confirmar Senha"
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      secureTextEntry
    />
   



     <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.textbutton}> Avançar </Text>
      </TouchableOpacity>

       <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textbutton}> Já tenho conta </Text>
      </TouchableOpacity>



  </View>
);
};

const styles = StyleSheet.create({

container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
},
title: {
  fontSize: 24,
  marginBottom: 20,
},
input: {
  width: '100%',
  height: 40,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  paddingHorizontal: 10,
  marginBottom: 10,
},
})

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    if (username === '' || email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }
    const data = {
      username,
      email,
      password,
    };
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Bem-Vindo(a)</Text>
      </View>

      <TextInput
        style={styles.textInput}
        onChangeText={setUsername}
        value={username}
        placeholder="Seu username"
      />

      <TextInput
        style={styles.textInput}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email"
      />

      <TextInput
        style={styles.textInput}
        onChangeText={setPassword}
        value={password}
        placeholder="Sua senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    fontSize: 19,
    padding: 7,
    marginBottom: 15,
    width: '80%',
  },
  button: {
    padding: 12,
    backgroundColor: '#7DCD9A',
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000000',
  },
});





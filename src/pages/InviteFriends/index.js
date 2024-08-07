import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Share } from "react-native";
import QRCode from "react-native-qrcode-svg";

const InviteFriendsScreen = () => {
  const [text, setText] = React.useState('VitalityMobile');

  const handleShare = async () => {
    try {
      await Share.share({
        message: text,
        title: 'Compartilhe este QR Code',
      });
    } catch (error) {
      console.error('Erro ao compartilhar: ', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convide Amigos</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} onPress={handleShare}>
        <Text style={styles.buttonText}>Compartilhar QR Code</Text>
      </TouchableOpacity>
      <View style={styles.qrContainer}>
        <QRCode
          value={text}
          size={200}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 300,
    marginTop: -100,
    textAlign: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginVertical: -400,
    marginTop: 50,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  qrContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InviteFriendsScreen;

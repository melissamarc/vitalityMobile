import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-paper';

const ConfiguracaoScreen = () => {
  const navigation = useNavigation();

  const routes = [
    { label: 'Conta', route: 'Account' },
    { label: 'Dados Pessoais', route: 'PersonalData' },
    { label: 'Privacidade e Segurança', route: 'PrivacyAndSecurity' },
    { label: 'Notificações', route: 'Notifications' },
    { label: 'Aparência', route: 'Appearance' },
    { label: 'Ajuda e Suporte', route: 'HelpAndSupport' },
    { label: 'Convide amigos', route: 'InviteFriends' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profilePicture}>
          <Icon name="person" size={50} />
          <View style={styles.cameraIcon}>
            <Icon name="photo-camera" size={15} color="#fff" />
          </View>
        </View>
      </View>
      
      <View style={styles.buttonsContainer}>
        {routes.map(({ label, route }) => (
          <TouchableOpacity 
            key={label} 
            style={styles.button}
            onPress={() => navigation.navigate(route)}
          >
            <Text>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    marginTop: 150,
    bottom: 100,
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
    width: 150,
    height: 150,
    borderRadius: 100,
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
    flexDirection: 'column',
    marginTop: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#4CAF50',
  },
  footerIcon: {
    fontSize: 24,
  },
});

export default ConfiguracaoScreen

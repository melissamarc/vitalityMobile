import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Switch, Appearance } from 'react-native';
import { RadioButton } from 'react-native-paper';

const AppearanceScreen = () => {
  const [checked, setChecked] = useState('light');
  const [switchStates, setSwitchStates] = useState({
    light: false,
    dark: false,
    device: false,
  });
  const [themeColor, setThemeColor] = useState('white');

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (checked === 'device') {
      setThemeColor(colorScheme === 'dark' ? 'black' : 'white');
    } else {
      setThemeColor(checked === 'dark' ? 'black' : 'white');
    }
  }, [checked]);

  const toggleSwitch = (theme) => {
    const newSwitchStates = {
      light: false,
      dark: false,
      device: false,
    };
    newSwitchStates[theme] = !switchStates[theme];
    setSwitchStates(newSwitchStates);
    setChecked(theme);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColor }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, { color: themeColor === 'black' ? 'white' : 'black' }]}>Aparência</Text>
        <Text style={[styles.subheader, { color: themeColor === 'black' ? 'lightgray' : 'gray' }]}>
          Gerencie a cor e o plano de fundo do aplicativo. Essas alterações afetam todas as contas do VitalyVision neste dispositivo.
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={[styles.title, { color: themeColor === 'black' ? 'white' : 'black' }]}>Tema</Text>
        <View style={styles.radioContainer}>
          <View style={styles.radioItem}>
            <RadioButton
              value="light"
              status={checked === 'light' ? 'checked' : 'unchecked'}
              onPress={() => toggleSwitch('light')}
            />
            <Text style={[styles.radioLabel, { color: themeColor === 'black' ? 'white' : 'black' }]}>Claro</Text>
            <Switch
              onValueChange={() => toggleSwitch('light')}
              value={switchStates.light}
              style={styles.switch}
            />
          </View>
          <View style={styles.radioItem}>
            <RadioButton
              value="dark"
              status={checked === 'dark' ? 'checked' : 'unchecked'}
              onPress={() => toggleSwitch('dark')}
            />
            <Text style={[styles.radioLabel, { color: themeColor === 'black' ? 'white' : 'black' }]}>Escuro</Text>
            <Switch
              onValueChange={() => toggleSwitch('dark')}
              value={switchStates.dark}
              style={styles.switch}
            />
          </View>
          <View style={styles.radioItem}>
            <RadioButton
              value="device"
              status={checked === 'device' ? 'checked' : 'unchecked'}
              onPress={() => toggleSwitch('device')}
            />
            <Text style={[styles.radioLabel, { color: themeColor === 'black' ? 'white' : 'black' }]}>Configurações do dispositivo</Text>
            <Switch
              onValueChange={() => toggleSwitch('device')}
              value={switchStates.device}
              style={styles.switch}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  headerContainer: {
    marginBottom: 50,
    marginTop: 50,
    left: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 12,
    color: 'gray',
  },
  bodyContainer: {
    flex: 1,
  },
  title: {
    fontSize: 19,
    marginBottom: 10,
    fontWeight: 'bold',
    left: 35,
  },
  radioContainer: {
    marginLeft: 10,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 20,
    right: 10,
  },
  radioLabel: {
    fontSize: 16,
    flex: 5,
  },
  switch: {
    marginLeft: 10,
    width: 50,
  
  },
  

});

export default AppearanceScreen;



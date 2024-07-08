import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import WaterTracker from '../../Components/WaterTracker';
import StepCounter from '../../Components/StepCounter';

const Content = () => (
  <View style={styles.container}>
    <Text style={styles.head}> Vitality Vision </Text>
    <StepCounter/>
    <WaterTracker/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  
  head: {
    fontSize: 25,
    color: '#0EAB6E',
    marginTop: 50,
    fontWeight: 'bold'
  }
});

export default Content;

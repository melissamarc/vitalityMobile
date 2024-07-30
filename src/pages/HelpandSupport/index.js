import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HelpandSupportScrean = () => {
  const articles = [
    'Dúvidas sobre cálculos',
    'Dúvidas sobre cálculos',
    'Dúvidas sobre cálculos',
    'Dúvidas sobre cálculos',
    'Dúvidas sobre cálculos',
  ];

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.icoImage} />
      <Text style={styles.title}>Como podemos ajudar?</Text>
      <View style={styles.searchBar}></View>
      <Text style={styles.sectionTitle}>Artigos Frequentes</Text>
      {articles.map((article, index) => (
        <TouchableOpacity key={index} style={styles.articleContainer}>
          <Text style={styles.articleTitle}>{article}</Text>
          <Text style={styles.articleSubtitle}>
            Veja como é feito o cálculo da taxa de metabolismo basal e como utilizamos com você.
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding: 16,
   alignItems: 'center',
   backgroundColor: '#fff',
   
 },
   icoImage: {
    width: 60,
    height: 60,
    marginTop: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 0,
  },
  searchBar: {
    height: 30,
    backgroundColor: '#ccc',
    borderRadius: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleContainer: {
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 12,
    width: 360,
    height: 80
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  articleSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default HelpandSupportScrean
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.description}>{recipe.text}</Text>

      <Text style={styles.sectionTitle}>Ingredientes</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>
          {ingredient}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Informação Nutricional</Text>
      <View style={styles.nutritionTable}>
        <Text style={styles.nutritionText}>Calorias: {recipe.nutrition.calories}</Text>
        <Text style={styles.nutritionText}>Proteínas: {recipe.nutrition.protein}</Text>
        <Text style={styles.nutritionText}>Carboidratos: {recipe.nutrition.carbs}</Text>
        <Text style={styles.nutritionText}>Gorduras: {recipe.nutrition.fat}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 5,
  },
  nutritionTable: {
    marginTop: 10,
  },
  nutritionText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default RecipeDetailScreen;

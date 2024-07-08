import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const recipesData = [
  {
    id: '1',
    title: 'Pão com Manteiga',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Café da Manhã',
      ingredients: [
      'Pão',
      'Manteiga',
    ],
    nutrition: {
      calories: '200 kcal',
      protein: '5g',
      carbs: '30g',
      fat: '10g',
    },
  },
  {
    id: '2',
    title: 'Omelete',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Café da Manhã',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },
  {
    id: '3',
    title: 'Frutas Frescas',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Café da Manhã',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },
  {
    id: '4',
    title: 'Salada de Frango',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Café da Manhã',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },
  {
    id: '5',
    title: 'Macarrão ao Molho',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Café da Manhã',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },
  {
    id: '6',
    title: 'Bife com Batatas',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Almoço',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },
  {
    id: '7',
    title: 'Sopa de Legumes',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Almoço',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },
  {
    id: '8',
    title: 'Arroz com Feijão',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Almoço',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },
  {
    id: '9',
    title: 'Peixe Grelhado',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Almoço',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },

  {
    id: '10',
    title: 'Peixe Grelhado',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Almoço',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },

  {
    id: '11',
    title: 'Peixe Grelhado',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Jantar',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },

  {
    id: '12',
    title: 'Peixe Grelhado',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Jantar',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },

  {
    id: '13',
    title: 'Peixe Grelhado',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Jantar',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },

  {
    id: '14',
    title: 'Peixe Grelhado',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Jantar',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },

  {
    id: '15',
    title: 'Peixe Grelhado',
    text: '280kcal',
    image: 'https://i.pinimg.com/564x/4a/49/8a/4a498ad216a16394fc103d2b0fc21bed.jpg',
    category: 'Jantar',
     ingredients: [
      'Ovos',
      'Sal',
      'Óleo',
    ],
    nutrition: {
      calories: '300 kcal',
      protein: '10g',
      carbs: '20g',
      fat: '15g',
    },
  },


];

const categories = ['Todas', 'Café da Manhã', 'Almoço', 'Jantar'];

const RecipesScreen = () => {
 const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filteredRecipes = recipesData.filter(recipe =>
    (selectedCategory === 'Todas' || recipe.category === selectedCategory) &&
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderRecipeCard = ({ item }) => (
    <View style={styles.cardContainer}>
     <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.image }} style={styles.cardImage} />
        <Card.Content>
          <Title style={styles.cardTitle}>{item.title}</Title>
          <Paragraph style={styles.cardText}>{item.text}</Paragraph>
        </Card.Content>
      
      </Card>
    </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.head}> Vitality Vision </Text>


      <View style={styles.searchContainer}>
      
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#000"
          value={searchQuery}
          onChangeText={setSearchQuery}
        /> 
         <Icon name="search" size={24} color="#000" />
      </View>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredRecipes}
        keyExtractor={item => item.id}
        renderItem={renderRecipeCard}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#d9d9d9'
  },

  input: {
    flex: 1,
    padding: 8,
    fontSize: 20,
    fontWeight: 'bold'
   
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginTop: 1
  },
  categoryButton: {
    padding: 9,
    borderRadius: 5,
    backgroundColor: '#7DCD9A',
  },
  selectedCategoryButton: {
    backgroundColor: '#0eab6e',
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
  flatListContent: {
    paddingBottom: 20,
  },
  cardContainer: {
    flex: 1 / 3,
    padding: 5,
  },
  card: {
 
    height: 200,
    width: 110,
    

  },
  cardImage: {
    height: 100,
    width: 110,
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  cardText: {
    fontSize: 10,
    textAlign: 'left',
  },

  head: {
    fontSize: 25,
    color: '#0EAB6E',
    marginTop: 30,
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: 10
  }
});

export default RecipesScreen;

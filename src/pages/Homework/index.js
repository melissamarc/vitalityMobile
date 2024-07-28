import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Exercises from '../Exercises';
import Receits from '../Receits';
import Content from '../HomeworkContent'
import Configuracao from '../Configuracao'


import {
Text,
View,
Button
} from 'react-native'


const Tab = createBottomTabNavigator();

const Homework = () => {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconSize;


          if (route.name === 'Homework') {
            iconName = 'home';
            iconSize = 30;
            
          } else if (route.name === 'Exercises') {
            iconName = 'fitness-center';
          } else if (route.name === 'Receits') {
            iconName = 'receipt';
          }
           else if (route.name === 'Configuracao'){
            iconName = 'Configuration'
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
       },
        tabBarActiveTintColor: 'white', // Cor dos ícones ativos
        tabBarInactiveTintColor: '#53C189', // Cor dos ícones inativos

        tabBarStyle: {
          backgroundColor: '#0EAB6E', // Cor de fundo da barra
          borderTopWidth: 0, // Remove a borda superior
         
        },
        
          tabBarLabelStyle: {
          display: 'none', // Esconde todos os rótulos
        },
      })}
    >


      <Tab.Screen name="Homework" component={Content} options={{ headerShown: false }} />
      <Tab.Screen name="Exercises" component={Exercises} options={{ headerShown: false }} />
      <Tab.Screen name="Receits" component={Receits} options={{ headerShown: false }} />
      <Tab.Screen name="Configuracao" component={Configuracao} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default Homework;

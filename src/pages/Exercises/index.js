// Exercises.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Exercises = () => {
  const [selectedDay, setSelectedDay] = useState('15');
  const daysInMonth = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const navigation = useNavigation();

  const navigateToActivityDetail = (activity) => {
    navigation.navigate('ActivityDetail', { activity });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Monday, {selectedDay}</Text>
        <View style={styles.profilePic}>
          {/* Coloque a imagem do perfil aqui */}
        </View>
      </View>
      <FlatList
        horizontal
        data={daysInMonth}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedDay(item)}>
            <View style={[styles.calendarDay, item === selectedDay && styles.selectedDay]}>
              <Text style={[styles.calendarDayText, item === selectedDay && styles.selectedDayText]}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        style={styles.calendar}
      />
      <TouchableOpacity style={styles.activity} onPress={() => navigateToActivityDetail('Caminhada')}>
        <Icon name="walk" size={30} color="#4CAF50" />
        <Text style={styles.activityText}> Caminhada </Text>
        <Text style={styles.activityTime}>Today 11:45 AM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activity} onPress={() => navigateToActivityDetail('Corrida')}>
        <Icon name="walk" size={30} color="#4CAF50" />
        <Text style={styles.activityText}> Corrida </Text>
        <Text style={styles.activityTime}>Today 8:00 PM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activity} onPress={() => navigateToActivityDetail('Ciclismo')}>
        <Icon name="bike" size={30} color="#4CAF50" />
        <Text style={styles.activityText}> Ciclismo </Text>
        <Text style={styles.activityTime}>Today 9:00 AM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activity} onPress={() => navigateToActivityDetail('Musculação')}>
        <Icon name="arm-flex" size={30} color="#4CAF50" />
        <Text style={styles.activityText}> Musculação </Text>
        <Text style={styles.activityTime}>Today 8:00 AM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activity} onPress={() => navigateToActivityDetail('Personalizado')}>
        <Icon name="weight-lifter" size={30} color="#4CAF50" />
        <Text style={styles.activityText}> Personalizado </Text>
        <Text style={styles.activityTime}>Today 8:00 AM</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginTop: 30,
    right: 5,
  },
  calendar: {
    marginVertical: 10,
  },
  calendarDay: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedDay: {
    backgroundColor: '#4CAF50',
    borderRadius: 30,
  },
  calendarDayText: {
    fontSize: 16,
  },
  selectedDayText: {
    color: '#fff',
  },
  activity: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EBEAEA',
    borderRadius: 15,
    marginVertical: 5,
  },
  activityText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  activityTime: {
    fontSize: 14,
    color: '#888',
  },
});

export default Exercises;








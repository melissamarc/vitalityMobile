import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format, addDays, startOfMonth, parse } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useNavigation } from '@react-navigation/native';

const Exercises = () => {
  const [selectedDay, setSelectedDay] = useState('15');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const daysInMonth = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const navigation = useNavigation(); 

  useEffect(() => {
    const calculateDayOfWeek = (day) => {
      const date = parse(day, 'd', new Date());
      const currentMonthStart = startOfMonth(new Date());
      const selectedDate = addDays(currentMonthStart, day - 1);
      const weekDay = format(selectedDate, 'EEEE', { locale: enUS });
      return weekDay;
    };

    setDayOfWeek(calculateDayOfWeek(selectedDay));
  }, [selectedDay]);

  const activities = [
    { id: 1, type: 'Caminhada', icon: 'walk', time: '11:45 AM' },
    { id: 2, type: 'Corrida', icon: 'run', time: '8:00 PM' },
    { id: 4, type: 'Musculação', icon: 'arm-flex', time: '8:00 AM' },
    { id: 5, type: 'Personalizado', icon: 'weight-lifter', time: '8:00 AM' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{dayOfWeek}, {selectedDay}</Text>
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
      {activities.map((activity) => (
        <TouchableOpacity
          key={activity.id}
          style={styles.activity}
          onPress={() => navigation.navigate('WalkScreen')} // Navegue para a tela WalkScreen
        >
          <Icon name={activity.icon} size={30} color="#4CAF50" />
          <Text style={styles.activityText}>{activity.type}</Text>
          <Text style={styles.activityTime}>Hoje {activity.time}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
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







import React from 'react';
import { 
  View,
   Text,
    StyleSheet,
     TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import WaterTracker from '../../Components/WaterTracker';
import StepCounter from '../../Components/StepCounter';

function Content() {
const navigation = useNavigation();

  return(
     <View style={styles.container}>
    <Text style={styles.head}> Vitality Vision </Text>
    <StepCounter/>
    <WaterTracker/>

     <TouchableOpacity
        style={styles.settigns}
        onPress={() => navigation.navigate('Settings')}
      >
        <Icon name="menu" size={20} color="#FFF" />
        <Text style={{ color: '#FFF', marginLeft: 10 }}>Go to Settings</Text>
      </TouchableOpacity>
  </View>
);
  
}


 

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
  },

  settings: {
    
         marginTop: 20,
          padding: 10,
          backgroundColor: '#007BFF',
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center'
  }
});

export default Content;

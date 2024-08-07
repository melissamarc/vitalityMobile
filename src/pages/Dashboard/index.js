import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable
} from 'react-native';

export default function Dashboard() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);

  function verifyIsSelected(value) {
    return selected.includes(value);
  }

  function toggleItem(value) {
    setSelected(prevItems => {
      if (prevItems.includes(value)) {
        return prevItems.filter(i => i !== value);
      } else {
        if (prevItems.length < 3) {
          return [...prevItems, value];
        } else {
          // Retorna o array original se já houver 3 itens selecionados
          return prevItems;
        }
      }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Quais são os seus objetivos?</Text>
      <Text style={styles.subtitulo}>Escolha no máximo 3.</Text>

      <SafeAreaView style={styles.container1}>
        <Pressable
          onPress={() => toggleItem('0')}
          style={{
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            width: 320,
            height: 50,
            backgroundColor: verifyIsSelected('0') ? '#7DCD9A' : '#ebeaea',
          }}
        >
          <Text style={styles.btnText}>Rotina de atividades físicas</Text>
        </Pressable>

        <Pressable
          onPress={() => toggleItem('1')}
          style={{
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            width: 320,
            height: 50,
            backgroundColor: verifyIsSelected('1') ? '#7DCD9A' : '#ebeaea',
          }}
        >
          <Text style={styles.btnText}>Perder peso</Text>
        </Pressable>

        <Pressable
          onPress={() => toggleItem('2')}
          style={{
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            width: 320,
            height: 50,
            backgroundColor: verifyIsSelected('2') ? '#7DCD9A' : '#ebeaea',
          }}
        >
          <Text style={styles.btnText}>Ganhar peso</Text>
        </Pressable>

        <Pressable
          onPress={() => toggleItem('3')}
          style={{
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            width: 320,
            height: 50,
            backgroundColor: verifyIsSelected('3') ? '#7DCD9A' : '#ebeaea',
          }}
        >
          <Text style={styles.btnText}>Manter peso</Text>
        </Pressable>

        <Pressable
          onPress={() => toggleItem('4')}
          style={{
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            width: 320,
            height: 50,
            backgroundColor: verifyIsSelected('4') ? '#7DCD9A' : '#ebeaea',
          }}
        >
          <Text style={styles.btnText}>Começar uma dieta</Text>
        </Pressable>

        <Pressable
          onPress={() => toggleItem('5')}
          style={{
            marginBottom: 40,
            display: 'flex',
            justifyContent: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            width: 320,
            height: 50,
            backgroundColor: verifyIsSelected('5') ? '#7DCD9A' : '#ebeaea',
          }}
        >
          <Text style={styles.btnText}>Aumentar o consumo de água</Text>
        </Pressable>
      </SafeAreaView>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Dashboard2')}
      >
        <Text style={styles.textbutton}> Avançar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 100,
    textAlign: 'left',
    color: "#000",
    marginHorizontal: 20,
    bottom: 0
  },
  subtitulo: {
    paddingTop: 0,
    paddingEnd: 185,
    paddingBottom: 40,
  },
  container1: {
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    paddingStart: 15,
    fontWeight: 'bold',
    fontSize: 16
  },
  botao: {
    backgroundColor: '#0EAB6E', // Cor de fundo
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center',
    width: 150,
    height: 50,
    marginTop: 30,
  },
  textbutton: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  }
});

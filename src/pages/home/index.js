import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet,
Text, 
View,
Image,
Button,
TouchableOpacity,
ImageBackground} from 'react-native';

export default function Home() {
const navigation = useNavigation()

  return (
    <View style={styles.container}>

     <Text style={styles.titulo}>Bem-vindo à Nossa Plataforma de Saúde Online! </Text>    
    <Text style={styles.subtitulo}>Estamos empolgados em tê-lo(a) conosco em nossa comunidade dedicada a melhorar o seu bem-estar. Nossa plataforma foi desenvolvida para facilitar o gerenciamento da sua saúde.
    </Text>

 
    <TouchableOpacity
    style={styles.botao}
    onPress={() => navigation.navigate('SignUp')}>
    <Text style={styles.textbutton}> Avançar </Text>
    </TouchableOpacity>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
   
  },


  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 120,
    textAlign:'left',
    flexWrap: 'wrap',
    color: "#47AC5D",
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  
  subtitulo: {
    marginTop: 10,
    textAlign:'left',
    flexWrap: 'wrap',
    color: "#000",
    paddingHorizontal: 10,
    marginHorizontal: 17,
    marginBottom: 20
  },

  botao: {
    backgroundColor: '#d9d9d9', // Cor de fundo
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20, 
    marginTop: 300,
    width: 100,
    height: 40
  },

  textbutton: {
    color: '#0eab6e',
    fontWeight: 'bold'
  },

   background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

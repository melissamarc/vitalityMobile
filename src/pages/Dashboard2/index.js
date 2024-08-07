import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function Dashboard2() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  function toggleItem(value) {
    setSelected(value);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Qual o seu nível de atividade?</Text>
      <Text style={styles.subtitulo}>Qualquer mínimo passo conta.</Text>

      <SafeAreaView style={styles.container2}>
        <Pressable
          onPress={() => toggleItem("0")}
          style={[
            styles.pressable,
            {
              backgroundColor: selected === "0" ? "#97D29A" : "#EBEAEA",
            },
          ]}
        >
          <Text style={styles.btnText}>Não muito ativo </Text>
          <Text style={styles.btnText2}>
            (Passo a maior parte do dia sentado/deitado, não costumo andar
            muito.)
          </Text>
        </Pressable>

        <Pressable
          onPress={() => toggleItem("1")}
          style={[
            styles.pressable,
            {
              backgroundColor: selected === "1" ? "#97D29A" : "#EBEAEA",
            },
          ]}
        >
          <Text style={styles.btnText}>Levemente ativo </Text>
          <Text style={styles.btnText2}>
            (Passo metade do dia sem me exercitar mas costumo andar bastante no
            dia.)
          </Text>
        </Pressable>

        <Pressable
          onPress={() => toggleItem("2")}
          style={[
            styles.pressable,
            {
              backgroundColor: selected === "2" ? "#97D29A" : "#EBEAEA",
            },
          ]}
        >
          <Text style={styles.btnText}>Ativo </Text>
          <Text style={styles.btnText2}>
            (Pratico atividade física eventualmente e procuro estar me
            exercitando.)
          </Text>
        </Pressable>

        <Pressable
          onPress={() => toggleItem("3")}
          style={[
            styles.pressable,
            {
              backgroundColor: selected === "3" ? "#97D29A" : "#EBEAEA",
            },
          ]}
        >
          <Text style={styles.btnText}>Bastante ativo </Text>
          <Text style={styles.btnText2}>
            (Pratico atividades físicas regularmente e costumo me exercitar
            todos os dias.)
          </Text>
        </Pressable>
      </SafeAreaView>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Dashboard3")}
      >
        <Text style={styles.textbutton}> Avançar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "left",
    color: "#000",
    padding: 20,
    paddingBottom: 0,
  },
  subtitulo: {
    padding: 20,
    paddingTop: 0,
    paddingEnd: 140,
    paddingBottom: 60,
  },
  pressable: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 15,
    width: 320,
    height: 90,
  },
  btnText: {
    fontSize: 17,
    paddingStart: 15,
    color: "#000",
    fontWeight: "bold",
  },
  btnText2: {
    paddingStart: 15,
    color: "#000",
  },
  botao: {
    backgroundColor: "#0EAB6E", // Cor de fundo
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    width: 130,
    height: 50,
    marginTop: 30,
  },
  textbutton: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
});


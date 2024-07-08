import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from "react-native";

export default function Dashboard2() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "Selecione uma opção", value: "" },
    { label: "Masculino", value: "opcao1" },
    { label: "Feminino", value: "opcao2" },
  ];

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Quais seus dados de saúde?</Text>
      <Text style={styles.subtitulo}>
        Preencha para receber dicas e recomendações baseadas inteiramente em
        você e no seu perfil.
      </Text>

      <SafeAreaView style={styles.container1}>
        <View style={styles.inputContainer}>
          <Text>data de nascimento</Text>
          <TextInput
            style={styles.input}
            value={input1}
            onChangeText={setInput1}
            placeholder="Digite aqui"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>peso (em kg)</Text>
          <TextInput
            style={styles.input}
            value={Number}
            onChangeText={setInput2}
            placeholder="Digite aqui"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>altura (em centimetros)</Text>
          <TextInput
            style={styles.input}
            value={Number}
            onChangeText={setInput3}
            placeholder="Digite aqui"
          />
        </View>
      </SafeAreaView>

      <SafeAreaView style={styles.container2}>
        <Text>sexo</Text>
        <TouchableOpacity
          style={styles.inputContainer2}
          onPress={handleOpenModal}
        >
          <Text>
            {selectedOption ? selectedOption.label : "Selecione uma opção"}
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <FlatList
                data={options}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleSelectOption(item)}
                  >
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />

            </View>
          </View>
        </Modal>
      </SafeAreaView>

      
              <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("Homework")}
              >
                <Text style={styles.textbutton}>Finalizar</Text>
              </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  titulo: {
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 100,
    textAlign: "left",
    color: "#000",
    padding: 17,
    paddingBottom: 0,
  },
  subtitulo: {
    padding: 20,
    paddingTop: 0,
    paddingEnd: 30,
  },

  inputContainer: {
    marginBottom: 20,
  },
  input: {
    padding: 10,
    marginTop: 5,
    width: 320,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#d9d9d9",
  },

  inputContainer2: {
    backgroundColor: "#d9d9d9",
    borderRadius: 5,
    padding: 10,
    width: 320,
    height: 50,
    justifyContent: "center",
    color: "#ffff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: 250,
    maxHeight: 300,
    overflow: "hidden",
    elevation: 5,
  },
  option: {
    padding: 10,
  },

  botao: {
    backgroundColor: "#0EAB6E", // Cor de fundo
    marginTop: 50,
    borderRadius: 10,
    alignItems: "center",
    width: 150,
    height: 50,
  },

  textbutton: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    padding: 10
  
  },
});

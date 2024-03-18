import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";

const ModalIncorrectLogin = ({ navigation, isModalOpen, setIsModalOpen }) => {
  const handleNavigateToLogin = () => {
    navigation.navigate("Login");
    setIsModalOpen(false);
  };
  return (
    <Modal visible={isModalOpen} transparent={true} animationType={"slide"}>
      <View style={styles.container}>
        <View style={styles.containerModal}>
          <Text style={{ margin: 10, fontSize: 20, fontFamily: "Poppins" }}>
            Contraseña o Email invalido
          </Text>
          <TouchableOpacity onPress={handleNavigateToLogin}>
            <Text style={styles.button}> Ok </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalIncorrectLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  containerModal: {
    backgroundColor: "#F9C400",
    borderRadius: 10,
    width: "90%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 10,
    padding: 5,
    fontSize: 20,
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    fontFamily: "Poppins",
  },
});

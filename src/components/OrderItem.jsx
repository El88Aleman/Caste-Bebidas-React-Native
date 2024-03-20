import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const OrderItem = ({ order }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{order.createdAt}</Text>
          <Text style={styles.text}>Bebida: {order.items[0].title}</Text>
          <Text style={styles.text}>Tamaño: {order.items[0].description}</Text>
          <Text style={styles.text}>Catidad: {order.items[0].quantity}</Text>
          <Text style={styles.text2}>Precio: ${order.total}</Text>
        </View>
        <FontAwesome name="trash" size={30} color="white" />
      </View>
    </ScrollView>
  );
};
const sinOrdenes = () => {
  return (
    <View style={styles.containerSinOrdenes}>
      <Text style={styles.sinOrdenes}>No hay órdenes disponibles</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#AB0000",
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: "auto",
    width: "90%",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
  },
  text: {
    fontSize: 17,
    fontFamily: "Poppins",
    color: "white",
  },
  text2: {
    fontSize: 19,
    fontFamily: "Poppins",
    color: "white",
  },
});

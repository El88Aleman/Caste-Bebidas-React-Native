import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const OrderItem = ({ order }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{order.createdAt}</Text>
        <Text style={styles.text}>Bebida: {order.items[0].title}</Text>
        <Text style={styles.text}>Tamaño: {order.items[0].description}</Text>
        <Text style={styles.text}>Catidad: {order.items[0].quantity}</Text>
        <Text style={styles.text2}>Precio: ${order.total}</Text>
      </View>
      <Entypo name="trash" size={25} color="white" />
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#AB0000",
    borderWidth: 2,
    margin: 10,
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

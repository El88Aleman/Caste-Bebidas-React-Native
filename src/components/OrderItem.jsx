import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const OrderItem = ({ order }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{order.createdAt}</Text>
        <Text style={styles.text2}>$ {order.total}</Text>
      </View>
      <Feather name="search" size={30} color="black" />
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

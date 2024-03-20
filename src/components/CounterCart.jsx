import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/cart/cartSlice";

const CounterCart = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.container}>
        <Pressable
          style={styles.containerButton}
          onPress={() => dispatch(addCartItem({ ...item, quantity: -1 }))}
          disabled={item.quantity === 1}
        >
          <FontAwesome name="minus" size={16} color="black" />
        </Pressable>
        <Text style={[styles.contador, { color: "white" }]}>
          {item.quantity}
        </Text>
        <Pressable
          style={styles.containerButton}
          onPress={() => dispatch(addCartItem({ ...item, quantity: 1 }))}
        >
          <FontAwesome name="plus" size={16} color="black" />
        </Pressable>
      </View>
    </>
  );
};

export default CounterCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerButton: {
    padding: 10,
    backgroundColor: "#F9C400",
    borderRadius: 5,
    margin: 10,
  },
  contador: {
    fontFamily: "Poppins",
    fontSize: 16,
    marginVertical: 12,
    marginHorizontal: 10,
  },
});

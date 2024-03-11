import { StyleSheet, View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/cart/cartSlice";
import { useState } from "react";

const CounterProductDetail = ({ initialValue, product }) => {
  const [count, setCount] = useState(initialValue);
  const dispatch = useDispatch();

  const handlerAddCartItem = (quantity) => {
    dispatch(addCartItem({ ...product, quantity }));
    setCount(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCounter}>
        <Pressable style={styles.containerButton}>
          <AntDesign name="minus" size={24} color="black" />
        </Pressable>
        <Text style={[styles.contador, { color: "white" }]}>{count}</Text>
        <Pressable
          style={styles.containerButton}
          onPress={() => setCount(count + 1)}
        >
          <AntDesign name="plus" size={24} color="black" />
        </Pressable>
      </View>
      <View>
        <Pressable
          style={styles.containerButton}
          onPress={() => handlerAddCartItem(count)}
        >
          <Text style={{ color: "black", fontSize: 16, fontFamily: "Roboto" }}>
            AGREGAR AL CARRITO
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CounterProductDetail;

const styles = StyleSheet.create({
  containerCounter: {
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
    fontSize: 20,
    marginVertical: 12,
    marginHorizontal: 10,
  },
});

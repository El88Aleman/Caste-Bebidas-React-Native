import { StyleSheet, View, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/cart/cartSlice";
import { useState } from "react";
import ModalShoppingCart from "./modals/ModalShoppingCart";
import { FontAwesome } from "@expo/vector-icons";

const CounterProductDetail = ({ navigation, initialValue, product }) => {
  const [count, setCount] = useState(initialValue);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stock = product.quantity;

  const handlerAddCartItem = (quantity) => {
    setIsModalOpen(true);
    dispatch(addCartItem({ ...product, quantity }));
    setCount(1);
  };

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCounter}>
        <Pressable style={styles.containerButton} onPress={handleDecrement}>
          <FontAwesome name="minus" size={22} color="black" />
        </Pressable>
        <Text style={[styles.contador, { color: "white" }]}>{count}</Text>
        <Pressable style={styles.containerButton} onPress={handleIncrement}>
          <FontAwesome name="plus" size={22} color="black" />
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
      {isModalOpen && (
        <ModalShoppingCart
          navigation={navigation}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handlerAddCartItem={handlerAddCartItem}
        />
      )}
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

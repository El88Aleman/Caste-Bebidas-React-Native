import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { deleteCartItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CounterCart from "./CounterCart";
import ModalEmpityCart from "./modals/ModalEmpityCart";

const CartItem = ({ item, product }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: item.images[0] }}
        resizeMode="cover"
      />
      <View style={styles.containerText}>
        <Text style={[styles.text, { color: "white" }]}>{item.title}</Text>
        <Text style={[styles.text, { color: "white" }]}>
          {item.description}
        </Text>
        <CounterCart item={item} product={product} />
        <Text style={[styles.text, { color: "white" }]}>${item.price}</Text>
      </View>
      <View>
        <Pressable
          style={styles.containerButton}
          onPress={() => dispatch(deleteCartItem(item.id))}
        >
          <FontAwesome name="trash" size={30} color="white" />
        </Pressable>
      </View>
      {isModalOpen && (
        <ModalEmpityCart
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AB0000",
    width: "90%",
    height: 225,
    marginHorizontal: "5%",
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  containerText: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins",
    width: "100%",
    textAlign: "center",
  },
  img: {
    width: 150,
    height: 225,
    borderRadius: 5,
  },

  containerButton: {
    position: "absolute", // Establecer el posicionamiento absoluto para el botón
    bottom: 60, // Colocar el botón en la esquina superior
    right: 0, // Colocar el botón en la esquina derecha
    margin: 10,
  },
});

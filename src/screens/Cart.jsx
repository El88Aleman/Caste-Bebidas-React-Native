import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { usePostOrderMutation } from "../app/services/orders";
import { deleteCart } from "../features/cart/cartSlice";
import { Button } from "@rneui/themed";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerAddOrder] = usePostOrderMutation();

  const handlerAddOrder = async () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      createdAt,
      ...cart,
    };
    triggerAddOrder({ localId, order });
    dispatch(deleteCart());
    navigation.navigate("OrdersStack");
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
        <Button
          title="Confirmar"
          type="outline"
          containerStyle={{
            backgroundColor: "#F9C400",
            width: 150,
            marginBottom: 10,
          }}
          buttonStyle={{ borderColor: "#F9C400", border: 1 }}
          titleStyle={{ color: "black", fontFamily: "Poppins" }}
          onPress={handlerAddOrder}
        />

        <View>
          <Text style={styles.confirmText}>Total: ${cart.total}</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 80,
  },
  confirmContainer: {
    flexDirection: "row",
    backgroundColor: "gray",
    padding: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  confirmText: {
    fontFamily: "Poppins",
    fontSize: 18,
    color: "white",
  },
});

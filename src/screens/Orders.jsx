import { FlatList, View } from "react-native";
import OrderItem from "../components/OrderItem";
import { useSelector } from "react-redux";
import { useGetOrdersQuery } from "../app/services/orders";

const Orders = () => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: orders } = useGetOrdersQuery(localId);

  if (orders.length === 0) {
    return (
      <View style={styles.containerSinOrdenes}>
        <Text style={styles.sinOrdenes}>No tenes nada en el carrito</Text>
      </View>
    );
  }
  return (
    <View style={{ marginBottom: 80 }}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  containerSinOrdenes: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sinOrdenes: { fontSize: 24, fontFamily: "Poppins", color: "gray" },
});

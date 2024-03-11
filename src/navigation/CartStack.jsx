import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Cart from "../screens/Cart";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={({ navigation }) => {
        return {
          header: () => {
            return <Header navigation={navigation} />;
          },
        };
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;

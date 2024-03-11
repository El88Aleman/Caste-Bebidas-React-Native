import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Orders from "../screens/Orders";

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={({ navigation }) => {
        return {
          header: () => {
            return <Header navigation={navigation} />;
          },
        };
      }}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrderStack;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ProductsByCategory from "../screens/ProductsByCategory";
import ProductDetail from "../screens/ProductDetail";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => {
        return {
          header: () => {
            return <Header navigation={navigation} />;
          },
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;

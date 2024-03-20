import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import OrdersStack from "./OrdersStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ flex: 1 }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#AB0000",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          paddingTop: 5,
          paddingBottom: 10,
          elevation: 0,
          borderWidth: 0,
          height: 70,
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        initialRouteName="ShopStack"
        options={{
          tabBarLabel: "Categorias",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="list" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        initialRouteName="ShopStack"
        options={{
          tabBarLabel: "Carrito",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cart-plus" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        initialRouteName="ShopStack"
        options={{
          tabBarLabel: "Ordenes",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        initialRouteName="ShopStack"
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

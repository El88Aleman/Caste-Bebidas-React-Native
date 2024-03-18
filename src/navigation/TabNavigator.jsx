import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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
          tabBarShowIcon: true,
          position: "absolute",
          paddingTop: 5,
          paddingBottom: 10,
          elevation: 0,
          borderWidth: 0,
          height: 70,
          backgroundColor: "#EFEFEF",
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
            <FontAwesome5 name="shopping-cart" size={24} color={color} />
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
            <Ionicons name="person-sharp" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

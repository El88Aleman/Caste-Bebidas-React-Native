import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
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
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

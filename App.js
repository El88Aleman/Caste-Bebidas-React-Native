import { fontCollection } from "./src/utils/globals/font";
import { StatusBar } from "expo-status-bar";
import MainNavigator from "./src/navigation/MainNavigator";
import { useFonts } from "expo-font";
import { store } from "./src/app/store";
import { Provider } from "react-redux";

const App = () => {
  const [fontsLoaded] = useFonts(fontCollection);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
};

export default App;

import { StyleSheet, View } from "react-native";

const ShadowPrimary = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ShadowPrimary;

const styles = StyleSheet.create({
  container: {
    elevation: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
});

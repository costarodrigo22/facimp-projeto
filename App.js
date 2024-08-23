import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  decrement,
} from "react-native";
import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text>navBar</Text>
      </View>

      <Text style={{ fontSize: 40 }}>{count}</Text>

      <Button onMutate={increment}>
        <Text>Adicionar</Text>
      </Button>

      <ActivityIndicator color="#f00" />

      <Button children="subtrair" onMutate={decrement} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "space-between",
  },

  navBar: {
    width: "100%",
    height: 100,
    backgroundColor: "#f00",
    justifyContent: "center",
    alignItems: "center",
  },
});

import { TouchableOpacity, Text } from "react-native";

export default function Button({ children, onMutate }) {
  return (
    <TouchableOpacity
      onPress={onMutate}
      style={{
        backgroundColor: "#c3c3",
        width: 120,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: "#000" }}>{children}</Text>
    </TouchableOpacity>
  );
}

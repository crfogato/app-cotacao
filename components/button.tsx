import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

export const Button = ({ label, onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c0e864",
    borderRadius: 5,
    padding: 15,
  },
  text: {
    fontSize: 15,
    color: "#000000",
    textAlign: "center",
  },
});

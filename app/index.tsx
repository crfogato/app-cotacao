import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getUSD } from "../services/awesomeapi";

export default function Screen() {
  const [loading, setLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState<number>(0);

  const updateCurrency = async () => {
    setLoading(true);
    const dolar = await getUSD();
    setLoading(false);
    setCurrentValue(dolar);
  };

  useEffect(() => {
    updateCurrency();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/dolar.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {loading && <Text style={styles.h2}>Carregando...</Text>}

      {!loading && (
        <>
          <Text style={styles.h2}>O dólar americano está:</Text>
          <Text style={styles.price}>R$ {currentValue.toFixed(2)}</Text>
          <Button label="Atualizar" onPress={updateCurrency} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b1c2d",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 180,
  },
  h2: {
    color: "#cccccc",
    fontSize: 24,
    marginTop: 30,
  },
  price: {
    color: "#ffffff",
    fontSize: 52,
    marginTop: 20,
    marginBottom: 50,
  },
});

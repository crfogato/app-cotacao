import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLeyout() {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: "Dólar Americano" }} />
        <Drawer.Screen name="eur" options={{ title: "Euro" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

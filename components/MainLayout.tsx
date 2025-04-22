import { height, width } from "@/constants/Dimension";
import { MainLayoutDTO } from "@/dtos/main-layout.dto";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function MainLayout({ children }: MainLayoutDTO) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <GestureHandlerRootView>
        <StatusBar style="dark" />
        <View style={styles.container}>{children}</View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: "white",
  },
});

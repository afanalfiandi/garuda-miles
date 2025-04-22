import { height, width } from "@/constants/Dimension";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";

export default function SplashScreen() {
  const router = useRouter();
  useEffect(() => {
    onNavigate();
  });

  const onNavigate = () => {
    setTimeout(() => {
      router.replace("/intro");
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgImg}
        source={require("../assets/images/bg-splash.png")}
      >
        <Image
          style={styles.appLogo}
          source={require("../assets/images/app-logo-full.png")}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#1A336B",
  },
  bgImg: {
    width: width,
    height: height,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appLogo: {
    width: width * 0.45,
    resizeMode: "contain",
  },
});

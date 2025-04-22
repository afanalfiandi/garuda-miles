import CustomButton from "@/components/CustomButton";
import IntroHeader from "@/components/IntroHeader";
import MainLayout from "@/components/MainLayout";
import { Colors } from "@/constants/Colors";
import { height, width } from "@/constants/Dimension";
import { INTRO } from "@/constants/Intro";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function IntroScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  const onPress = (event: string) => {
    const route = event === "signup" ? "/register" : "/auth";

    router.navigate(route);
  };
  return (
    <MainLayout>
      <IntroHeader />

      <View style={styles.scrollview}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          style={styles.scrollview}
          onMomentumScrollEnd={handleScrollEnd} // Tambahkan event ini
        >
          {INTRO.map((item, index) => (
            <View key={index} style={styles.introWrapper}>
              <View style={styles.imgWrapper}>
                <Image source={item.img} />
              </View>
              <View style={styles.contentWrapper}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.contentText}>{item.textContent}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.dotWrapper}>
          {INTRO.map((item, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.dotActive : styles.dotInActive,
              ]}
            ></View>
          ))}
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <CustomButton
          onPress={() => {
            onPress("signup");
          }}
          text="Sign Up"
          isPrimary={true}
        />
        <CustomButton
          onPress={() => {
            onPress("signin");
          }}
          text="Sign In"
          isPrimary={false}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgWrapper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: width * 0.04,
    paddingRight: width * 0.04,
  },
  btnWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.02,
  },
  titleText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: width * 0.05,
    marginBottom: height * 0.015,
  },
  contentText: {
    fontSize: width * 0.04,
    textAlign: "center",
  },
  dotWrapper: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: width * 0.02,
  },
  dot: {
    width: width * 0.03,
    height: width * 0.03,
    marginTop: height * 0.015,
    borderRadius: 100,
  },
  dotActive: {
    backgroundColor: Colors.primary,
  },
  dotInActive: {
    backgroundColor: Colors.gray,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  scrollview: {
    flex: 1,
  },
  introWrapper: {
    width: width - width * 0.1,
  },
});

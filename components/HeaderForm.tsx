import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { IconChevronLeft } from "@/constants/Image";
import { width } from "@/constants/Dimension";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";

const HeaderForm = () => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.backBtn} onPress={onBack}>
        <Image source={IconChevronLeft} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderForm;

const styles = StyleSheet.create({
  backBtn: {
    borderWidth: 1,
    width: width * 0.12,
    height: width * 0.12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.04,
    borderColor: Colors.gray,
  },
  wrapper: {
    padding: width * 0.05,
  },
});

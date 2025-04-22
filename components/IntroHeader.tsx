import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { AppLogoFullBlueSm } from "@/constants/Image";
import { Colors } from "@/constants/Colors";

const IntroHeader = () => {
  return (
    <View>
      <Image source={AppLogoFullBlueSm} />
    </View>
  );
};

export default IntroHeader;

const styles = StyleSheet.create({});

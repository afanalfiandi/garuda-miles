import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IconGoogle } from "@/constants/Image";
import { Colors } from "@/constants/Colors";

const SocialMediaButton = ({ img }: { img: any }) => {
  return (
    <TouchableOpacity style={styles.btnWrapper}>
      <Image source={img} />
    </TouchableOpacity>
  );
};

export default SocialMediaButton;

const styles = StyleSheet.create({
  btnWrapper: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 100,
    borderColor: Colors.primary
  },
});

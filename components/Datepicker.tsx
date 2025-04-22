import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { height, width } from "@/constants/Dimension";
import { Colors } from "@/constants/Colors";

const DatePicker = () => {
  return (
    <TextInput style={[styles.input, styles.displayFlex, styles.center]} placeholder="DD/MM/YYY">
    </TextInput>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingTop: height * 0.025,
    paddingBottom: height * 0.025,
    paddingLeft: width * 0.04,
    paddingRight: width * 0.04,
    marginTop: height * 0.01,
    borderRadius: width * 0.05,
    borderColor: Colors.gray,
    flex: 1,
    height: height * 0.07
  },
  displayFlex: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  center: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { height, width } from "@/constants/Dimension";
import { Colors } from "@/constants/Colors";

interface LinkButtonDTO {
  text: string;
  event: any;
  additionalText?: string;
}
const LinkButton = ({ text, event, additionalText }: LinkButtonDTO) => {
  return (
    <View style={styles.inputWrapper}>
      <Text>{additionalText}</Text>
      <TouchableOpacity onPress={event}>
        <Text style={styles.labelText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: height * 0.01,
    width: "auto",
    alignSelf: "flex-start",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  labelText: {
    color: Colors.blueSplash,
    fontSize: width * 0.04,
    borderBottomWidth: 1,
  },
});

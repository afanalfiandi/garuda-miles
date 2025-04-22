import {
  Pressable,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { height, width } from "@/constants/Dimension";

interface ButtonDTO {
  isPrimary: boolean;
  text: string;
  onPress: any;
  isDisabled?: boolean;
  image?: any;
  width?: number | null;
}

const CustomButton = ({
  isPrimary,
  text,
  onPress,
  isDisabled,
  image,
  width
}: ButtonDTO) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnWrapper,
        isPrimary ? styles.primary : styles.strokeBtn,
        isDisabled ? styles.disabledButton : null,
        {
          width: width ? width : "100%"
        }
      ]}
    >
      <Image source={image} style={{ marginRight: 10 }} />
      <Text
        style={[
          styles.text,
          isPrimary ? styles.textPrimary : styles.textStroked,
          image ? styles.regularText : null,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnWrapper: {
    padding: width * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.04,
    marginBottom: 10
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  strokeBtn: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: Colors.primary,
    display: "flex",
    flexDirection: "row"
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textPrimary: {
    color: "white",
  },
  textStroked: {
    color: Colors.primary,
  },
  disabledButton: {
    opacity: 0.5,
  },
  regularText: {
    fontWeight: "normal",
  },
});

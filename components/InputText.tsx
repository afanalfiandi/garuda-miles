import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconEye } from "@/constants/Image";
import { height, width } from "@/constants/Dimension";
import { Colors } from "@/constants/Colors";

interface InputDTO {
  text: string;
  event: any;
  val: string;
  isPassword?: boolean;
  placeholder: string;
}
const InputText = ({ text, event, val, isPassword, placeholder }: InputDTO) => {
  const [isSecureText, setIsSecureText] = useState<boolean>(true);

  const onEye = () => {
    setIsSecureText(!isSecureText);
  };
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.labelText}>{text}</Text>
      {!isPassword ? (
        <TextInput
          style={styles.input}
          value={val}
          onChangeText={event}
          placeholder={placeholder}
        />
      ) : (
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={isSecureText}
            placeholder={placeholder}
          />
          <TouchableOpacity onPress={onEye}>
            <Image source={IconEye} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: height * 0.03,
  },
  labelText: {
    fontSize: width * 0.045,
    color: "black",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    paddingTop: height * 0.025,
    paddingBottom: height * 0.025,
    paddingLeft: width * 0.04,
    paddingRight: width * 0.04,
    marginTop: height * 0.01,
    borderRadius: width * 0.05,
    borderColor: Colors.gray,
  },
  passwordWrapper: {
    borderWidth: 1,
    height: height * 0.075,
    paddingLeft: width * 0.04,
    paddingRight: width * 0.04,
    marginTop: height * 0.01,
    borderRadius: width * 0.05,
    borderColor: Colors.gray,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    height: "100%",
  },
});

import CustomButton from "@/components/CustomButton";
import HeaderForm from "@/components/HeaderForm";
import InputText from "@/components/InputText";
import LinkButton from "@/components/LinkButton";
import { height, width } from "@/constants/Dimension";
import { BgWing, IconFacebook, IconGoogle } from "@/constants/Image";
import { AuthPayloadDTO } from "@/dtos/auth-payload.dto";
import { useCallback, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function AuthScreen() {
  const [authPayload, setAuthPayload] = useState<AuthPayloadDTO>({
    member: "",
    password: ""
  })
  
  const onSubmit = () => {
    console.log("Submit Clicked");
  };

  const OnRegister = () => {
    console.log("Register Clicked");
  };

  const handleChange = useCallback((key: keyof AuthPayloadDTO, value: string) => {
    setAuthPayload(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const handleForgotPassword = () => {
    console.log('Forgot Password Clicked')
  }
  
  return (
    <SafeAreaView>
      <HeaderForm />
      <Image source={BgWing} style={styles.wingImg} />

      <View style={styles.contentWrapper}>
        <Text style={styles.infoText}>Sign In</Text>
        <Text style={styles.subtitleText}>Welcome back,</Text>
        <Text style={styles.subtitleText}>We’re glad to see you again!</Text>

        <InputText
          placeholder="Input your Email/GarudaMiles number here"
          text="Email / GarudaMiles number"
          event={(value: string) => handleChange("member", value)}
          val={authPayload.member}
        />
        <InputText
          placeholder="Input your password here"
          text="Password"
          event={(value: string) => handleChange("password", value)}
          val={authPayload.password}
          isPassword={true}
        />

        <LinkButton text="Forgot password?" event={handleForgotPassword} />

        <View style={[styles.buttonWrapper, styles.actionButtonWrapper]}>
          <CustomButton
            isPrimary={true}
            text="Sign In"
            onPress={onSubmit}
            isDisabled={true}
          />
        </View>
        <View style={[styles.buttonWrapper, styles.center]}>
          <Text>or</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton
            isPrimary={false}
            text="Sign In with Google"
            onPress={onSubmit}
            isDisabled={false}
            image={IconGoogle}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton
            isPrimary={false}
            text="Sign In with Facebook"
            onPress={onSubmit}
            isDisabled={false}
            image={IconFacebook}
          />
        </View>
        <View style={[styles.buttonWrapper, styles.center, styles.displayFlex]}>
          <LinkButton
            text="Register Here"
            event={OnRegister}
            additionalText="Don't have an account yet?"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  wingImg: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  contentWrapper: {
    padding: width * 0.05,
  },
  infoText: {
    fontWeight: "bold",
    fontSize: width * 0.08,
    marginBottom: height * 0.01,
  },
  subtitleText: {
    fontSize: width * 0.04,
  },
  buttonWrapper: {
    marginTop: height * 0.01,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    fontSize: width * 0.04,
  },
  displayFlex: {
    display: "flex",
    flexDirection: "row",
  },
  actionButtonWrapper: {
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
  },
});

import CustomButton from "@/components/CustomButton";
import HeaderForm from "@/components/HeaderForm";
import InputText from "@/components/InputText";
import MainLayout from "@/components/MainLayout";
import { Colors } from "@/constants/Colors";
import { height, width } from "@/constants/Dimension";
import { BgWing, IconApple, IconFacebook, IconGoogle } from "@/constants/Image";
import { useState } from "react";
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Dropdown from "@/components/Dropdown";
import DatePicker from "@/components/Datepicker";
import SocialMediaButton from "@/components/SocialMediaButton";
import LinkButton from "@/components/LinkButton";
import { COUNTRIES } from "@/constants/Countries";
import { COUNTRY_CODES } from "@/constants/CountryCodes";
import { RegisterDataDTO } from "@/dtos/register-data.dto";
import { SALUTATION } from "@/constants/Salutation";

export default function RegisterScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAliasDropdownVisible, setAliasDropdownVisible] = useState(false);
  const [isCountryCodeDropdownVisible, setCountryCodeDropdownVisible] = useState(false);
  const [isCountryDropdownVisible, setCountryDropdownVisible] = useState(false);
  const [isTermAgree, setTermAgree] = useState(false);

  const [data, setData] = useState<RegisterDataDTO>({
    salutation: "",
    dateOfBirth: "",
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    email: "",
    nationality: "",
    phoneNumberAddress: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setAliasDropdownVisible(false);
    setCountryDropdownVisible(false);
    setCountryCodeDropdownVisible(false);
    setCurrentIndex(newIndex);
  };

  const onSubmit = () => {
    console.log("submit clicked");
  };

  const onChangeValue = (field: string, value: string | number) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const onNext = () => {
    if (currentIndex < 2) {
      setCurrentIndex((current) => current + 1);
    }
  };

  const onPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((current) => current - 1);
    }
  };

  const onSelectDropdown = (value: any) => {
    console.log("Value selected => ", value);
  };
  return (
    <MainLayout>
      <HeaderForm />
      <Image source={BgWing} style={styles.wingImg} />

      <View style={styles.contentWrapper}>
        <Text style={styles.infoText}>Sign Up</Text>
        <Text style={styles.subtitleText}>Welcome aboard,</Text>
        <Text style={styles.subtitleText}>Let’s join us for more benefit!</Text>

        <View style={styles.stepperWrapper}>
          {[0, 1, 2].map((item, index) => (
            <TouchableOpacity
              style={[
                styles.stepper,
                currentIndex === index
                  ? styles.stepperActive
                  : styles.stepperInActive,
              ]}
              key={index}
              onPress={() => {
                setCurrentIndex(index);
                handleScrollEnd;
              }}
            ></TouchableOpacity>
          ))}
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          style={styles.scrollview}
          onMomentumScrollEnd={handleScrollEnd}
        >
          {currentIndex === 0 && (
            <View style={styles.introWrapper}>
              <View style={styles.formWrapper}>
                <Text style={styles.formTitle}>Personal Details</Text>

                <View style={[styles.displayFlex, styles.inputGroup]}>
                  <Dropdown
                    value={SALUTATION}
                    onPress={() => {
                      setCountryCodeDropdownVisible(false);
                      setCountryDropdownVisible(false);
                      setAliasDropdownVisible(!isAliasDropdownVisible);
                    }}
                    isDropdownVisible={isAliasDropdownVisible}
                    onSelectDropdown={onSelectDropdown}
                  />

                  <DatePicker />
                </View>

                <InputText
                  placeholder="John"
                  text="First Name & Middle Name"
                  val={data.firstName}
                  event={(value: string | number) => {
                    onChangeValue("firstName", value);
                  }}
                />

                <InputText
                  placeholder="Last Name"
                  text="Last Name"
                  val={data.lastName}
                  event={(value: string | number) => {
                    onChangeValue("lastName", value);
                  }}
                />
              </View>
            </View>
          )}
          {currentIndex === 1 && (
            <View style={styles.introWrapper}>
              <View style={styles.formWrapper}>
                <Text style={styles.formTitle}>Contact Information</Text>

                <View style={[styles.displayFlex, styles.inputGroup]}>
                  <Dropdown
                    value={COUNTRY_CODES}
                    onPress={() => {
                      setAliasDropdownVisible(false);
                      setCountryDropdownVisible(false);
                      setCountryCodeDropdownVisible(
                        !isCountryCodeDropdownVisible
                      );
                    }}
                    isDropdownVisible={isCountryCodeDropdownVisible}
                    onSelectDropdown={onSelectDropdown}
                  />
                  <DatePicker />
                </View>

                <InputText
                  placeholder="example@gmail.com"
                  text="Email Address"
                  val={data.email}
                  event={(value: string | number) => {
                    onChangeValue("email", value);
                  }}
                />

                <View
                  style={[
                    {
                      marginTop: height * 0.03,
                    },
                  ]}
                >
                  <View>
                    <Text style={styles.formTitle}> Nationality </Text>
                    <Dropdown
                      value={COUNTRIES}
                      onPress={() => {
                        setAliasDropdownVisible(false);
                        setCountryCodeDropdownVisible(false);
                        setCountryDropdownVisible(!isCountryDropdownVisible);
                      }}
                      isDropdownVisible={isCountryDropdownVisible}
                      onSelectDropdown={onSelectDropdown}
                      isBottomPositioned={true}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
          {currentIndex === 2 && (
            <View style={styles.introWrapper}>
              <View style={styles.formWrapper}>
                <Text style={styles.formTitle}>This Section Is Under Construction</Text>
              </View>
            </View>
          )}
        </ScrollView>

        {currentIndex === 2 && (
          <View
            style={[
              styles.displayFlex,
              styles.buttonWrapper,
              {
                marginTop: height * 0.03,
                gap: width * 0.03,
                width: width * 0.7,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setTermAgree(!isTermAgree);
              }}
              style={{
                width: 23,
                height: 23,
                borderWidth: isTermAgree ? 0 : 1,
                borderRadius: 8,
              }}
            >
              {isTermAgree && (
                <Image
                  style={{
                    width: 23,
                    height: 23,
                  }}
                  source={require("../assets/images/icon-check-green.png")}
                />
              )}
            </TouchableOpacity>
            <Text style={{ textAlign: "justify", opacity: isTermAgree ? 1 : 0.5 }}>
              By submitting my information, I acknowledge and accept the terms
              of Garuda Indonesia Privacy Policy
            </Text>
          </View>
        )}
        <View
          style={[
            styles.displayFlex,
            styles.buttonWrapper,
            {
              marginTop: height * 0.03,
              marginBottom: height * 0.02,
              gap: width * 0.03,
            },
          ]}
        >
          {currentIndex === 1 && (
            <CustomButton
              isPrimary={false}
              text="Back"
              width={width * 0.2}
              onPress={onPrev}
            />
          )}
          <CustomButton
            isPrimary={true}
            text={
              currentIndex === 0
                ? "Fill Contact Information"
                : currentIndex === 1
                ? "Fill Address Information"
                : "Submit"
            }
            width={currentIndex === 1 ? width * 0.57 : null}
            onPress={currentIndex !== 2 ? onNext : onSubmit}
          />
        </View>

        {currentIndex !== 2 && (
          <>
            <View
              style={[
                styles.displayFlex,
                { justifyContent: "center", gap: 25 },
              ]}
            >
              <SocialMediaButton img={IconGoogle}></SocialMediaButton>
              <SocialMediaButton img={IconFacebook}></SocialMediaButton>
              <SocialMediaButton img={IconApple}></SocialMediaButton>
            </View>
            <View style={[styles.center, styles.displayFlex]}>
              <LinkButton
                text="Sign In Here"
                event={() => {
                  console.log("tex");
                }}
                additionalText="Already have an account?"
              />
            </View>
          </>
        )}
      </View>
    </MainLayout>
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
    paddingTop: width * 0.03,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    flex: 1,
  },
  infoText: {
    fontWeight: "bold",
    fontSize: width * 0.07,
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
  scrollContainer: {
    flexDirection: "row",
  },
  scrollview: {
    flex: 1,
  },
  stepper: {
    height: height * 0.01,
    padding: 2,
    borderRadius: 100,
    flex: 1,
  },
  stepperActive: {
    backgroundColor: Colors.primary,
  },
  stepperInActive: {
    backgroundColor: Colors.gray,
  },
  stepperWrapper: {
    marginBottom: height * 0.02,
    marginTop: height * 0.02,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  introWrapper: {
    width: width - width * 0.2,
  },
  formWrapper: {
    flex: 1,
  },
  inputGroup: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 15,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

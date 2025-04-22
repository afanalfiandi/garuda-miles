import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { height, width } from "@/constants/Dimension";
import { Colors } from "@/constants/Colors";
import { IconDropdownSolid } from "@/constants/Image";

interface DropdownDTO {
  value: any[];
  onPress: any;
  isDropdownVisible: boolean;
  onSelectDropdown: any;
  isBottomPositioned?: boolean;
}

const Dropdown = ({
  value,
  onPress,
  isDropdownVisible,
  onSelectDropdown,
  isBottomPositioned,
}: DropdownDTO) => {
  return (
    <View style={{ position: "relative", height: height * 0.08 }}>
      <TouchableOpacity
        style={[styles.input, styles.displayFlex, styles.center]}
        onPress={onPress}
      >
        <Text>{value && value[0]}</Text>
        <Image source={IconDropdownSolid} />
      </TouchableOpacity>

      {isDropdownVisible && (
        <ScrollView
          style={[
            styles.dropdown,
            {
              top: !isBottomPositioned ? height * 0.1 : - (height * 0.1) * 2,
            },
          ]}
        >
          {value.map((item, index) => (
            <TouchableOpacity
              onPress={() => onSelectDropdown(item)}
              key={index}
            >
              <Text style={styles.dropdownItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 15,
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
    flex: 1,
    height: height * 0.08,
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
  dropdown: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    zIndex: 1000,
    elevation: 3,
    borderRadius: width * 0.05,
    maxHeight: height * 0.2,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});

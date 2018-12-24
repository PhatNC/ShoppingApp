import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet
} from "react-native";
import { Icon, SearchBar } from "react-native-elements";

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }
  // this.props.onOpen()
  render() {
    const { rowContainer, logo } = topBarStyles;
    return (
      <View style={rowContainer}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        >
          <Icon name="menu" size={40} color="white" />
        </TouchableOpacity>
        <Text style={logo}>-Sweetie-</Text>
        <Icon name="donut-small" size={40} color="white" />
      </View>
    );
  }
}

const topBarStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    backgroundColor: "#000a12"
  },
  logo: { color: "#FFF", fontSize: 60, fontFamily: "Medinah" }
});

import React, { Component } from "react";
import {
  View,
  Platform,
  StatusBar,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Dimensions
} from "react-native";

import BG_IMAGE from "../media/img/logo.png";

export default class SplashScreen extends Component {
  componentDidMount() {
    if (Platform.OS === "ios") StatusBar.setHidden(true);
    else StatusBar.setHidden(false);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
          <ActivityIndicator
            color={"black"}
            size={Platform.OS === "ios" ? 1 : 50}
          />
        </ImageBackground>
      </View>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: "center",
    justifyContent: "center"
  }
});

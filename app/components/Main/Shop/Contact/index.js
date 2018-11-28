import React, { Component } from "react";
import { StyleSheet } from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class Contact extends Component {
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/Entypo";

export default class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textField}>
          <Text style={{ fontSize: 22 }}>CONTACT US</Text>

          <TextInput style={styles.formInput} placeholder="Name" />
          <TextInput style={styles.formInput} placeholder="Email" />
          <TextInput style={styles.formInput} placeholder="Phone" />
          <TextInput style={styles.formInput} placeholder="Type your message" />
          <Button buttonStyle={styles.button} title="Send" />
        </View>

        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />

        <View
          style={{
            flex: 0.7,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 16 }}>Phone: +84 966 999 666</Text>
          <Text style={{ fontSize: 16 }}>Email: contact@pantruc.com</Text>

          <View style={{ flexDirection: "row" }}>
            <Icon name="facebook-with-circle" size={28} />
            <Icon name="instagram-with-circle" size={28} />
            <Icon name="twitter-with-circle" size={28} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBDB"
  },
  textField: {
    flex: 2,
    padding: 10
  },
  formInput: {
    height: 32,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 16,
    margin: 5
  },
  button: {
    backgroundColor: "#0091EA",
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: -9,
    marginTop: 4
  },
  map: {
    flex: 1.5,
    marginHorizontal: 15
  }
});

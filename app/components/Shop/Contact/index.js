import React, { Component } from "react";
import { View, Text, Platform, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/Entypo";

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 10.7882565,
        longitude: 106.6970408,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  }

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       this.setState({
  //         region: {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           latitudeDelta: LATITUDE_DELTA,
  //           longitudeDelta: LONGITUDE_DELTA
  //         }
  //       });
  //     },
  //     error => console.log(error.message),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  //   this.watchID = navigator.geolocation.watchPosition(position => {
  //     this.setState({
  //       region: {
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         latitudeDelta: LATITUDE_DELTA,
  //         longitudeDelta: LONGITUDE_DELTA
  //       }
  //     });
  //   });
  // }

  // componentWillUnmount() {
  //   navigator.geolocation.clearWatch(this.watchID);
  // }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 80,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: "#000a12"
          }}
        >
          <Text
            style={{
              fontFamily: "Medinah",
              color: "#B10D65",
              fontSize: 40,
              color: "white"
            }}
          >
            Contacts Us
          </Text>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          region={this.state.region}
        >
          <MapView.Marker coordinate={this.state.region} />
        </MapView>

        {/* <View style={styles.textField}>
          <Text style={{ fontSize: 17, fontFamily: 'Sawarabi Mincho Medium' }}>CONTACT US</Text>

          <TextInput style={styles.formInput} placeholder="Name" />
          <TextInput style={styles.formInput} placeholder="Email" />
          <TextInput style={styles.formInput} placeholder="Phone" />
          <TextInput style={styles.formInput} placeholder="Type your message" />
          <Button buttonStyle={styles.button} title="Send" />
        </View> */}
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            // alignItems: "center",
            // padding: 5,
            backgroundColor: "black"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              paddingLeft: 25,
              paddingRight: 25
            }}
          >
            <Icon name="location-pin" size={20} color="white" />
            <Text style={{ fontSize: 18, color: "white", paddingLeft: 15 }}>
              70, Nguyễn Đình Chiểu, Da Kao, District 1, Ho Chi Minh City
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 2,
              paddingLeft: 25,
              paddingRight: 75
            }}
          >
            <Icon name="phone" size={20} color="white" />
            <Text style={{ fontSize: 18, color: "white", paddingLeft: 15 }}>
              +84 966 999 666
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 2,
              paddingLeft: 25,
              paddingRight: 75
            }}
          >
            <Icon name="mail" size={20} color="white" />
            <Text style={{ fontSize: 18, color: "white", paddingLeft: 15 }}>
              cmit@pantruc.com
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 50,
              paddingRight: 50,
              paddingBottom: 10,
              justifyContent: "space-evenly",
              padding: 5
            }}
          >
            <Icon name="facebook-with-circle" size={40} color="white" />
            <Icon name="instagram-with-circle" size={40} color="white" />
            <Icon name="twitter-with-circle" size={40} color="white" />
            <Icon name="pinterest-with-circle" size={40} color="white" />
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
    padding: 10,
    backgroundColor: "white"
  },
  formInput: {
    height: 32,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    paddingBottom: Platform.OS === "ios" ? 0 : 6,
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
    flex: 2
    // marginHorizontal: 15
  }
});

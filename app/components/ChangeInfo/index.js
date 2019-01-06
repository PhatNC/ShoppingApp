import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
  Dimensions,
  Image
} from "react-native";

import { Icon } from "react-native-elements";
import cat from "../../media/img/cat.png";

const { width, height } = Dimensions.get("window");

export default class ChangeInfo extends Component {
  constructor(props) {
    super(props);
    // const { name, address, phone } = props.user;
    this.state = {
      txtName: "Shin Seijuro",
      txtAddress: "shinseijuro123@gmail.com",
      txtPhone: "0123-456-798"
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={25}
            color="white"
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Account Information</Text>
          <View />
        </View>
        <View style={styles.body}>
          <View style={{ width, height: width / 2 }}>
            <ImageBackground
              source={cat}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000A12"
              }}
              opacity={0.7}
            />
            <View
              style={{
                backgroundColor: "white",
                height: 150,
                width: 150,
                borderRadius: 75,
                opacity: 0.9,
                position: "absolute",
                left: width / 2 - 75,
                top: width / 2 - 75,
                zIndex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10
              }}
            >
              <Image
                source={cat}
                style={{
                  height: 140,
                  width: 140,
                  borderRadius: 70
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              paddingTop: 75,
              padding: 20
            }}
          >
            <Text
              style={{
                fontFamily: "Medinah",
                color: "#B10D65",
                fontSize: 40,
                color: "black",
                textAlign: "center"
              }}
            >
              {this.props.authen.name}
            </Text>
            <View
              style={{
                margin: 10,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon name="mail" size={25} color="black" />
              <Text
                style={{
                  fontFamily: "Sawarabi Mincho Medium",
                  color: "#B10D65",
                  fontSize: 20,
                  color: "black",
                  marginLeft: 15
                }}
              >
                {this.props.authen.email}
              </Text>
            </View>
            <View
              style={{
                margin: 10,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon name="location-on" size={25} color="black" />
              <Text
                style={{
                  fontFamily: "Sawarabi Mincho Medium",
                  color: "#B10D65",
                  fontSize: 20,
                  color: "black",
                  marginLeft: 15
                }}
              >
                Address: {this.props.authen.address}
              </Text>
            </View>
            <View
              style={{
                margin: 10,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon name="call" size={25} color="black" />
              <Text
                style={{
                  fontFamily: "Sawarabi Mincho Medium",
                  color: "#B10D65",
                  fontSize: 20,
                  color: "black",
                  marginLeft: 15
                }}
              >
                {this.props.authen.phone}
              </Text>
            </View>
          </View>
          {/* <TextInput
            style={styles.textInput}
            // placeholder="Enter your name"
            autoCapitalize="none"
            value={this.props.authen.name}
            onChangeText={text => this.setState({ txtName: text })}
          />
          <TextInput
            style={styles.textInput}
            // placeholder="Enter your address"
            autoCapitalize="none"
            value={this.props.authen.email}
            onChangeText={text => this.setState({ txtAddress: text })}
          />
          <TextInput
            style={styles.textInput}
            // placeholder="Enter your phone number"
            autoCapitalize="none"
            value={this.props.authen.phone}
            onChangeText={text => this.setState({ txtPhone: text })}
          /> */}
          {/* <TouchableOpacity style={styles.signInContainer} onPress={() => { }}>
                        <Text style={styles.signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#000a12",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10
  }, // eslint-disable-line
  headerTitle: { fontFamily: "Medinah", color: "#fff", fontSize: 30 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 1, backgroundColor: "#F6F6F6" },
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    fontFamily: "Avenir",
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: "#000a12",
    borderWidth: 1
  },
  signInTextStyle: {
    color: "#FFF",
    fontFamily: "Avenir",
    fontWeight: "600",
    paddingHorizontal: 20
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: "#00C853",
    borderRadius: 20,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch"
  },
  signInStyle: {
    flex: 3,
    marginTop: 50
  }
});

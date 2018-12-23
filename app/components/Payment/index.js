import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ListView,
  Dimensions,
  TextInput
} from "react-native";

import RadioGroup from "react-native-radio-buttons-group";

import Swiper from "react-native-swiper";

import cake6 from "../../media/temp/cake6.jpg";
import cake7 from "../../media/temp/cake7.jpg";
import cake8 from "../../media/temp/cake8.jpg";
import cake9 from "../../media/temp/cake9.jpg";
import cake10 from "../../media/temp/cake10.jpg";
import cake11 from "../../media/temp/cake11.jpg";
import mastercard from "../../media/img/mastercard.png";
import visa from "../../media/img/visa.png";
import amex from "../../media/img/amex.png";
import discover from "../../media/img/discover.png";

import {
  Icon,
  Badge,
  Rating,
  Button,
  CheckBox,
  ButtonGroup
} from "react-native-elements";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import { styles } from "../../../styles/styles";
const { width, height } = Dimensions.get("window");

export default class Payment extends Component {
  constructor() {
    super();
    this.state = {
      isCredit: false,
      data: [
        {
          label: (
            <Text>
              <Text style={{ fontSize: 18, color: "#000a12" }}>
                COD (Cash on Delivery){"\n"}
              </Text>
              <Text style={{ fontSize: 15 }}>
                You have chosen to pay on delivery
              </Text>
            </Text>
          ),
          value: 0,
          color: "#0091EA"
        },
        {
          label: (
            <Text style={{ fontSize: 18, color: "#000a12" }}>
              CREDIT CARD{"\n"}
            </Text>
          ),
          value: 1,
          color: "#0091EA"
        }
      ]
    };
  }
  onPress = data => {
    let selectedButton = this.state.data.find(e => e.selected == true);
    this.setState({ data, isCredit: selectedButton.value == 1 ? true : false });
  };

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton
      ? selectedButton.value
      : this.state.data[0].label;
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Icon name="arrow-back" size={30} color="white" onPress={() => {}} />
          <Text style={styles.titleStyle}>PAYMENT</Text>
          <View />
        </View>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            padding: 20
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#43AF5C",
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 40,
              marginTop: 20
            }}
          >
            Your Payable Amount $27.42
          </Text>
          <View
            style={{
              marginBottom: 10,
              justifyContent: "space-between",
              flex: 1
            }}
          >
            <View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#000A12" }}
              >
                Choose your payment method
              </Text>
              <RadioGroup
                radioButtons={this.state.data}
                onPress={this.onPress}
              />
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Image
                  source={visa}
                  style={{
                    height: 30,
                    width: 60,
                    marginRight: 10,
                    resizeMode:'contain'
                  }}
                />
                <Image
                  source={mastercard}
                  style={{
                    height: 30,
                    width: 60,
                    marginRight: 10,
                    resizeMode:'contain'
                  }}
                />
                <Image
                  source={amex}
                  style={{
                    height: 30,
                    width: 60,
                    marginRight: 10,
                  }}
                />
                <Image
                  source={discover}
                  style={{
                    height: 30,
                    width: 60,
                    marginRight: 10,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: "space-between"
              }}
            >
              <TextInput
                style={{
                  height: 40,
                  backgroundColor: this.state.isCredit ? "#FFFFFF" : "#E0E0E0",
                  fontFamily: "Avenir",
                  paddingLeft: 20,
                  borderColor: "#000a12",
                  borderWidth: 1,
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                placeholder="Name on Credit Card"
                autoCapitalize="none"
                onChangeText={() => {}}
                editable={this.state.isCredit ? true : false}
              />
              <TextInput
                style={{
                  height: 40,
                  backgroundColor: this.state.isCredit ? "#FFFFFF" : "#E0E0E0",
                  fontFamily: "Avenir",
                  paddingLeft: 20,
                  borderColor: "#000a12",
                  borderWidth: 1,
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                placeholder="Card Number"
                autoCapitalize="none"
                onChangeText={() => {}}
                editable={this.state.isCredit ? true : false}
              />
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={{
                    flex: 1.5,
                    height: 40,
                    backgroundColor: this.state.isCredit
                      ? "#FFFFFF"
                      : "#E0E0E0",
                    fontFamily: "Avenir",
                    paddingLeft: 20,
                    borderColor: "#000a12",
                    borderWidth: 1,
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  placeholder="MM"
                  autoCapitalize="none"
                  onChangeText={() => {}}
                  editable={this.state.isCredit ? true : false}
                />
                <TextInput
                  style={{
                    flex: 1,
                    height: 40,
                    backgroundColor: this.state.isCredit
                      ? "#FFFFFF"
                      : "#E0E0E0",
                    fontFamily: "Avenir",
                    paddingLeft: 20,
                    borderColor: "#000a12",
                    borderWidth: 1,
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  placeholder="YYYY"
                  autoCapitalize="none"
                  onChangeText={() => {}}
                  editable={this.state.isCredit ? true : false}
                />
              </View>
              <TextInput
                style={{
                  height: 40,
                  backgroundColor: this.state.isCredit ? "#FFFFFF" : "#E0E0E0",
                  fontFamily: "Avenir",
                  paddingLeft: 20,
                  borderColor: "#000a12",
                  borderWidth: 1,
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                placeholder="CVV"
                autoCapitalize="none"
                onChangeText={() => {}}
                editable={this.state.isCredit ? true : false}
              />
            </View>
            <View
              style={{
                backgroundColor: "#0091EA",
                marginLeft: 10,
                marginRight: 10,
                height: 50,
                justifyContent: "center",
                paddingLeft: 40,
                paddingRight: 40,
                alignItems: "center"
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                PAY NOW
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8"
  },
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000a12"
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#E0E0E0"
  },
  backStyle: {
    width: 30,
    height: 30
  },
  productContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    borderTopColor: "#F0F0F0",
    borderBottomColor: "#FFF",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    borderWidth: 2
  },
  titleStyle: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 30,
    color: "white"
  },
  productImage: {
    width: 90,
    height: (90 * 452) / 361
  },
  productInfo: {
    justifyContent: "space-between",
    marginLeft: 15,
    flex: 1
  },
  lastRowInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  txtName: {
    fontFamily: "Avenir",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  txtPrice: {
    fontFamily: "Avenir",
    color: "#B10D65"
  },
  txtMaterial: {
    fontFamily: "Avenir"
  },
  txtColor: {
    fontFamily: "Avenir"
  },
  txtShowDetail: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 15
  },
  body: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: "wrap"
    // paddingBottom: 5
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

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

import Swiper from "react-native-swiper";

import cake6 from "../../media/temp/cake6.jpg";
import cake7 from "../../media/temp/cake7.jpg";
import cake8 from "../../media/temp/cake8.jpg";
import cake9 from "../../media/temp/cake9.jpg";
import cake10 from "../../media/temp/cake10.jpg";
import cake11 from "../../media/temp/cake11.jpg";

import { Icon, Badge, Rating, Button, CheckBox } from "react-native-elements";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import { styles } from "../../../styles/styles";
const { width, height } = Dimensions.get("window");

export default class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }

  componentWillMount() {}

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Icon name="arrow-back" size={30} color="white" onPress={() => {}} />
          <Text style={styles.titleStyle}>CHECK OUT</Text>
          <View />
        </View>
        <View style={{ padding: 5, backgroundColor: "white", flex: 1 }}>
          <View>
            <ScrollView style={{ margin: 10 }} horizontal>
              <Image
                source={cake8}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  margin: 5,
                  marginRight: 15
                }}
              />
              <Image
                source={cake9}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  margin: 5,
                  marginRight: 15
                }}
              />
              <Image
                source={cake10}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  margin: 5,
                  marginRight: 15
                }}
              />
              <Image
                source={cake11}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  margin: 5,
                  marginRight: 15
                }}
              />
              <Image
                source={cake6}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  margin: 5,
                  marginRight: 15
                }}
              />
            </ScrollView>
          </View>
          <View
            style={{
              borderColor: "#00E676",
              borderWidth: 2,
              margin: 10,
              padding: 10,
              paddingBottom: 20,
              height: 170
            }}
          >
            <Icon
              name="close"
              iconStyle={{ position: "absolute", top: 0, right: 0 }}
            />
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#00E676",
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: 2
                }}
              >
                Applied to object coupons
              </Text>
              <Text style={{ color: "#233f51", fontSize: 18, padding: 2 }}>
                PROMOCODE
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  flex: 3,
                  height: 40,
                  backgroundColor: "#FFFFFF",
                  fontFamily: "Avenir",
                  paddingLeft: 20,
                  borderColor: "#000a12",
                  borderWidth: 1,
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                placeholder="Enter Coupon Code"
                autoCapitalize="none"
                onChangeText={() => {}}
              />
              <Button
                containerViewStyle={{
                  flex: 2
                }}
                buttonStyle={{
                  height: 40,
                  backgroundColor: "#43AF5C",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                title="APPLY"
                onPress={() => {}}
              />
            </View>
          </View>
          {/* <View
            style={{
              borderColor: "#00E676",
              borderWidth: 2,
              margin: 10,
              padding: 10,
              paddingBottom: 20,
              justifyContent: "space-between",
              flex: 1
            }}
          >
            <Icon
              name="close"
              iconStyle={{ position: "absolute", top: 0, right: 0 }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{ color: "#00E676", fontSize: 20, fontWeight: "bold" }}
              >
                Applied to object coupons
              </Text>
              <Text style={{ color: "#233f51", fontSize: 18 }}>PROMOCODE</Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10
              }}
            >
              <TextInput
                style={{
                  flex: 3,
                  height: 40,
                  backgroundColor: "#FFFFFF",
                  fontFamily: "Avenir",
                  paddingLeft: 20,
                  borderColor: "#000a12",
                  borderWidth: 1,
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                placeholder="Enter Coupon Code"
                autoCapitalize="none"
                onChangeText={() => {}}
              />
              <Button
                containerViewStyle={{
                  flex: 2
                }}
                buttonStyle={{
                  height: 40,
                  backgroundColor: "#43AF5C",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                title="APPLY"
                onPress={() => {}}
              />
            </View>
          </View>
    */}
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
    backgroundColor: "#D3D3D3"
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

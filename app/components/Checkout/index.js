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
import { cartReducer } from "../../containers/CartScreen/selector";
// import { styles } from "../../../styles/styles";
const { width, height } = Dimensions.get("window");

export default class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Icon name="arrow-back" size={30} color="white" onPress={() => {}} />
          <Text style={styles.titleStyle}>Check Out </Text>
          <View />
        </View>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            padding: 20,
            paddingTop: 10,
            justifyContent: "space-between"
          }}
        >
          <View style={{ marginBottom: 5 }}>
            <ScrollView style={{ paddingTop: 5, paddingBottom: 5 }} horizontal>
              {this.props.navigation.state.params.cart.cart.map(item => (
                <Image
                  source={{ uri: item.image[0] }}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    marginRight: 10
                  }}
                />
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              borderColor: "#43AF5C",
              borderWidth: 2,
              padding: 10,
              paddingBottom: 10,
              flex: 1
            }}
          >
            <Icon
              name="close"
              iconStyle={{ position: "absolute", top: 0, right: 0 }}
            />
            <View
              style={{
                flex: 1,
                marginBottom: 5
              }}
            >
              <Text
                style={{
                  color: "#43AF5C",
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                Applied to object coupons
              </Text>
              <Text style={{ color: "#0091EA", fontSize: 18 }}>PROMOCODE</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
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
          {/* 
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="check-circle"
              size={30}
              color="#43AF5C"
              containerStyle={{ margin: 5 }}
            />
            <Text
              style={{
                color: "#43AF5C",
                textAlign: "center",
                fontSize: 17
              }}
            >
              You recieve a discount of 5%
            </Text>
          </View> */}

          <View
            style={{
              borderColor: "#0091EA",
              borderWidth: 2,
              padding: 50,
              paddingBottom: 5,
              paddingTop: 5,
              flex: 1,
              marginTop: 10
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#233f51" }}
              >
                Subtotal
              </Text>
              <Text style={{ fontSize: 15 }}>
                ${this.props.navigation.state.params.cart.totalPrice}.00
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#233f51" }}
              >
                Tax
              </Text>
              <Text style={{ fontSize: 15 }}>$0.0</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#233f51" }}
              >
                Shipping
              </Text>
              <Text style={{ fontSize: 15 }}>Free</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#233f51" }}
              >
                Coupons
              </Text>
              <Text style={{ fontSize: 15, color: "#0091EA" }}>-$0.0</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#0091EA",
              marginTop: 5,
              height: 40,
              justifyContent: "space-between",
              paddingLeft: 40,
              paddingRight: 40,
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              TOTAL
            </Text>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
              ${this.props.navigation.state.params.cart.totalPrice}.00
            </Text>
          </View>
          <View
            style={{
              borderColor: "#000A12",
              borderTopWidth: 2,
              padding: 10,
              marginTop: 10,
              flex: 1
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              <Text
                style={{ fontSize: 20, color: "#000A12", fontWeight: "bold" }}
              >
                DELIVERY AT
              </Text>
              <Text
                style={{ fontSize: 20, color: "#000A12", fontWeight: "bold" }}
              >
                Delivery time 45 min
              </Text>
            </View>
            <View
              style={{
                flex: 1
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {this.props.navigation.state.params.cart.authen.name}
              </Text>
              <Text style={{ fontSize: 18 }}>
                {this.props.navigation.state.params.cart.authen.address}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#000A12",
              // marginLeft: 10,
              // marginRight: 10,
              height: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() =>
              this.props.navigation.navigate("PAYMENT", {
                onCheckout: checkoutInfo =>
                  this.props.navigation.state.params.onCheckout(checkoutInfo),
                checkoutInfo: this.props.navigation.state.params.cart
              })
            }
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              CHECK OUT
            </Text>
          </TouchableOpacity>
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
    fontFamily: "Medinah",
    color: "#B10D65",
    fontSize: 40,
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

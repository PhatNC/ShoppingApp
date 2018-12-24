import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert
} from "react-native";

import { Button, Icon } from "react-native-elements";

import { styles } from "../../../styles/styles";
import { cartStyles } from "./styles";

import CartItem from "./CartItem";

export default class CartView extends Component {
  onCheckOut = cart => {
    if (cart.cart.length > 0) {
      this.props.checkoutRequest(cart);
      Alert.alert(
        "Successfully!",
        "Successful transaction.",
        [{ text: "OK", onPress: () => this.props.removeAllProductFromCart() }],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Notification",
        "There is no item in cart",
        [{ text: "OK", onPress: () => console.log("OK Pressed!") }],
        { cancelable: false }
      );
    }
  };

  render() {
    const {
      cart,
      navigation,
      removeProductFromCart,
      updateCountNumberProduct
    } = this.props;
    const totalPrice = cart.reduce(
      (acc, cur) => (acc += parseFloat(cur.price) * parseInt(cur.count)),
      0
    );

    if (!this.props.authen._id) {
      this.props.removeAllProductFromCart();
      return (
        <View style={styles.wrapper}>
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
              Shopping Cart
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Icon name="security" size={150} color="#90A4AE" />
            <Text style={{ color: "#90A4AE", fontSize: 20 }}>
              Please login to use this feature
            </Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.wrapper}>
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
            Shopping Cart
          </Text>
        </View>
        <ScrollView>
          {cart.map(item => (
            <CartItem
              key={item._id}
              removeItem={removeProductFromCart}
              updateCount={updateCountNumberProduct}
              item={item}
              navigation={navigation}
            />
          ))}
        </ScrollView>
        <View style={cartStyles.checkoutContainer}>
          <View style={cartStyles.checkoutTextContainer}>
            <Text style={styles.contentText}>Total Price</Text>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.priceTotal}>{totalPrice}$</Text>
              <Text style={styles.contentSmallText}>Included VAT</Text>
            </View>
          </View>
          <Button
            buttonStyle={cartStyles.checkoutButton}
            title="CHECKOUT"
            disabledStyle={cartStyles.checkoutDiabledButton}
            onPress={() =>
              this.onCheckOut({
                cart: this.props.cart,
                totalPrice,
                authen: this.props.authen,
                quantity: this.props.cart.length
              })
            }
          />
        </View>
      </View>
    );
  }
}

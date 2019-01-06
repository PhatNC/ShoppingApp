import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { createStackNavigator } from "react-navigation";

import CartView from "../../../containers/CartScreen";
import ProductDetail from "../../../containers/ProductDetailView";
import Checkout from "../../Checkout";
import Payment from "../../Payment";

export default class Cart extends Component {
  render() {
    // console.log(this.props);
    const Cart = CartNavigator({ authen: this.props });
    return <Cart />;
  }
}

const CartNavigator = value =>
  createStackNavigator(
    {
      CART_VIEW: {
        screen: props => <CartView {...props} {...value} />
      },
      PRODUCT_DETAIL: {
        screen: props => <ProductDetail {...props} {...value} />
      },
      CHECK_OUT: {
        screen: props => <Checkout {...props} {...value} />
      },
      PAYMENT: {
        screen: props => <Payment {...props} {...value} />
      }
    },
    {
      initialRouteName: "CART_VIEW",
      headerMode: "none"
    }
  );

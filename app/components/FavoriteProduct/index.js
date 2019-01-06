import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { createStackNavigator } from "react-navigation";

import FavorProduct from "./FavorProduct";
import ProductDetail from "../../containers/ProductDetailView";

export default class FavoriteProduct extends Component {
  render() {
    const MAINJSX = OrderNavigator({
      parentNavigation: this.props.navigation,
      authen: this.props.authen
    });
    return <MAINJSX />;
  }
}

const OrderNavigator = value =>
  createStackNavigator(
    {
      FAVORITE: {
        screen: props => <FavorProduct {...props} {...value} />
      },
      PRODUCT_DETAIL: {
        screen: props => <ProductDetail {...props} {...value} />
      }
    },
    {
      initialRouteName: "FAVORITE",
      headerMode: "none"
    }
  );

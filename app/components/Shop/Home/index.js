import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { createStackNavigator } from "react-navigation";

import HomeView from "./HomeView";
import ListProduct from "../../../containers/ListProduct";
import ProductDetail from "../../../containers/ProductDetailView";

export default class Home extends Component {
  render() {
    const MAINJSX = HomeNavigator({
      parentNavigation: this.props.navigation
    });
    return <MAINJSX />;
  }
}

const HomeNavigator = value =>
  createStackNavigator(
    {
      HOME_VIEW: {
        screen: props => <HomeView {...props} {...value} />
      },
      LIST_PRODUCT: { screen: ListProduct },
      PRODUCT_DETAIL: { screen: ProductDetail }
    },
    {
      initialRouteName: "HOME_VIEW",
      headerMode: "none"
    }
  );

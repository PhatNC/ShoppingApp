import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { createStackNavigator } from "react-navigation";

import OrderHistory from "../../containers/OrderHistoryView";
import TrackOrder from "../TrackOrder";

export default class Order extends Component {
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
      MY_ORDER: {
        screen: props => <OrderHistory {...props} {...value} />
      },
      TRACK_ORDER: {
        screen: props => <TrackOrder {...props} {...value} />
      }
    },
    {
      initialRouteName: "MY_ORDER",
      headerMode: "none"
    }
  );

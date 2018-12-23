import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import Collection from "./Collection";
import Category from "./Category";
import TopProduct from "../../../containers/Home/TopProduct";
import { styles } from "../../../styles/styles";
import TopBar from "../TopBar";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TopBar />
        <ScrollView style={styles.tabContainer}>
          {/* <Collection navigation={this.props.navigation} /> */}
          <Category navigation={this.props.navigation} />
          <TopProduct navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

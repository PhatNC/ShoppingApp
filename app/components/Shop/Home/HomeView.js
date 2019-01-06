import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, RefreshControl } from "react-native";

import Collection from "./Collection";
import Category from "./Category";
import TopProduct from "../../../containers/Home/TopProduct";
import { styles } from "../../../styles/styles";
import TopBar from "../TopBar";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 700);
  };
  
  render() {
    return (
      <View style={styles.wrapper}>
        <TopBar navigation={this.props.parentNavigation} />
        <ScrollView
          style={styles.tabContainer}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          {this.state.refreshing ? (
            <View />
          ) : (
            <View>
              <Category navigation={this.props.navigation} />
              <TopProduct navigation={this.props.navigation} />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

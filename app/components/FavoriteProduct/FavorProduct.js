import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  ListView,
  ImageBackground,
  Image,
  RefreshControl
} from "react-native";

import { Icon, Button, Badge } from "react-native-elements";
import List from "../../containers/FavoriteProductView";

export default class FavorProduct extends Component {
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
    }, 1500);
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={30}
            color="white"
            onPress={() => {
              this.props.parentNavigation.goBack();
            }}
          />
          <Text
            style={{
              fontFamily: "Medinah",
              color: "#B10D65",
              fontSize: 35,
              color: "white"
            }}
          >
            My Favorite
          </Text>
          <View />
        </View>
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
              <List
                id={this.props.authen._id}
                navigation={this.props.navigation}
                _onRefresh={this._onRefresh}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000a12"
  }, // eslint-disable-line
  headerTitle: { fontFamily: "Avenir", color: "#fff", fontSize: 20 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 10, backgroundColor: "#F6F6F6" },
  orderRow: {
    height: width / 3,
    backgroundColor: "#FFF",
    margin: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#DFDFDF",
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: "space-around"
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text1: {
    color: "#9A9A9A",
    fontWeight: "bold"
  }
});

import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { Icon, SearchBar } from "react-native-elements";

import { styles } from "../../../styles/styles";
import SearchItem from "./SearchItem";

export default class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleQueryChange = query => this.setState({ query: query });

  handleSearchCancel = () => this.handleQueryChange("");

  handleSearchClear = () => this.handleQueryChange("");

  componentDidMount() {
    this.refs.searchBar.focus();
  }

  onSearch() {
    this.refs.searchBar.unFocus;
    this.props.getProductRequest({ name: this.state.query });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
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
            Search
          </Text>
        </View>
        <SearchBar
          ref="searchBar"
          round
          // clearIcon={{ color: 'red' }}
          searchIcon // You could have passed `null` too
          // onChangeText={someMethod}
          // onClear={someMethod}
          icon={{ color: "#86939e", style: { fontSize: 17 } }}
          showLoading
          platform="android"
          containerStyle={{
            backgroundColor: "#000a12",
            borderTopWidth: 0,
            borderBottomWidth: 0
          }}
          placeholder="What do you want to buy?"
          clearIcon
          onChangeText={this.handleQueryChange}
          onCancel={this.handleSearchCancel}
          onClear={this.handleSearchClear}
          onSearchButtonPress={() => this.refs.searchBar.unFocus}
          onSubmitEditing={() => this.onSearch()}
        />
        {this.props.products.length > 0 ? (
          <ScrollView>
            {this.props.products.map(item => (
              <SearchItem
                key={item._id}
                item={item}
                navigation={this.props.navigation}
              />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.wrapper}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon name="search" size={150} color="#90A4AE" />
              <Text style={{ color: "#90A4AE", fontSize: 20 }}>
                There is no item.
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

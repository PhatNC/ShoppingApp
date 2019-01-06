import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from "../../../styles/styles";
import { cartStyles } from "./styles";

export default class CartItem extends Component {
  incQuantity = () => {
    const { item } = this.props;
    this.props.updateCount({ product: item, count: item.count + 1 });
  };

  desQuantity = () => {
    const { item } = this.props;
    const count = item.count > 1 ? item.count - 1 : 1;

    this.props.updateCount({ product: item, count });
  };

  goDetail() {
    this.props.navigation.navigate("PRODUCT_DETAIL", this.props.item);
  }

  removeproduct = () => {
    this.props.removeItem(this.props.item._id);
  };

  render() {
    const { item } = this.props;

    return (
      <View style={styles.productContainer}>
        <Image
          source={{ uri: `${item.image[0]}` }}
          style={styles.productImage}
        />
        {/* <Image source={cake4} style={styles.productImage} /> */}
        <View style={cartStyles.mainRight}>
          <View style={cartStyles.firstRow}>
            <View style={cartStyles.titleView}>
              <Text style={styles.titleText} numberOfLines={2}>
                {item.name}
              </Text>
            </View>
            <TouchableOpacity onPress={this.removeproduct}>
              <Icon name="close" size={25} color="#969696" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.contentText}>Delivery in 2h</Text>
          </View>
          <View>
            <Text style={styles.priceText}>{item.price},00$</Text>
          </View>
          <View style={cartStyles.lastRow}>
            <View style={cartStyles.quantityContainer}>
              <TouchableOpacity
                disabled={item.count <= 1}
                style={cartStyles.quantityButton}
                activeOpacity={1}
                onPress={this.desQuantity}
              >
                <Icon name="minus" size={15} color="#37474F" />
              </TouchableOpacity>
              <View style={cartStyles.quantityText}>
                <Text>{item.count}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                style={cartStyles.quantityButton}
                onPress={this.incQuantity}
              >
                <Icon name="plus" size={15} color="#37474F" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.goDetail()}>
              <Text style={styles.highlightText}>Show more detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

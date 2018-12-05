import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from '../../../../styles/styles';
import { cartStyles } from './styles';

import cake1 from '../../../../media/temp/cake1.jpg';
import cake2 from '../../../../media/temp/cake2.jpg';
import cake3 from '../../../../media/temp/cake3.jpg';
import cake4 from '../../../../media/temp/cake4.jpg';
import cake5 from '../../../../media/temp/cake5.jpg';

import CartItem from './CartItem';

export default class CartView extends Component {
  render() {
    // console.log('===========Cart View=============');
    // console.log(this.props.navigation);
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <CartItem src={cake1} navigation={this.props.navigation} />
          <CartItem src={cake2} navigation={this.props.navigation} />
          <CartItem src={cake3} navigation={this.props.navigation} />
          <CartItem src={cake4} navigation={this.props.navigation} />
          <CartItem src={cake5} navigation={this.props.navigation} />
        </ScrollView>
        <View style={cartStyles.checkoutContainer}>
          <View style={cartStyles.checkoutTextContainer}>
            <Text style={styles.contentText}>Total Price</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.priceTotal}>10.000$</Text>
              <Text style={styles.contentText}>Included VAT</Text>
            </View>
          </View>
          <Button
            buttonStyle={cartStyles.checkoutButton}
            title="CHECKOUT"
          />
        </View>
      </View >
    );
  }
}


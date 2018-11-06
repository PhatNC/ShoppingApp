import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import CartView from './CartView';
import ProductDetail from '../ProductDetail'

export default class Cart extends Component {
    render() {
        return (
            <CartNavigator />
        )
    }
}

const CartNavigator = createStackNavigator(
    {
        CART_VIEW: { screen: CartView },
        PRODUCT_DETAIL: { screen: ProductDetail }
    },
    {
        initialRouteName: 'CART_VIEW',
        headerMode: 'none'
    }
);
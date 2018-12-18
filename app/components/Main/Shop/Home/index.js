import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import HomeView from './HomeView';
import ListProduct from '../../../../containers/ListProduct';
import ProductDetail from '../../../../containers/ProductDetailView'


export default class Home extends Component {
  render() {
    return (
      <HomeNavigator />
    )
  }
}

const HomeNavigator = createStackNavigator(
  {
    HOME_VIEW: { screen: HomeView },
    LIST_PRODUCT: { screen: ListProduct },
    PRODUCT_DETAIL: { screen: ProductDetail }
  },
  {
    initialRouteName: 'HOME_VIEW',
    headerMode: 'none'
  }
);

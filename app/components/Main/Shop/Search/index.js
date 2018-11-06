import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import SearchView from './SearchView';
import ProductDetail from '../ProductDetail'

export default class Search extends Component {
    render() {
        return (
            <SearchNavigator />
        )
    }
}

const SearchNavigator = createStackNavigator(
    {
        SEARCH_VIEW: { screen: SearchView },
        PRODUCT_DETAIL: { screen: ProductDetail }
    },
    {
        initialRouteName: 'SEARCH_VIEW',
        headerMode: 'none'
    }
);

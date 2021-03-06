import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import SearchView from '../../../containers/SeachView';
import ProductDetail from '../../../containers/ProductDetailView'

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

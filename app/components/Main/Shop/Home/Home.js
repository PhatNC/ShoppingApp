import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProduct'


export default class Home extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#DBDBDB', padding: 5 }}>
                <Collection />
                <Category />
                <TopProduct />
            </ScrollView>
        )
    }
}

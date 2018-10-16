import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Collection from './Collection'
import Category from './Category'


export default class Home extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#DBDBDB' }}>
                <Collection />
                <Category />
                <Collection />
            </View>
        )
    }
}

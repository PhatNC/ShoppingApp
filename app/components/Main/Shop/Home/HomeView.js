import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import Collection from './Collection'
import Category from './Category'
import TopProduct from '../../../../containers/Home/TopProduct'


export default class Home extends Component {
    render() {
        // console.log('=======================HOME VIEW===============================');
        // console.log(this.props);
        // console.log(this.state)
        // console.log('======================================================');
        return (
            <ScrollView style={{ backgroundColor: '#DBDBDB', padding: 5, flex: 1 }}>
                <Collection navigation={this.props.navigation} />
                <Category navigation={this.props.navigation} />
                <TopProduct navigation={this.props.navigation} />
            </ScrollView>
        )
    }
}

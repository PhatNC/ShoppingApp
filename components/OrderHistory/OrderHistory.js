import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class OrderHistory extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#B4B4B4' }}>
                <Text>OrderHistory Component</Text>
                <TouchableOpacity onPress={() => { this.props.navigation.pop() }}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
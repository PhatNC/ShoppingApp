import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
export default class Authentication extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text>Authentication Component</Text>
                <TouchableOpacity onPress={() => { this.props.navigation.pop() }}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
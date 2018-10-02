import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class ChangeInfo extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text>ChangeInfo Component</Text>
                <TouchableOpacity onPress={() => { this.props.navigation.pop() }}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
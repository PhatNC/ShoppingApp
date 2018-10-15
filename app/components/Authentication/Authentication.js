import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';

const { height } = Dimensions.get('window');

export default class Authentication extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text>Authentication Component</Text>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
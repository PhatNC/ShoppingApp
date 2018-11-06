import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import { Icon, Button, Container, Header, Content, Left } from 'native-base';

export default class ProductDetail extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#607D8B' }}>
                <Text>
                    Product Detail Component
                </Text>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </Container>
        )
    }
}
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import { Icon, Button, Container, Header, Content, Left } from 'native-base';

export default class Cart extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#607D8B' }}>
                <Text>
                    Cart Component
                </Text>
            </Container>
        )
    }
}

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import { Icon, Button, Container, Header, Content, Left } from 'native-base';

export default class Home extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#FFC107' }}>
                <Text>
                    Home Component
                </Text>
            </Container>
        )
    }
}

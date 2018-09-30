import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

export default class Shop extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Text>
                                Menu
                        </Text>
                        </TouchableOpacity>
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1
                }}>
                    <Text>
                        Shop Component
                    </Text>
                </Content>
            </Container>
        )
    }
}

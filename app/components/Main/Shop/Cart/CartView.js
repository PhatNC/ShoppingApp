import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import { Icon, Button, Container, Header, Content, Left } from 'native-base';

export default class CartView extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#607D8B' }}>
        <Text>
          CartView Component
                </Text>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('PRODUCT_DETAIL') }}>
          <Text>Go to Detail Product</Text>
        </TouchableOpacity>
      </Container>
    )
  }
}
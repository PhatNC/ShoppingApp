import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import cake1 from '../../../media/temp/cake1.jpg';

const { height } = Dimensions.get('window');

export default class Collection extends Component {
  render() {
    const { wrapper, textStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={textStyle}>CAKE COLLECTION</Text>
        </View>
        <TouchableOpacity
          style={{ flex: 5 }}
          onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}
          activeOpacity={1}
        >
          <Image source={cake1} style={{ height: '100%', width: '100%' }} />
        </TouchableOpacity>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.38,
    backgroundColor: '#FFF',
    margin: 5,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 15,
    color: '#AFAEAF'
  }
})
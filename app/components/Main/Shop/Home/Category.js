import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg'
import maxiIcon from '../../../../media/temp/maxi.jpg'
import partyIcon from '../../../../media/temp/party.jpg'

const { height } = Dimensions.get('window');

export default class Category extends Component {
  render() {
    const { wrapper, textStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={textStyle}>SPRING COLLECTION</Text>
        </View >
        <View style={{ flex: 4 }}>
          <Swiper >
            <Image source={littleIcon} style={{ height: '100%', width: '100%' }} />
            <Image source={maxiIcon} style={{ height: '100%', width: '100%' }} />
            <Image source={partyIcon} style={{ height: '100%', width: '100%' }} />
          </Swiper>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.3,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 20,
    color: '#AFAEAF'
  }
})
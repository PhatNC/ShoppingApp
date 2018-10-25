import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg'
import maxiIcon from '../../../../media/temp/maxi.jpg'
import partyIcon from '../../../../media/temp/party.jpg'

const { height, width } = Dimensions.get('window');

export default class Category extends Component {
  render() {
    const { wrapper, textStyle, imageStyle, titleStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={textStyle}>LIST OF CATEGORY</Text>
        </View >
        <View style={{ flex: 4, justifyContent: 'flex-end' }}>
          <Swiper
            showsButtons={true}
            autoplay={true}
            autoplayTimeout={5}
          >
            <Image source={maxiIcon} style={imageStyle} />
            <Image source={littleIcon} style={imageStyle} />
            <Image source={partyIcon} style={imageStyle} />
            <Image source={partyIcon} style={imageStyle} />
          </Swiper>
        </View>
      </View>
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
    fontSize: 20,
    color: '#AFAEAF'
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 15
  }
})
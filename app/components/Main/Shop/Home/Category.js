import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import cake1 from '../../../../media/temp/cake1.jpg';
import cake2 from '../../../../media/temp/cake2.jpg';
import cake3 from '../../../../media/temp/cake3.jpg';

import { styles } from '../../../../styles/styles';

const { height, width } = Dimensions.get('window');

export default class Category extends Component {
  render() {
    const { wrapper, imageStyle } = categoryStyles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.titleText}>List Of Categories</Text>
        </View >
        <View style={{ flex: 5, justifyContent: 'flex-end' }}>
          <Swiper
            //showsButtons={true}
            autoplay={true}
            autoplayTimeout={5}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LIST_PRODUCT')}
              activeOpacity={1}
            >
              <Image source={cake1} style={imageStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LIST_PRODUCT')}
              activeOpacity={1}
            >
              <Image source={cake2} style={imageStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LIST_PRODUCT')}
              activeOpacity={1}
            >
              <Image source={cake3} style={imageStyle} />
            </TouchableOpacity>
          </Swiper>
        </View>
      </View>
    )
  }
}

const categoryStyles = StyleSheet.create({
  wrapper: {
    height: height * 0.38,
    backgroundColor: '#FFF',
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    elevation: 3,
    marginBottom: 10,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
})
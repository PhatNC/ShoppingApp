import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';
import sp5 from '../../../../media/temp/sp5.jpeg';

import cake1 from '../../../../media/temp/cake1.jpg';
import cake2 from '../../../../media/temp/cake2.jpg';
import cake3 from '../../../../media/temp/cake3.jpg';
import cake4 from '../../../../media/temp/cake4.jpg';
import cake5 from '../../../../media/temp/cake5.jpg';

const { height, width } = Dimensions.get('window');

export default class TopProduct extends Component {
  render() {
    const {
      // container, body,
      // titleText, titleContainer,
      // productImage, productContainer
      container, titleContainer, title,
      body, productContainer, productImage,
      produceName, producePrice,
    } = styles;
    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>TOP PRODUCT</Text>
        </View >
        <View style={body} >
          <View style={productContainer}>
            <Image source={cake1} style={productImage} />
            <Text style={produceName} >PRODUCT NAME</Text>
            <Text style={producePrice}>PRODUCT COST</Text>
          </View>
          <View style={productContainer}>
            <Image source={cake2} style={productImage} />
            <Text style={produceName} >PRODUCT NAME</Text>
            <Text style={producePrice}>PRODUCT COST</Text>
          </View>
          <View style={productContainer}>
            <Image source={cake3} style={productImage} />
            <Text style={produceName} >PRODUCT NAME</Text>
            <Text style={producePrice}>PRODUCT COST</Text>
          </View>
          <View style={productContainer}>
            <Image source={cake4} style={productImage} />
            <Text style={produceName} >PRODUCT NAME</Text>
            <Text style={producePrice}>PRODUCT COST</Text>
          </View>
          <View style={productContainer}>
            <Image source={cake5} style={productImage} />
            <Text style={produceName} >PRODUCT NAME</Text>
            <Text style={producePrice}>PRODUCT COST</Text>
          </View>
        </View>
      </View>
    )
  }
}

const produceWidth = (width - 60) / 2;
const productImageHeight = (produceWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 5,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  titleContainer: {
    height: 40,
    justifyContent: 'center',
  },
  title: {
    color: '#D3D3CF',
    fontSize: 15
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 5
  },
  productContainer: {
    width: produceWidth,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  productImage: {
    width: produceWidth,
    height: productImageHeight
  },
  produceName: {
    marginVertical: 5,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#D3D3CF',
    fontWeight: '500'
  },
  producePrice: {
    marginBottom: 5,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#662F90'
  }
});
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

import { Icon, Button } from 'react-native-elements';
import AntIcon from "react-native-vector-icons/AntDesign";

import { styles } from '../../../../styles/styles';

import cake1 from '../../../../media/temp/cake1.jpg';
import cake2 from '../../../../media/temp/cake2.jpg';
import cake3 from '../../../../media/temp/cake3.jpg';
import cake4 from '../../../../media/temp/cake4.jpg';
import cake5 from '../../../../media/temp/cake5.jpg';

export default class CartView extends Component {
  render() {
    return (
      <View style={cartStyles.wrapper}>
        <ScrollView
          style={cartStyles.main}>
          {/* Product */}
          <View style={cartStyles.productStyle}>
            <Image source={cake1} style={cartStyles.productImage} />
            <View style={cartStyles.mainRight}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.titleText}>Choco Cake</Text>
                <Icon
                  name='close'
                  size={25} color='#969696'
                />
              </View>
              <View>
                <Text style={styles.priceText}>100$</Text>
              </View>
              <View style={cartStyles.productController}>
                <View style={cartStyles.numberOfProduct}>
                  <TouchableOpacity onPress={() => alert('Decreate Quantity')}>
                    <AntIcon
                      name='minussquare'
                      size={25} color='black'
                    />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity onPress={() => alert('Increate quantity')}>
                    <AntIcon
                      name='plussquare'
                      size={25} color='black'
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={cartStyles.showDetailContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.highlightText}>Show Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Product */}
          <View style={cartStyles.productStyle}>
            <Image source={cake2} style={cartStyles.productImage} />
            <View style={cartStyles.mainRight}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.titleText}>Choco Cake</Text>
                <Icon
                  name='close'
                  size={25} color='#969696'
                />
              </View>
              <View>
                <Text style={styles.priceText}>100$</Text>
              </View>
              <View style={cartStyles.productController}>
                <View style={cartStyles.numberOfProduct}>
                  <TouchableOpacity onPress={() => alert('Decreate Quantity')}>
                    <AntIcon
                      name='minussquare'
                      size={25}
                      color='black' />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity onPress={() => alert('Increate quantity')}>
                    <AntIcon
                      name='plussquare'
                      size={25} color='black'
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={cartStyles.showDetailContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.highlightText}>Show Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Product */}
          <View style={cartStyles.productStyle}>
            <Image source={cake3} style={cartStyles.productImage} />
            <View style={cartStyles.mainRight}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.titleText}>Choco Cake</Text>
                <TouchableOpacity onPress={() => alert('Remove product')}>
                  <Icon
                    name='close'
                    size={25} color='#969696'
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.priceText}>100$</Text>
              </View>
              <View style={cartStyles.productController}>
                <View style={cartStyles.numberOfProduct}>
                  <TouchableOpacity onPress={() => alert('Decreate Quantity')}>
                    <AntIcon
                      name='minussquare'
                      size={25}
                      color='black' />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity onPress={() => alert('Increate quantity')}>
                    <AntIcon
                      name='plussquare'
                      size={25} color='black'
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={cartStyles.showDetailContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.highlightText}>Show Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Product */}
          <View style={cartStyles.productStyle}>
            <Image source={cake4} style={cartStyles.productImage} />
            <View style={cartStyles.mainRight}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.titleText}>Choco Cake</Text>
                <Icon
                  name='close'
                  size={25} color='#969696'
                />
              </View>
              <View>
                <Text style={styles.priceText}>100$</Text>
              </View>
              <View style={cartStyles.productController}>
                <View style={cartStyles.numberOfProduct}>
                  <TouchableOpacity onPress={() => alert('Decreate Quantity')}>
                    <AntIcon
                      name='minussquare'
                      size={25} color='black'
                    />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity onPress={() => alert('Increate quantity')}>
                    <AntIcon
                      name='plussquare'
                      size={25} color='black'
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={cartStyles.showDetailContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.highlightText}>Show Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Product */}
          <View style={cartStyles.productStyle}>
            <Image source={cake5} style={cartStyles.productImage} />
            <View style={cartStyles.mainRight}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.titleText}>Choco Cake</Text>
                <Icon
                  name='close'
                  size={25} color='#969696'
                />
              </View>
              <View>
                <Text style={styles.priceText}>100$</Text>
              </View>
              <View style={cartStyles.productController}>
                <View style={cartStyles.numberOfProduct}>
                  <TouchableOpacity onPress={() => alert('Decreate Quantity')}>
                    <AntIcon
                      name='minussquare'
                      size={25}
                      color='black' />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity onPress={() => alert('Increate quantity')}>
                    <AntIcon
                      name='plussquare'
                      size={25} color='black'
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={cartStyles.showDetailContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.highlightText}>Show Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </ScrollView>
        <View style={{
          backgroundColor: 'white', height: height * 0.14,
          borderTopWidth: 1,
          borderTopColor: '#DFDFDF',
          padding: 5,
          elevation: 3,
          justifyContent: 'space-between'
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 5,
          }}>
            <Text style={styles.contentText}>Total Price</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.priceText}>10.000$</Text>
              <Text style={styles.contentText}>Included VAT</Text>
            </View>
          </View>

          {/* <TouchableOpacity style={cartStyles.checkoutButton} onPress={() => alert('SEND ORDER')}>
            <Text style={cartStyles.checkoutTitle}>CHECKOUT</Text>
          </TouchableOpacity> */}
          <Button
            buttonStyle={cartStyles.checkoutButton}
            title="CHECKOUT"
          />
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');
const base = width / 2;
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const cartStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  checkoutButton: {
    height: height * 0.05,
    backgroundColor: '#ff1111',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  main: {

    paddingLeft: 5,
    paddingRight: 5
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
  productStyle: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#DFDFDF'
  },
  productImage: {
    width: base / 1.618,
    height: base,
    flex: 1,
    resizeMode: 'cover',
    padding: 20
  },
  mainRight: {
    paddingLeft: 20,
    flex: 3,
    justifyContent: 'space-between'
  },
  productController: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txtName: {
    color: '#A7A7A7',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'sans-serif'
  },
  txtPrice: {
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  txtShowDetail: {
    fontFamily: 'Roboto',
    color: '#B10D65',
    fontSize: 15,
    textAlign: 'right',
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

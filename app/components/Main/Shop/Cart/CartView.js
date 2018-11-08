import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

import { Icon } from 'react-native-elements';

import cake1 from '../../../../media/temp/cake1.jpg';
import cake2 from '../../../../media/temp/cake2.jpg';
import cake3 from '../../../../media/temp/cake3.jpg';
import cake4 from '../../../../media/temp/cake4.jpg';
import cake5 from '../../../../media/temp/cake5.jpg';

export default class CartView extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView
          style={styles.main}>
          {/* Product */}
          <View style={styles.productStyle}>
            <Image source={cake1} style={styles.productImage} />
            <View style={styles.mainRight}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.txtName}>Choco Cake</Text>
                <Icon
                  name='close'
                  size={25} color='#969696'
                />
              </View>
              <View>
                <Text style={styles.txtPrice}>100$</Text>
              </View>
              <View style={styles.productController}>
                <View style={styles.numberOfProduct}>
                  <TouchableOpacity onPress={() => alert('Decreate Quantity')}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity onPress={() => alert('Increate quantity')}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.showDetailContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Product */}
          <View style={styles.productStyle}>
            <Image source={cake2} style={styles.productImage} />
            <View style={styles.mainRight}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.txtName}>Choco Cake</Text>
                <Icon
                  name='close'
                  size={25} color='#969696'
                />
              </View>
              <View>
                <Text style={styles.txtPrice}>100$</Text>
              </View>
              <View style={styles.productController}>
                <View style={styles.numberOfProduct}>
                  <TouchableOpacity onPress={() => alert('Decreate Quantity')}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity onPress={() => alert('Increate quantity')}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.showDetailContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Product */}
          <View style={styles.productStyle}>
            <Image source={cake3} style={styles.productImage} />
            <View style={styles.mainRight}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.txtName}>Choco Cake</Text>
                <Icon
                  name='close'
                  size={25} color='#969696'
                />
              </View>
              <View>
                <Text style={styles.txtPrice}>100$</Text>
              </View>
              <View style={styles.productController}>
                <View style={styles.numberOfProduct}>
                  <TouchableOpacity onPress={() => alert('Decreate Quantity')}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity onPress={() => alert('Increate quantity')}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.showDetailContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Product */}
          <View style={styles.productStyle}>
            <Image source={cake4} style={styles.productImage} />
            <View style={styles.mainRight}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.txtName}>Choco Cake</Text>
                <Icon
                  name='close'
                  size={25} color='#969696'
                />
              </View>
              <View>
                <Text style={styles.txtPrice}>100$</Text>
              </View>
              <View style={styles.productController}>
                <View style={styles.numberOfProduct}>
                  <TouchableOpacity onPress={() => alert('Decreate Quantity')}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity onPress={() => alert('Increate quantity')}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.showDetailContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Product */}
          <View style={styles.productStyle}>
            <Image source={cake5} style={styles.productImage} />
            <View style={styles.mainRight}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.txtName}>Choco Cake</Text>
                <Icon
                  name='close'
                  size={25} color='#969696'
                />
              </View>
              <View>
                <Text style={styles.txtPrice}>100$</Text>
              </View>
              <View style={styles.productController}>
                <View style={styles.numberOfProduct}>
                  <TouchableOpacity onPress={() => alert('Decreate Quantity')}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity onPress={() => alert('Increate quantity')}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.showDetailContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </ScrollView>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => alert('SEND ORDER')}>
          <Text style={styles.checkoutTitle}>TOTAL 500$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#DFDFDF'
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: '#2ABB9C',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    width, backgroundColor: '#DFDFDF'
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
  productStyle: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: 'center'
  },
  mainRight: {
    flex: 3,
    justifyContent: 'space-between'
  },
  productController: {
    flexDirection: 'row'
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txtName: {
    paddingLeft: 20,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtShowDetail: {
    fontFamily: 'Avenir',
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

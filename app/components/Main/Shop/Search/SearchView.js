import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

import cake1 from '../../../../media/temp/cake1.jpg';
import cake2 from '../../../../media/temp/cake2.jpg';
import cake3 from '../../../../media/temp/cake3.jpg';
import cake4 from '../../../../media/temp/cake4.jpg';
import cake5 from '../../../../media/temp/cake5.jpg';

export default class SearchView extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          {/* Product */}
          <View style={styles.product}>
            <Image source={cake1} style={styles.productImage} />
            <View style={styles.mainRight}>
              <Text style={styles.txtName}>Choco Cake</Text>
              <Text style={styles.txtPrice}>50$</Text>
              <Text style={styles.txtMaterial}></Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>Color</Text>
                <View style={{
                  backgroundColor: 'brown',
                  height: 20, width: 20,
                  borderRadius: 10,
                  borderWidth: 1
                }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Product */}
          <View style={styles.product}>
            <Image source={cake2} style={styles.productImage} />
            <View style={styles.mainRight}>
              <Text style={styles.txtName}>Choco Cake</Text>
              <Text style={styles.txtPrice}>50$</Text>
              <Text style={styles.txtMaterial}></Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>Color</Text>
                <View style={{
                  backgroundColor: 'brown',
                  height: 20, width: 20,
                  borderRadius: 10,
                  borderWidth: 1
                }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Product */}
          <View style={styles.product}>
            <Image source={cake3} style={styles.productImage} />
            <View style={styles.mainRight}>
              <Text style={styles.txtName}>Choco Cake</Text>
              <Text style={styles.txtPrice}>50$</Text>
              <Text style={styles.txtMaterial}></Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>Color</Text>
                <View style={{
                  backgroundColor: 'brown',
                  height: 20, width: 20,
                  borderRadius: 10,
                  borderWidth: 1
                }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Product */}
          <View style={styles.product}>
            <Image source={cake4} style={styles.productImage} />
            <View style={styles.mainRight}>
              <Text style={styles.txtName}>Choco Cake</Text>
              <Text style={styles.txtPrice}>50$</Text>
              <Text style={styles.txtMaterial}></Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>Color</Text>
                <View style={{
                  backgroundColor: 'brown',
                  height: 20, width: 20,
                  borderRadius: 10,
                  borderWidth: 1
                }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Product */}
          <View style={styles.product}>
            <Image source={cake5} style={styles.productImage} />
            <View style={styles.mainRight}>
              <Text style={styles.txtName}>Choco Cake</Text>
              <Text style={styles.txtPrice}>50$</Text>
              <Text style={styles.txtMaterial}></Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>Color</Text>
                <View style={{
                  backgroundColor: 'brown',
                  height: 20, width: 20,
                  borderRadius: 10,
                  borderWidth: 1
                }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#DFDFDF',
    flex: 1
  },
  product: {
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
    resizeMode: 'cover'
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
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtColor: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtMaterial: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 15,
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
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 100
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
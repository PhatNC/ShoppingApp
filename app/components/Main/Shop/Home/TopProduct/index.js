import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList, ListView } from 'react-native';


import TopProductItem from './TopProductItem';
import { isNull } from 'util';

const { height, width } = Dimensions.get('window');

export default class TopProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} }

  }

  loadData() {

  }

  componentWillMount() {
    this.props.getProductRequest();
  }


  render() {
    console.log('Product Data');
    console.log(this.props.products);
    const {
      container, titleContainer, title,
      body, productContainer, productImage,
      produceName, producePrice,
	} = styles;
	if (!this.props.products)
	hasProduct
    return (

       <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>TOP PRODUCT</Text>
        </View >
        {/*         
        <FlatList
          style={body}
          data={this.props.products}
          renderItem={({ item }) => <TopProductItem key={item._id} info={item} />}
          keyExtractor={(item, index) => index.toString()}
        /> */}
		
        {this.props.products &&<ListView
          contentContainerStyle={body}
          enableEmptySections
          dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(this.props.products)}
          renderRow={product => (
            <TouchableOpacity style={productContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}>
              <Image source={{ uri: `${product.image}` }} style={productImage} />
              <Text style={produceName}>{product.name.toUpperCase()}</Text>
              <Text style={producePrice}>{product.price}$</Text>
            </TouchableOpacity>
          )}
          renderSeparator={(sectionId, rowId) => {
            if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />;
            return null;
          }}
        />}
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
    flex: 1,
    marginBottom: 20
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
    // justifyContent: 'space-between',
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